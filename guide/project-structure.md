# Exploring project structure

::: tip
ODA-js is written in TypeScript. for more information please refer to [TypeScript documentation](typescriptlang.org)
:::

Singinficant folder: `data`, `config`, `src`.

## `config` folder

This folder contains specific configurations that can vary from project to project.

::: tip config.json
  We use [config.js](https://www.npmjs.com/package/config)
:::

let see inside config for a moment.

`demos` > `api-simple-both` > `config` > `default.json`

```json
{
  "AppName": "api-simple-both", // << (1)
  "hosts": {
    "api-simple-both": { // << (1)
      "host": "localhost", // << (2)
      "port": 3003 // << (2)
    }
  },
  "subscriptions": {
    "host": "localhost", // << (2)
    "port": 3004 // << (2)
  },
  "db": {
    "api": {
      "url": "mongodb://localhost/api-model-editor-test" // << (3)
    },
    "api2": {
      "url": "sqlite://dbapi-model-editor-test.sqlite" // << (4)
    }
  },
  "passport": {
    "salt2": "1ty5I4+ntx6RRNjBKRL1ckF2UpWmAM9s0V7y5JdrndNQo26ZBPXTQA==",// << (5)
    "secret": "THE VERY api-model-editor uwkFM68zadlOVpH9nAZdGAxsDEE35pSKHd7VnmIm80acudewhT+QzQ== ONE", // << (6)
    "expiresIn": "1h" // << (7)
  }
}
```

  1. project name must be the same as package.json >> `name` if not the project won't start
  2. [express.js](expressjs.com) host and port to listen.
  3. the connection strings for [mongoose.js](mongoosejs.com)
  4. the connection strings for [sequelize.js](sequelizejs.com)
  5. `salt` for password encripting
  6. `secret` for password encripting
  7. `expiresIn` expiration time for [JWT](https://jwt.io/) token

  `6`, `7` used with [passport.js](https://jwt.io/)

## `data` folder

This folder contains data for data-pumping.

Content of the sample files is:

### `data` > `dump.json`

```json
{
  "User": [
    {
      "id": "VXNlcjo1YWE2NGMyMTZmOWY1NDNkMDQwZmE5YjI=",
      "userName": "user",
      "password": "123456", // < (1)
      "isAdmin": false,
      "isSystem": false,
      "enabled": true
    },
    {
      "id": "VXNlcjpmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmY=",
      "userName": "system",
      "password": "123456",
      "isAdmin": true,
      "isSystem": true,
      "enabled": true
    }
  ],
  "ToDoItem": [
    {
      "id": "VG9Eb0l0ZW06NWFhNjcyZGNiODllMmY2YzMzNzlkMWI0",
      "name": "first item",
      "description": "some thing!!!",
      "done": true,
      "dueToDate": "2018-03-12T21:00:00.000Z",
      "user": {
        "id": "VXNlcjo1YWE2NGMyMTZmOWY1NDNkMDQwZmE5YjI="
      }
    },
    {
      "id": "VG9Eb0l0ZW06NWFhNjcyZGNiODllMmY2YzMzNzlkMWI1",
      "name": "second item",
      "description": "awesome thing!!!",
      "done": true,
      "dueToDate": "2018-03-12T21:00:00.000Z",
      "user": {
        "id": "VXNlcjo1YWE2NGMyMTZmOWY1NDNkMDQwZmE5YjI="
      }
    },
    {
      "id": "VG9Eb0l0ZW06NWFhNjcyZGNiODllMmY2YzMzNzlkMWI2",
      "name": "another item",
      "description": "the different cool thing!!!",
      "done": true,
      "dueToDate": "2018-03-12T21:00:00.000Z",
      "user": {
        "id": "VXNlcjo1YWE2NGMyMTZmOWY1NDNkMDQwZmE5YjI="
      }
    }
  ]
}
```

::: danger password storage
  user password in `dump.json` stored in unencripted way.
  Never store files with secret information in open places
:::

### `data` > `dump_1.json`

```json
{
  "User": [
    {
      "id": "VXNlcjo1YWE2NGMyMTZmOWY1NDNkMDQwZmE5YjI=",
      "userName": "user",
      "password": "{\"salt\":\"t3MqMOtjaFGymYR4QN+rqg==\",\"hash\":\"8n3i+3wzmyWT72vXXJfEogiswVtzpdusoPTbJxSNzuXJf7wLD31EDRc20d1dfQgWum+xHJbp5B1M29YlDTSwl+ecDfFJ8CQ4uwCFDuOHzPyvHvjO5JgFW8MSYviJeE45tT7B3RqpGd2wJy38/o38iHvXVJXdADK0mCiALleYH6p9KZOsV1TGyuzwtg8YpNYJN9ZMUCOuTUqRzC1CfiL9K7eKs3yklP9S8E4pVSxfykEHR8olLkCFoKYwVdfMBhaekKidU84S3HIaKn0YrKoNVvwRAvSozeu2Rq7KJWkJ2PXTfOSrW8n6FUOC2jiWzOttl8zqRMRVHNXoW0ao/M3gIyxxipZ0FCKH/eHeHBnX8KgTD0KC/tAfP7lTnl/CVpYgAWW3Ch0FeHTjcFQTNgoPMltwsD6LCVXM/2K2TIVvvZtoiD7zf0TgjMCrkG0mdEy+2cpYFGXEDr/8YLkFkDDzB95jvkuzMpwB7m2yA237OdTJd6T0j0Ivel91p+gT8q0VJl2TXto+kLX5w0b1c7gOYIJDlbcs996Qv9TQnCx4mDeQkXzLBHP6P7+kpYlo77IlPEwerFOX9FPU5MdqNCpxFJQn2LkGYosAp0n2737OELf05kHWpl746Yunidd2+ketnI+WpqIAGexKVU3lVhlCm9xoiMow+A6NMvZ3niLMJ9A=\"}",
      "isAdmin": false,
      "isSystem": false,
      "enabled": true,
      "todos": [
        {
          "id": "VG9Eb0l0ZW06NWFhNjcyZGNiODllMmY2YzMzNzlkMWI0"
        },
        {
          "id": "VG9Eb0l0ZW06NWFhNjcyZGNiODllMmY2YzMzNzlkMWI1"
        },
        {
          "id": "VG9Eb0l0ZW06NWFhNjcyZGNiODllMmY2YzMzNzlkMWI2"
        }
      ]
    },
    {
      "id": "VXNlcjpmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmY=",
      "userName": "system",
      "password": "{\"salt\":\"E/tUkgBozLwlib6pGZnwGg==\",\"hash\":\"kVWKlQdLI+N94n+0OWx7aV5DZcfWsiByo5UMc57OKy7S1b43C/JBCUKJ4GT4x2Yvt1rM9dc50IJbgH555kaAPUZsg9YXOC9fhK9bVn3151v2GnTlfRzJAvUnfE1egyaTbyWsrRUDNVa5Cz83UqWJWHOwMPA5Z7yyyesEFZWpAoaEWvlbZ4ZJerCMUt8134/4dQMlqkaf2+dRxjQg8YBHCG7CtJi2+cBwXsqmRqHywdPHBIDnFQNWvp6LBAlgHMSJ+JYwOUKBl4r04TGnIOd47tK3fQgmbsERHDDm8SWx2s66Qf8RoArUoJ/K+XUohDhOQJWxzLf+BcsoWLOHKv7cgtLbcKLkrn0kwAWo6TqqHIBG+XFUh+qiJlcF6F1QHVUR/0wMlA1SnTiMvIThi++svkEVLgQWfsNifAdOC1uCuGl4DybIONlIkVeL+Fk6icPSb5qooTI8trTNaomuzF7XlRDHbEFkav0lo2nIlBeCluEUF4hKA00wfMlz4kp33qkqJotpUBXk4R3emQB4JKV9xF63rqkh8i2ETm+jX00RhRzRzfNFvTsHPOR+FoLvxnR5ng7ua52xRUeZ2lnCXllWLnGOgXyL70DYdjK6VepYrear/MW7h4rFXQCPVmuYy0tH98OEc1Nyhjkx7ofydW2Uuv0zT2mxqY1c/VZ5E496hzg=\"}",
      "isAdmin": true,
      "isSystem": true,
      "enabled": true,
      "todos": []
    }
  ],
  "ToDoItem": [
    {
      "id": "VG9Eb0l0ZW06NWFhNjcyZGNiODllMmY2YzMzNzlkMWI0",
      "name": "first item",
      "description": "some thing!!!",
      "done": true,
      "dueToDate": "2018-03-12T21:00:00.000Z",
      "user": {
        "id": "VXNlcjo1YWE2NGMyMTZmOWY1NDNkMDQwZmE5YjI="
      }
    },
    {
      "id": "VG9Eb0l0ZW06NWFhNjcyZGNiODllMmY2YzMzNzlkMWI1",
      "name": "second item",
      "description": "awesome thing!!!",
      "done": true,
      "dueToDate": "2018-03-12T21:00:00.000Z",
      "user": {
        "id": "VXNlcjo1YWE2NGMyMTZmOWY1NDNkMDQwZmE5YjI="
      }
    },
    {
      "id": "VG9Eb0l0ZW06NWFhNjcyZGNiODllMmY2YzMzNzlkMWI2",
      "name": "another item",
      "description": "the different cool thing!!!",
      "done": true,
      "dueToDate": "2018-03-12T21:00:00.000Z",
      "user": {
        "id": "VXNlcjo1YWE2NGMyMTZmOWY1NDNkMDQwZmE5YjI="
      }
    }
  ]
}
```

::: tip
  user password in `dump_1.json` stored is encripted
:::

## `src` folder

this is the main project folder

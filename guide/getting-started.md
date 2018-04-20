---
title: Getting Started
---
# Getting Started

::: warning Preprequisites
ODA-js requires node.js >= 8.x.x
:::

## Clone sample projects repository

Create working directore where you will haking oda-js:

```bash
git clone https://github.com/ODA-js/demos.git

```

### Oda-js demo Project structure

```
├── api-complex/
├── api-simple-mongoose/
├── api-simple-sequelize/
├── api-simple-both/
├── graphiql-2/
├── static-build/
├── ui-complex/
├── ui-simple/
├── build-yarn.sh
├── build.sh
├── clean.sh
├── compile.sh
├── install-yarn.sh
├── install.sh
├── remove-locks.sh
```

#### type of projects

you can use any of this project as boilerplate or as starter application

- `api` - projects is the demo of api-backend
  - `simple` - simple project boilerplate
    - `mongoose` - use mongoose as default backend db-driver
    - `sequelize` - use sequelize as default backend db-driver
    - `both` - this projects show how we can use mulritple db backends in one schema
  - `complex` - most comprehensive demo which use security features, data security base on custom rules and etc.
- `ui` - projects for ui backend
  - `simple` - works with any `simple` api project
  - `complex` - works wit any `complex` api-project

#### build tools for projects

`build-yarn.sh` - build all projects with `yarn`
`build.sh` - build all projects with `npm`
`clean.sh` - clean directory from garbage files
`compile.sh` - generate and compile all projects
`install-yarn.sh` - install dependencies for projects with `yarn`
`install.sh` - install dependencies with `npm`
`remove-locks.sh` - remove all lock files

for more information see the content of each of this.

## Select project to start with

After building projects run specific project.

::: warning DB requirments
projects:

- `api-simple-mongodb`
- `api-simple-both`
- `api-complex`

requires installation of [mongodb](mongodb.com) please refer specific documentation for detailes of installation.
:::

### Run specific project

run specific `api-` and correctponig `ui-` project

Whatever (`yarn`/`npm`) you prefer to run project it to restore inital data and start project.

::: tip data puming
you need to configure connection strings for project start
:::

#### yarn

```sh
yarn restoreData # makes inital data loading
yarn start
```

#### npm

```sh
npm run resotreData # makes inital data loading
npm start
```

### run ui for api

`ui-` projects is a just [create-react-app](https://github.com/facebook/create-react-app) projects.
to run it use

```sh
npm start
```

```sh
yarn start
```

### discover project

Use default [ui](http://localhost:3000) and [api](localhost:3003/graphiql) to discover default project demo.

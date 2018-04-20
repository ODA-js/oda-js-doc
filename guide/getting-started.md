---
title: Getting Started
---

# Getting Started

::: warning Preprequisites
ODA-js requires node.js >= 8.x.x
:::

## 1. Clone sample projects repository

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



# yaxsi

Custom CLI

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Options](#options)
- [Commands](#commands)

## About

Scaffolds Application interface base on templates. Generates Components, Store, Models and Basic
Configuration.

## Installation

```
npm install -g yaxsi
```

## Options

```
-V, --version             output the version number
-h, --help                display help for command
```

## Commands

```
component|cmp [options] <name>  create component
store|str <name>                create store
model|mdl [options] <name>      create modelF
help [command]            display help for command
```

- [Component](#component)
- [Store](#store)
- [Models](#models)

### Component

Generates new component on given path. Component includes `.vue`, `.js` and `.scss` files.

For creating component:

```
yaxsi component component-name
```

or

```
yaxsi cmp component-name
```

By default, the component is created on `src` folder. Add path in front of project name (`path/page-name/components`) to
create component in different folder.


### Store

Generates new store on given path. Store includes `state`, `mutations`, `actions` and `index` files.

For creating store:

```
yaxsi store component-name
```

or

```
yaxsi str component-name
```

By default, the store is created on `src` folder. Add path in front of project name (`path/page-name`) to create store
in different folder.



### Models

Generates new models on given path. 

For creating models:

```
yaxsi model component-name
```

or

```
yaxsi mdl component-name
```

By default, the model is created on `src` folder. Add path in front of project name (`path/page-name`) to create store
in different folder. 
* use `-p`  or `--post` for adding post model

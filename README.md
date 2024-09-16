# MetalDB

Database adapter based on MongoDB.

This library is basically just a thin wrapper around [the native MongoDB client.](https://github.com/mongodb/node-mongodb-native)

Once required, the `ObjectId` class is available globally.

### Install

```sh
npm i metaldb
```

### Usage

```js
var database = require('metaldb')

var mongodbOptions = {}

var db = await database('localhost:27017/dbname', mongodbOptions)
```

MIT Licensed. Enjoy!

Created by [Eldøy Tech AS](https://eldoy.com)

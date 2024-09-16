# MetalDB

Database adapter based on MongoDB.

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

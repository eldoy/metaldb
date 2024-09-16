var { MongoClient, ObjectId } = require('mongodb')
global.ObjectId = ObjectId

module.exports = async function metaldb(url, opt) {
  var client = new MongoClient(url, opt)
  await client.connect()
  return client.db()
}

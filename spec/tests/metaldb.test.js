var database = require('../../index.js')

var db
beforeAll(async function ({ t }) {
  db = await database('mongodb://localhost:27017/metaldb')
})

it('should connect and create', async function ({ t }) {
  var result = await db.collection('project').insertOne({ name: 'hello' })
  t.ok(!!result.insertedId)
})

afterAll(async function ({ t }) {
  await db.dropDatabase()
  await db.client.close()
})

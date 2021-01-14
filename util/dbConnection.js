const {MongoClient} = require('mongodb')
require('dotenv').config()
let db

const {
  MONGO_USER_2,
  MONGO_PASS_2
} = process.env


exports.connect = async () => {
  const uri = `mongodb+srv://${MONGO_USER_2}:${MONGO_PASS_2}@cluster0.ay8dy.mongodb.net/main?retryWrites=true&w=majority`
  const client = await MongoClient.connect(uri)
  db = client.db()
  return db
}


exports.get = () => db

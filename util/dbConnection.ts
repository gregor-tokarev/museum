import {Db, MongoClient} from 'mongodb'
require('dotenv').config()
let db: Db

const {
    MONGO_USER_2,
    MONGO_PASS_2
} = process.env


export const connect = async (): Promise<any> => {
    const uri = `mongodb+srv://${MONGO_USER_2}:${MONGO_PASS_2}@cluster0.ay8dy.mongodb.net/main?retryWrites=true&w=majority`
    const client: MongoClient = await MongoClient.connect(uri)
    db = client.db()
    return db
}


export const get = (): Db => db

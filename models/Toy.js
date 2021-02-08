const {get} = require('../util/dbConnection')
const {ObjectId} = require('mongodb')

class Toy {
  constructor(title, desc, status, images = []) {
    this.title = title
    this.desc = desc
    this.status = status
    this.images = images
  }
  
  async save() {
    await get().collection('toys').insertOne(this)
  }
  
  static async deleteById(id) {
    await get().collection('toys').deleteOne({_id: ObjectId(id)})
  }
  
  static async updateById(id, toy) {
    await get().collection('toys').updateOne({_id: ObjectId(id)}, {$set: toy})
  }
  
  static async getById(id) {
    const toy = await get().collection('toys').findOne({_id: ObjectId(id)})
    return toy
  }
  
  static async search(query) {
    const collection = get().collection('toys')
    const toys = query === '' ?
      collection.find() :
      collection.find({$text: {$search: query}})
    const res = await toys.toArray()
    return res
  }
}

module.exports = Toy

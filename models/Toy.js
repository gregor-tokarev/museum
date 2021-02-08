const { get } = require('../util/dbConnection')
const { ObjectId } = require('mongodb')

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
    await get().collection('toys').deleteOne({ _id: ObjectId(id) })
  }
  
  static async updateById(id, toy) {
    await get().collection('toys').updateOne({ _id: ObjectId(id) }, { $set: toy })
  }
}

module.exports = Toy

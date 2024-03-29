import {ObjectId} from 'mongodb'
import {get} from '../util/dbConnection'
import {IToy} from '../types/common'

interface searchSettings {
    limit: number
}

export default class Toy implements IToy {
    constructor(
        public title: string,
        public desc: string,
        public status: string,
        public images: string[] = []
    ) {
    }

    async save(): Promise<void> {
        await get().collection('toys').insertOne(this)
    }

    static async deleteById(id: ObjectId | string): Promise<void> {
        await get().collection('toys').deleteOne({_id: new ObjectId(id)})
    }

    static async updateById(id: ObjectId | string, toy: IToy): Promise<void> {
        await get().collection('toys').updateOne({_id: new ObjectId(id)}, {$set: toy})
    }

    static async getById(id: ObjectId | string): Promise<IToy> {
        return await get().collection('toys').findOne({_id: new ObjectId(id)}) as IToy
    }

    static async search(query: string, settings: searchSettings = {limit: 9999999999999}): Promise<IToy[]> {
        const collection = get().collection('toys')

        const toys = query === '' ?
            collection.find().limit(settings.limit) :
            collection.find({$text: {$search: query}}).limit(settings.limit)
        let toysArr: IToy[] = await toys.toArray()
        toysArr = toysArr.map(toy => ({...toy, desc: toy.desc?.slice(0, 200) + '...'}))
        return toysArr
    }
}

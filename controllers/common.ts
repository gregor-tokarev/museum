import {RequestHandler} from "express";

import Toy from "../models/Toy";

export const search: RequestHandler = async (req, res) => {
    const query: string = req.query.search_query as string || ''
    let toys = await Toy.search(query)

    res.status(200).render('list', {toys})
}

export const toy: RequestHandler = async (req, res) => {
    const id = req.params.id
    try {
        const toy = await Toy.getById(id)
        res.status(200).render('toy', {toy})
    } catch (error) {
        console.error(error)
    }
}

export const indexPage: RequestHandler = async (req, res) => {
    try {
        const toys = await Toy.search('', {limit: 6})
        res.status(200).render('index', {toys})
    } catch (err) {
        console.error(err)
    }
}

import {RequestHandler} from "express";

import Toy from "../models/Toy";

export const search: RequestHandler = async (req, res) => {
  const query: string = req.query.search_query as string || ''
  const toys = await Toy.search(query)
  res.status(200).render('index', {toys})
}

export const toy: RequestHandler = async (req, res) => {
  const id = req.params.id
  const toy = await Toy.getById(id)
  res.status(200).render('toy', {toy})
}

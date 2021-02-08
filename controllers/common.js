const Toy = require('../models/Toy')

exports.search = async (req, res) => {
  const query = req.query.search_query || ''
  const toys = await Toy.search(query)
  res.status(200).render('index', {toys})
}

exports.toy = async (req, res) => {
  const id = req.params.id
  const toy = await Toy.getById(id)
  res.status(200).render('toy', {toy})
}

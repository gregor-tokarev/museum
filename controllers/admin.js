const Toy = require('../models/Toy')

exports.create = async (req, res) => {
  const {
    title,
    desc,
    status,
  } = req.body
  const files = req.files.map(img => '/' + img.path)
  const toy = new Toy(title, desc, status, files)
  await toy.save()
  
  res.status(201).render('admin/create', {toy})
}

exports.remove = async (req, res) => {
  const id = req.params.id
  await Toy.deleteById(id)
  res.status(200).render('admin/toys')
}

exports.edit = async (req, res) => {
  const id = req.params.id
  const {
    title,
    desc,
    status,
  } = req.body
  const toy = {
    title,
    desc,
    status,
  }
  
  const files = req.files.map(img => '/' + img.path)
  toy.images = files
  await Toy.updateById(id, toy)
  res.status(200).render('admin/toy', {toy})
}

exports.all = async (req, res) => {
  const toys = Toy.search('')
  res.render('admin/index', {toys})
}

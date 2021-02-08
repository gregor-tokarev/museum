const Toy = require('../models/Toy')

exports.create = async (req, res) => {
  const {
    title,
    desc,
    status
  } = req.body
  const files = req.files.map(img => '/' + img.path)
  const toy = new Toy(title, desc, status, files)
  await toy.save()
  
  res.status(201).render('admin/create', toy)
}

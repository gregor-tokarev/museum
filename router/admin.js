const {Router} = require('express')
const {
  create,
} = require('../controllers/admin')
const upload = require('../util/multer')

const router = Router()

router.all('*', (req, res, next) => {
  const {pass} = req.query
  if (pass === process.env.ADMIN_PASSWORD) {
    res.locals.ADIMN_PASSWORD = pass
    next()
  } else {
    res.send('<h1>Не пущу</h1>')
  }
})

router.delete('/:id')

router.post('/', upload.array('images', 10), create)

router.put('/:id')

module.exports = router

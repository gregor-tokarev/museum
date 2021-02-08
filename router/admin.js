const { Router } = require('express')
const {
  create
} = require('../controllers/admin')
const upload = require('../util/multer')

const router = Router()

router.delete('/:id')

router.post('/', upload.array('images', 10), create)

router.put('/:id')

module.exports = router

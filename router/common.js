const {Router} = require('express')
const {
  search,
  toy
} = require('../controllers/common')


const router = Router()

router.get('/', search)

router.get('/:id', toy)

module.exports = router

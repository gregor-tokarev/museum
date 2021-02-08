const { Router } = require('express')
const {
    create,
    delete,
    edit
} = require('../controllers/admin')
const upload = require('../util/multer')

const router = Router()

router.all('*', (req, res, next) => {
    const { pass } = req.query
    if (pass === process.env.ADIMN_PASSWORD) {
        res.locals.ADIMN_PASSWORD = pass
        next()
    } else {
        res.send('<h1>Не пущу</h1>')
    }
})

router.delete('/:id', delete)

// see https://www.npmjs.com/package/multer documentation
router.post('/', upload.array('images', 5), create)

router.put('/:id', upload.array('images', 5), edit)

module.exports = router
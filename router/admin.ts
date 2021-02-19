import { Router } from 'express';
import {
  create,
  edit,
  remove,
  all
} from '../controllers/admin'
import upload from "../util/multer";
require('dotenv').config()

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


router.post('/', upload.array('images', 5), create)

router.get('/', all)

router.put('/:id', upload.array('images', 5), edit)

router.delete('/:id', remove)


export default router

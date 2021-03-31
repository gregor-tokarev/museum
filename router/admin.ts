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

router.use('*', (req, res, next) => {
  const {pass} = req.query
  if (pass === process.env.ADMIN_PASSWORD) {
  res.locals.ADIMN_PASSWORD = pass
  next()
  } else {
    res.send('<h1>Не пущу</h1>')
  }
})

router.post('/delete/:id', remove)

router.post('/edit/:id', upload.array('images', 5), edit)

router.post('/', upload.array('images', 5), create)

router.get('/create', (req, res) => {
  res.render('admin/add_toy')
})

router.get('/', all)

router.get('/analysis', (req, res) => {
  res.render('admin/analysis')
})

router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  res.render('admin/edit')
})




export default router

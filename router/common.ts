import {Router} from "express";

import {
  search,
  toy
} from '../controllers/common'


const router = Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/list', search)

router.get('/toy/:id', toy)

export default router

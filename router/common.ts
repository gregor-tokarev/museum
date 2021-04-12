import {Router} from "express";

import {
  search,
  toy,
    indexPage
} from '../controllers/common'


const router = Router()

router.get('/', indexPage)

router.get('/list', search)

router.get('/toy/:id', toy)

export default router

import {Router} from "express";

import {
  search,
  toy
} from '../controllers/common'


const router = Router()

router.get('/', search)

router.get('/toy/:id', toy)

export default router

import path from 'path'
import multer, {FileFilterCallback} from "multer";
import {v4} from 'uuid'

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'upload')
  },
  filename(req, file, cb) {
    cb(null, v4() + path.extname(file.originalname))
  }
})
function fileFilter(req: any, file: Express.Multer.File, cb: FileFilterCallback) {
  if (file.mimetype.includes('image')) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const upload = multer({ storage, fileFilter, limits: {fileSize: 1024*1024*5} })

export default upload

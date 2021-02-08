const path = require('path')
const multer = require('multer')
const { v4: uuid } = require('uuid')

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'upload')
  },
  filename(req, file, cb) {
    cb(null, uuid() + path.extname(file.originalname))
  }
})
function fileFilter(req, file, cb) {
  if (file.mimetype.includes('image')) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const upload = multer({ storage, fileFilter, limits: {fileSize: 1024*1024*5} })

module.exports = upload

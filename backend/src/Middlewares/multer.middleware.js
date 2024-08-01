import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/photos")
    },
    filename: function (req, file, cb) {
      
      cb(null, file.oricdginalname)
    }
  })
  
export const upload = multer({ 
    storage, 
})
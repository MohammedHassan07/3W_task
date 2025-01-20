const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {

        // const dest = path.join(__dirname, '../uploadedImages')
        console.log(dest)
        cb(null, dest)
    },

    filename: async (req, file, cb) => {

        // TODO: needs to handle file extension
        // console.log('image upload --> ', file)

        const ext = path.extname(file.originalname);
        const filename = `${Date.now()}${ext}`;

        cb(null, filename)
    }
})

const imageUpload = multer({ storage: storage })
module.exports = imageUpload
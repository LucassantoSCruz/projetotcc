const multer = require('multer');


const storage = multer.diskStorage(
    {
        destination:(req, file, cb)=>{
            cb(null, './public/uploads')
        },
        filename:(req, file, cb)=>{
            cb(null, Date.now().toString() + '_' + file.originalname)
        }
    }
);

const fileFilter = (req, file, cb)=>{
    
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }

}

const upload = multer(
    {
        storage:storage,
        limits:{
            fileSIze: 1024 * 1024 * 1024 * 5
        },
        fileFilter: fileFilter
    }
);

module.exports = upload;
const express = require('express');
const router  = express.Router();

// include CLOUDINARY:
const uploader = require('../config/cloudinary.config.js');



let middleware = (req, res, next) => {
    if (!req.file) {
        res.json({
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
        })
    }
    else {
     uploader.single('imageUrl')  
     next() 
    }
    
}

router.post('/upload', middleware, (req, res, next) => {
     console.log('file is: ', req.file)
    if (!req.file) {
      res.json({error: 'No image uplaoded'})
    }

    res.json({ image: req.file.path });
})

module.exports = router;

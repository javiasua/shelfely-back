const express = require('express');
const router  = express.Router();

// include CLOUDINARY:
const uploader = require('../config/cloudinary.config.js');





router.post('/upload',uploader.single('imageUrl') , (req, res, next) => {
     console.log('file is: ', req.file)
    if (!req.file) {
        res.json({
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
        })
    }
    else {
        res.json({ image: req.file.path });
    }
    
})

module.exports = router;

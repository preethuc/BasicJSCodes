const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

app.use(express.json());
app.use(fileUpload());

app.post('/',(req,res)=>{
    
    // console.log(req.files.screenshot.name);
    console.log(req.files.image);

    const filename = Date.now() + '__' + req.files.image.name;
    const file = req.files.image;
    let uploadPath = __dirname + '/upload/' + filename;
    file.mv(uploadPath,(err)=>{
        if(err){
            return res.status(400).json({
                status:'fail',
                error:err
            })
        }
  })
    res.status(200).json({
        status:'success',
        message:"it's OK...!"
    })
});

app.listen(3000);

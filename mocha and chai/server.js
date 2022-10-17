const express = require('express')

const app = express();

app.get('/', (req,res,next) => {
    // console.log('hello world');
    res.status(200).json({
        name:"preetha"
    })
    next()
})
app.listen(3000)












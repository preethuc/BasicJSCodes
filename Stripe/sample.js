// const express = require("express");
// const app = express();
// app.use(express.json());

// app.post('/api/post/:ytdt', (req, res) => {
//     // const data = {
//     //     name: req.body.name,
//     //     age: req.body.age,
//     //     id: req.params,
//     //     testQ:req.query.preetha
//     // }
//     const data = req.params.ytdt
//     res.status(201).json({
//         status: "success",
//         data
//     })
// })

// app.listen(3000, () => console.log("port 3000"));


const avengers = ['thor', 'captain america', 'hulk'];
avengers.forEach((item, index, avnge)=>{
	console.log(index, item)
})
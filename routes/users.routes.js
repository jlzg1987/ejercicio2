const {Router}=require('express');
const router =Router();

router.get('/',(req,res)=>{

    res.send('Estoy en el GET');
});

router.post('/',  (req, res) => {
const  body =req.body;
console.log (res.status(200).json({body}))
});

module.exports=router;
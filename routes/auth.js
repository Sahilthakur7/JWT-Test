const router = require('express').Router();
const User = require('../models/User');
const { registerValidation } = require('./validation');


router.post('/register', async(req,res) => {

    const {error} = registerValidation(req.body);

    if(error){
        return res.status(400);
    }

    const user = new User({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    });


    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(error){
        res.status(400).send(error);
    }

})

module.exports = router;

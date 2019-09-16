const router = require('express').Router();
const User = require('../models/User');

router.post('/register', async(req,res) => {
    const user = new User({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    });

    try{
        const savedUser = await User.save();
        res.send(savedUser);
    }catch(error){
        res.status(400).send(err);
    }

})

module.exports = router;

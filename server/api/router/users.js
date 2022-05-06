const express = require('express');
const router = express.Router();
router.use(express.json()); 
const mongoose = require('mongoose');
const users = require('../../models/users');


router.get('/', (req,res) => {
    res.send("inside users");
})

router.post('/signup', (req,res) => {

    const {username,firstname,lastname,password} = req.body;

    const newUser = new users({
        username : username,
        firstname : firstname,
        lastname : lastname,
        password : password,
    })

    newUser.save().then(() => { res.status(200).send()})
    .catch((err) => {res.status(400).send(err)});
    

})
router.post('/login', (req,res) => {
    
    const {username,password} = req.body;


    if(username === undefined || password === undefined){
        res.status(400).send("please Provide Valid Input");
    } 
    
    const data = users.findOne({"username":`${username}`}).then((data) => {

        if(data['username'] === username && data['password'] === password){

            req.session.userId = data['_id'];
            
            res.status(200).send('login succesfull');
            
        }

        else{
            res.status(203).send('login unsuccesful');
        }
    }).catch((err) => {

        res.status(400).send(`Error Login ${err}`);
})

})



module.exports = router;



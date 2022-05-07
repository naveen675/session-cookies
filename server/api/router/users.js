const express = require('express');
const router = express.Router();
router.use(express.json()); 
const mongoose = require('mongoose');
const users = require('../../models/users');


router.get('/', (req,res) => {
    res.send(req.session.cookie);
})

router.post('/user', (req,res) => {

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
router.post('/session', (req,res) => {
    
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

        console.log(req.session.userId);
    }).catch((err) => {

        res.status(400).send(`Error Login ${err}`);
})

})


router.post('/me', (req,res) => {

    console.log("inside Update")
    console.log(req.session.userId);
    if(! req.session.userId){
        res.status(400).send('Not logged in');
    }
    else{
        res.status(200).send("updated");
    }
    
})



module.exports = router;



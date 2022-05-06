const express = require('express');
const router = express.Router();

const users = require('./router/users');


router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.use('/users', users);

router.get('/', (req,res) => {
    res.send('api');
})



module.exports = router;
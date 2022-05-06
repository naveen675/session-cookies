const express = require('express');
const mongoose = require('mongoose'); 


const connect = (dbConfig) => {
   
    const {username,password,database} = dbConfig;
    const url = `mongodb+srv://${username}:${password}@cluster0.8yytl.mongodb.net/${database}?retryWrites=true&w=majority`;

    const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

    mongoose.connect(url,connectionParams).then( (response) => {
        console.log('MongoDb connection success');
    }

    ).catch((err) => {
        console.log(`Error connecting to MongoDb ${err}`);
        return err;
    })

    
    
}


module.exports = {connect};

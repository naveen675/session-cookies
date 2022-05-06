const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const uuid = require('uuid').v4;
const port = process.env.PORT || 3001;
const app  = express();
const db = require('mongoose');
const session = require('express-session');
const mongoStore = require('connect-mongo');
app.use(express.json()); 





const api = require('./api/api');
const MongoStore = require('connect-mongo');

const database = process.env.database;
const username = process.env.username;
const password = process.env.password;
const uri = `mongodb+srv://${username}:${password}@cluster0.8yytl.mongodb.net/${database}?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

db.connect(uri, connectionParams).then(() => {
    app.use('/api/api', session({
        genid(){
            return genuuid();
        },
        store : new MongoStore({client: db.connection.getClient()}),
        secret : process.env.secret,
        resave: false,
        saveUninitialized : true
    }) ,api);
}).catch((err) => {
    console.log(`MongoDb connection Unsuccessful ${err}`);

})



app.get('/', (req,res) => {
    res.send('Home');
})


app.listen(port, () => {
  console.log(`Server listening at port: ${port}`)
});


module.exports = app;

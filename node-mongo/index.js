const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = ['Asad', 'Moin', 'Sabed', 'Susmita', 'Sohana', 'Sabana'];


// get
// const rootCall = (req, res) => res.send('Thank you very much');

app.get('/', (req, res) => {
    // res.send("I know whow to open node ami onek pari");
    const froit = {
        product: 'ada',
        price: 220
    }
    res.send(froit);
})

app.get('/fruits/banana', (req, res)=>{
    res.send({fruit: 'banana', quantity:1000, price: 10000 })
})

app.get('/users/:id', (req, res)=>{
    // console.log(req.params.id);
    const id = req.params.id  // take valu from linkbar as id
    // console.log(req.query);  // come from link bar 
    const name = users[id];  // { "id": "0", "name": "Asrafujaman" }
    res.send({id, name});
})

// post
// to take data from users
// to test we can use post man >> body >> raw >> json
app.post('/addUser', (req, res) => {
    // console.log("post req send"); // it will show on vs code terminal
    // console.log("data recieved", req.body);

    // save to database
    const user = req.body;
    user.id = 55;
    res.send(req.body);
    // console.log(user);
})


app.listen(3000, ()=> console.log('Listening to port 3000'));


// node index.js
// http://localhost:3000/

// nodemon install  $ npm install -g nodemon
// nodemon index.js

// to push code >> git init
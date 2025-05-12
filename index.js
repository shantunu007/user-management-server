const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("user server is running");
})

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com' },
    { id: 2, name: 'Sabnoor', email: 'sabnoor@gmail.com' },
    { id: 3, name: 'Sabila', email: 'sabila@gmail.com' }
]

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    console.log('user post method');
    const newUser = req.body;
    newUser.id = users.length + 1;

    //add data to the database
    users.push(newUser);

    res.send(newUser);
    console.log(newUser);
})

app.listen(port, () => {
    console.log(`users server running on port ${port}`);
})
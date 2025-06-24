const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')


app.use(cors())
const users = [
    {
        id: 1,
        name: "Niloy Bhuiyan",
        email: "niloy@example.com",
        age: 22
    },
    {
        id: 2,
        name: "Salah Uddin",
        email: "salah@example.com",
        age: 23
    },
    {
        id: 3,
        name: "Fahad Sarkar",
        email: "fahad@example.com",
        age: 21
    }
];


app.get('/', (req, res) => {
    res.send("User server is running")
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.listen(port, () => {
    console.log('server is running on port', port)
})
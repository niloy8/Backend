const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')


app.use(cors())
app.use(express.json())
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

app.post("/users", (req, res) => {
    console.log('post api hitting')
    console.log(req.body)
    const newUser = req.body
    newUser.id = users.length
    users.push(newUser)
    res.send(newUser)
})

app.listen(port, () => {
    console.log('server is running on port', port)
})
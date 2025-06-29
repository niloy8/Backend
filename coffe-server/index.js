const express = require('express');
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const port = process.env.PORT || 3000;
const app = express();

app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gqjzz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
console.log(uri)
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const coffeCollection = client.db('coffeDB').collection('coffe')

        app.get('/coffe', async (req, res) => {
            const cursor = coffeCollection.find()
            const coffe = await cursor.toArray()
            res.send(coffe)
        })

        app.post('/coffe', async (req, res) => {
            const newCoffe = req.body
            console.log(newCoffe)
            const result = await coffeCollection.insertOne(newCoffe)
            res.send(result)
        })

        app.put('/coffe/:id', async (req, res) => {
            const id = req.params.id
            const updatedCoffe = req.body
            const filter = { _id: new ObjectId(id) }
            const options = { upsert: true }
            const result = await coffeCollection.updateOne(filter, { $set: updatedCoffe }, options)
            res.send(result)
        })

        app.delete('/coffe/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await coffeCollection.deleteOne(query)
            res.send(result)
        })
        app.get('/coffe/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await coffeCollection.findOne(query)
            res.send(result)
        })


        //user DB
        const userCollection = client.db('coffeDB').collection('users')
        app.post('/users', async (req, res) => {
            const user = req.body
            const result = await userCollection.insertOne(user)
            res.send(result)
        })

        app.get('/users', async (req, res) => {
            const cursor = userCollection.find()
            const users = await cursor.toArray()
            res.send(users)
        })

        app.delete('/users/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await userCollection.deleteOne(query)
            res.send(result)
        })
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello World')
})


app.listen(port, () => {
    console.log("Server is running")
})
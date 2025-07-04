const express = require('express')


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
//EG2SCPofZWfkW4Kz

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




const uri = "mongodb+srv://niloybhuiyan321:EG2SCPofZWfkW4Kz@cluster0.gqjzz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
        const myDB = client.db("myDB");
        const userCollection = myDB.collection("users");
        //Read data
        app.get('/users', async (req, res) => {
            const cursor = userCollection.find()
            const users = await cursor.toArray()
            res.send(users)

        })

        //specifig data shown
        app.get('/users/:id', async (req, res) => {
            const query = { _id: new ObjectId(req.params.id) }
            const user = await userCollection.findOne(query)
            res.send(user)

        })
        //Post data
        app.post('/users', async (req, res) => {
            const user = req.body
            const result = await userCollection.insertOne(user);
            res.send(result)
            console.log(user)
        })
        //Delete Data
        app.delete('/users/:id', async (req, res) => {
            console.log(req.params.id)
            const query = { _id: new ObjectId(req.params.id) }
            const result = await userCollection.deleteOne(query)
            res.send(result)
        })
        //Update data
        app.put('/users/:id', async (req, res) => {
            const id = req.params.id
            const user = req.body
            console.log(user)
            const filter = { _id: new ObjectId(id) }
            const options = { upsert: true }
            const updateDoc = {
                $set: {
                    name: user.name,
                    email: user.email
                }

            }
            const result = await userCollection.updateOne(filter, updateDoc, options)
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




app.listen(port, () => {
    console.log('server is running on port', port)
})
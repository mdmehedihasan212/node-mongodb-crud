const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// user:dbuser384
// password:ueTcrBTRNza0zoq0


const uri = "mongodb+srv://dbuser384:ueTcrBTRNza0zoq0@cluster0.drus2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const userConnection = client.db("foodExpress").collection("user");
        const user = { name: "abdus sami", email: "abdussami@gmail.com" };
        const result = await userConnection.insertOne(user);
        console.log(`user connection id ${result.insertedId}`);
    }
    finally {
        // await client.close();
    }

}
run().catch(console.div);

app.get('/', (req, res) => {
    res.send('CRUD mongodb is ready')
})

app.listen(port, () => {
    console.log('Example app listening on port', port)
})
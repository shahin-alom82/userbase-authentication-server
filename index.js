const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
require('dotenv').config()

const port = process.env.PORT || 5000;





// Mongobd Connect Start
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sozmemk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
      serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
      }
});
async function run() {
      try {
            await client.connect();

           

            await client.db("admin").command({ ping: 1 });
            console.log("Mongodb Connected successfully!");
      } finally {
      }
}
run().catch(console.dir);
// Mongobd Connect End




app.get('/', (req, res) => {
      res.send('Server base is Running!')
})
app.listen(port, () => {
      console.log(`Server base is Sitting On Port ${port}`)
})
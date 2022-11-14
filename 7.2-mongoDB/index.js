const express = require('express');
const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb+srv://hostname:27017/?maxPoolSize=20&w=majority";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    // Establish and verify connection
    let db = client.db("admin")
    console.log("Connected successfully to server");
    db.createCollection("JDT")
    let collection = db.collection("JDT")


    // Express app
    const app = express();
    const PORT = 3000;
    
    app.listen(PORT, (err) =>{
        if(!err)
            console.log("Server is up and running on port 3000.")
        else 
            console.log("Server failed to start.", err);
        }
    );

    app.get("/", (req, res) => {
        res.send()
    })

    app.get("/:id", (req, res) => {
        res.send(collection.findOne({id: req.params.id}))
    })

    app.post("/", (req, res) => {
        res.send()
    })
    
    app.put("/:id", (req, res) => {
      res.send()
    })

    app.delete("/:id", (req, res) => {
      res.send()
    })

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run()

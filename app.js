const express = require("express");
const app = express();
const mongoose = require("mongoose")
const env = process.env.NODE_ENV || "production";
const MONGO_URI =
  env === "test" ? process.env.TEST_MONGO_URI : process.env.MONGO_URI;

  mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log(`connected to MongoDB - ${env}`);

  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

  const ticketSchema = new mongoose.Schema({
    title: String,
    content: String,
    userEmail: String,
    done: Boolean,
    creationTime: Number,
    labels: Array
  });

const Ticket = mongoose.model("Ticket", ticketSchema)

app.use(express.static("client/build"));
app.use(express.json())

app.get("/api/tickets", (req, res)=>{
    const searchText = req.query.searchText;
    Ticket.find().then((data)=>{
        if(searchText){
            res.send(data.filter((ticket)=> ticket.title.toLowerCase().includes(searchText.toLowerCase())));
        }
        else{
            res.send(data);
        }
    }).catch((err)=>{
        res.status(500).send({error: err.message});
    })
})

app.patch("/api/tickets/:ticketid/:isDone", (req, res)=>{
    const {ticketid} = req.params;
    const {isDone} = req.params;
    Ticket.findById(ticketid).then((data)=>{
        if(isDone === "done" || isDone === "undone"){
            if(isDone === "done"){
                data.done = true;
            }
            if(isDone === "undone") {
                data.done = false; 
            }
            data.save().then(()=>{
                res.send({updated: true});
            })
        }
        else{
            const err = new Error("Invalid 'done' status");
            console.log(err.message)
            res.status(400).send({error: err.message});
        }
    }).catch(()=>{
        const err = new Error("Invalid ID");
        console.log(err.message);
        res.status(400).send({error: err.message});
    })
})

app.post("/api/tickets",((req, res)=>{
    const dataFromUser = req.body;
    const newTicket = new Ticket({
        title: dataFromUser.title,
        content: dataFromUser.content,
        userEmail: dataFromUser.userEmail,
        done: false,
        creationTime: (new Date().getTime() + 7200000),
        labels: dataFromUser.labels
    })
    newTicket.save().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err.message)
        res.status(500).send({error: err.message})
    })
}))

module.exports = app;

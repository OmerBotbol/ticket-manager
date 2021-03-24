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

app.get("/api/tickets", (req, res)=>{
    const searchText = req.query.searchText
    Ticket.find().then((data)=>{
        if(searchText){
            res.send(data.filter((ticket)=> ticket.title.includes(searchText)))
        }
        else{
            res.send(data)
        }
    })
})

module.exports = app;

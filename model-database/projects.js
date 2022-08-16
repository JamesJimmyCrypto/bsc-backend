require("dotenv").config();
const mongoose = require("mongoose");




mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/bsclaunchpad",
   { useNewUrlParser: true, useUnifiedTopology: true})
   .then(() => console.log('connected to DB!'))
    .catch(error => console.log(error));



  



//for users collection
const projectSchema = mongoose.Schema({
 dateandtime : {type: Date, default: Date.now},
 tokenName: {type: String, required: true},
 tokenDescription: {type: String, required: true},
 chain: {type: String, required: true},
 imgUrl: {type: String, required: true},
 votes: {type: Number},
});


 module.exports = {
   Projects: mongoose.model("Projects", projectSchema),
 }

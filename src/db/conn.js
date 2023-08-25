const mongoose = require("mongoose");

// creating a database
mongoose.connect("mongodb://127.0.0.1:27017/Priyu",{
    useNewUrlParser: true,
    useUnifiedTopology : true,
}).then(() =>{
    console.log("connection succesful");
}).catch((error) => {
    console.log(error);
}) 
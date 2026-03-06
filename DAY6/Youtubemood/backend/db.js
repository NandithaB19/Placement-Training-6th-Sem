const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/YoutubeMood")
.then(()=>console.log("mongo connected"))
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const app = express();

app.use(cors());
app.use(express.json());
const taskRoutes = require("./routes/taskRoutes");

mongoose.connect(process.env.MONGO_URI)
        .then(()=>console.log("MONGO connected"));

app.use("/api/tasks",taskRoutes);
const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`);
})


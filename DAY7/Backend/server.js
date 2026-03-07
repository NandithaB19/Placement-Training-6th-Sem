require('dotenv').config();
const PORT=process.env.PORT;
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const taskRoutes = require("./routes/taskRoutes");
const MONGO_URL = process.env.MONGO_URL;
const cors = require('cors');

app.use(cors());
app.use(express.json());
mongoose.connect(MONGO_URL).then(
    ()=>console.log("Mongo Connected")
)
app.use("/api",taskRoutes);
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})

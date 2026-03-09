require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const authRoutes=require("./routes/authRoutes");
const app=express();
const MONGO_URL=process.env.MONGO_URL;
const PORT=process.env.PORT;

app.use(cors());
app.use(express.json());


mongoose.connect(MONGO_URL).
then(()=>console.log("Mongo Connected"));
app.use("/api/auth",authRoutes);

app.get("/",(req,res)=>{
    res.send("App is running");
})

app.listen(PORT,()=>{
    console.log(`Server started ${PORT}`);
})
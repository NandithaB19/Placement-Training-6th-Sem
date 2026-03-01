const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json())

const PORT = 1000

function readData(){
    const data = fs.readFileSync("./data.json");
    return JSON.parse(data);

}

app.get("/products" ,(req,res)=>{
    const products = readData();
    res.json(products);
});

app.get("/products/:id",(req,res)=>{
    const products = readData();
    const id = parseInt(req.params.id);
    const product = products.find(p=> p.id === id);
    if(!product){
        return res.json({message: "Product not found!! "});
    }
    res.json(product);
})

function writeData(data){
    fs.writeFileSync("./data.json", JSON.stringify(data,null,2));

}

app.post("/products", (req, res) => {
    const products = readData();
    const newProduct = req.body;

    newProduct.id = Date.now();
    products.push(newProduct);
    writeData(products);

    res.json(newProduct);
});

app.delete("/products/:id",(req,res)=>{
    const products = readData();
    const id=parseInt(req.params.id);
    const filteredProducts = products.filter(p=> p.id!==id);

    if(products.length == filteredProducts.length){
        res.json({message:"No product with id"});
    }
    writeData(filteredProducts);
    res.json({message:"Product deleted"});
})

app.put("/products/:id", (req, res) => {
    const products = readData();
    const id = parseInt(req.params.id);

    const updatedProducts = products.map(p =>
        p.id === id ? { ...p, ...req.body, id } : p
    );

    writeData(updatedProducts);
    res.json({ message: "Product updated" });
});
app.listen(PORT);
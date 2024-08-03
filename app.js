const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:false}))


app.get('/add-product',(req,res)=>{
    res.send(`
    <form action="/add-product" method="POST">
      <input type="text" id="productName" name="productName" placeholder="Product Name" required>
      <br>
      <input type="text" id="productSize" name="productSize" placeholder="Product Size" required>
      <br>
      <button type="submit">Add Product</button>
    </form>
  `)
    })

    app.post('/add-product', (req, res) => {
       const { productName, productSize } = req.body;
       console.log(`Product Name: ${productName}, Product Size: ${productSize}`);
       //console.log(req.body);
        res.send('Product added successfully!');
      });

   app.listen(3000);

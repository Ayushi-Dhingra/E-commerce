var express=require('express');
var app=express();
var products=[];
var cors=require('cors');
var fs = require("fs");
function writefile(s)
{
	/*fs.readFile("cartdata.txt", function(err, buf) {
  		console.log(buf.toString());
	});*/
	fs.writeFile("cartdata.txt", JSON.stringify(products), (err) => {
  	if (err) console.log(err);
  	console.log("Successfully Written to File.");
	});
}
app.use(cors());
app.use(express.json());
app.post('/product',function(req,res){
products.push(req.body);
writefile(req.body);
console.log(products);
});/*
app.get('/prod',function(req,res){
res.send();
});*/
app.listen(3000,function(error){
console.log(error,"start at 3000");

});
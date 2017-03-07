var express = require("express");
var app = express();

//app.set("views","/views");
app.set("view engine", "pug");

app.use(express.static("public"));

app.get("/:date",(req,res)=>{
	var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
	var date = req.params.date;
	
	if(!/\D/g.test(date)){
		var date2 = date
		date = new Date(date*1000);
		var year = date.getFullYear();
		var month = date.getMonth();
		var day = date.getDate();
		res.json({"unix":date2, "natural":""+months[month]+" "+day+", "+year+""});
	}
	else{
		date = new Date(date);
		var year = date.getFullYear();
		var month = date.getMonth();
		var day = date.getDate();
		res.json({"Unix" : Math.floor(date/1000), "natural":""+months[month]+" "+day+", "+year+""});
	}
});
app.get("/",(req,res)=>{
	res.render("index");
})
app.listen(3000,()=>{
	console.log("on air")
})
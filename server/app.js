require('dotenv').config()
const express = require('express');
const app = express();
const DbConnection = require("./dbatlas")
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./Favorites')

app.use(bodyParser.json());
const Favorites = mongoose.model("Favorites");

const mongoURI = ""+process.env.API_URL+""

mongoose.connect(mongoURI,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})

mongoose.connection.on("connected",()=>{
    console.log("connected to mongodb")
})
mongoose.connection.on("error",(err)=>{
    console.log("error", err)
})

app.get("/",(req,res)=>{
    res.send("welcome")
})

//mongoDB routes**********************************************************************

//get all restaurants
app.get("/restAtlas", async (req, res) => {
	const dbCollection = await DbConnection.getCollection("Restaurants");
	const restaurants = await dbCollection.find().toArray();
	res.json(restaurants);
});

//get all users
app.get("/users", async (req,res)=> {
  const dbCollection = await DbConnection.getCollection("Users");
  const users = await dbCollection.find().toArray();
  res.json(users);
})

//Get restaurants by ID
app.get("/restAtlas/:id", async (req,res)=> {
  const restId = req.params.id;
  const dbCollection = await DbConnection.getCollection("Restaurants");
  const restaurant = await dbCollection.findOne({id: restId});
  res.json(restaurant);
})

//Get restaurants by category
app.get("/restAtlas/:category/categories", async (req,res)=> {
  const restCat = req.params.category;
  const dbCollection = await DbConnection.getCollection("Restaurants");
  const restaurant = await dbCollection.findOne({category: restCat});
  res.json(restaurant);
})

//Mongooose route*****************************************************************

app.post("/Favorites", (req,res)=>{
   const favorite = new Favorites({
       userId: req.body.userId,
       restaurantId : req.body.restaurantId,
   })
   favorite.save()
   .then(data => {
       console.log(data)
       res.send("posted")
   }).catch(err =>{
    console.log(err)
})
})

app.post("/update/:userID", (req,res)=>{
    Favorites.findByIdAndUpdate(req.params.userId,{
        userId: req.body.userId,
        restaurantId : req.body.restaurantId,
    }).then(data => {
        console.log(data)
        res.send("update")
    }).catch(err =>{
        console.log(err)
    })
})

app.listen(3000,()=>{
    console.log("server running");
})
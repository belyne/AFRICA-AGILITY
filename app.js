const bodyParser = require('body-parser');
const express = require('express');

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const port = 3000;

app.get("/david", (req, res)=> {
  res.send("Hello David"); 
})

app.post("/david", (req, res)=> {
  res.send("Nice meeting you David"); 
})

app.put("/david", (req, res)=> {
  res.send("Good morning you David"); 
})

app.patch("/david", (req, res)=> {
  res.send("GoodByee David"); 
})

app.delete("/david", (req, res)=> {
  res.send("Nice meeting you David"); 
})

app.post('/api/user', (req, res) => {
  const body = req.body

  res.json({message: "post successful", "body": body})
})

app.get('/api/user', (req, res) => {

  res.json({message: "get all users"})
})

app.get('/api/user/:id', (req, res) => {

  const id = req.params.id

  res.json({message: `Get a user with id ${id}`})
})

app.post('/api/user/:id', (req, res) => {

  const id = req.params.id

  res.json({message: `Create a user with id ${id}`})
})


app.put('/api/user/:id', (req, res) => {

  const id = req.params.id

  res.json({message: `This user with id ${id} was updated`})
})

app.patch('/api/user/:id', (req, res) => {

  const id = req.params.id

  res.json({message: `this user with id ${id} was partially updated`})
})

app.delete('/api/user/:id', (req, res) => {

  const id = req.params.id

  res.json({message: `this user with id ${id} was deleted`})
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
})
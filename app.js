const express = require('express');

const app = express()

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

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
})
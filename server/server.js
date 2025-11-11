import express from 'express'

const app=express();

const Port=3000;

app.get('/',()=>{
    console.log("Api is working")
})

app.listen(Port,()=>{
  console.log(`server is running on Port ${Port}`)
})


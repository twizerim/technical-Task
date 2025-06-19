import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import router from "./router"

dotenv.config()

const Task = express()
Task.use(bodyParser.json())
Task.use("/request",router)

const port = process.env.PORT

Task.listen(port,()=>{
    console.log(`Port is successfuly running on ${port} !!!`)
})
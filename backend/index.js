import express from 'express'
import dotenv from 'dotenv'
import { databaseConnection } from './src/Databases/index.js';

dotenv.config({path: './.env'})
const app = express();

databaseConnection().then((connectionInstance)=>{
    const port = process.env.PORT;
    console.log(`mongodb connection has been established at`, connectionInstance.connection.host)
    app.listen(port, ()=>{
        console.log(`server is up and live on ${port}`)
    })
})
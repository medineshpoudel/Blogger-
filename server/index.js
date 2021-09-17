import express from 'express'
import Connection from './database/db.js'
import router from './Router/route.js'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express();
app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',router)
app.get('/', (req,res)=>{
    res.end('hello ')
})
const PORT = 8000;
app.listen(PORT, ()=>{
    console.log(`listening to the server on port ${PORT}`)
})
Connection();
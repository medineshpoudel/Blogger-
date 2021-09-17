import grid from 'gridfs-stream'
import mongoose from 'mongoose'
const URL = 'http://localhost:8000'
const con = mongoose.connection;
con.once('open', ()=>{
    let gfs =  grid(con.db, mongoose.mongo)
   gfs.collection('fs')
})
export const saveFile = async (req,res)=>{
  try{ if(!req.file){
      return res.status(404).json('file not found')
   }
   const imageUrl = `${URL}/file/${req.file.filename}`
   res.status(200).json(imageUrl)
}catch(err){
    res.status(500).json(err)
}
}
export const getFile = async (req,res)=>{
    try{

    }catch(err){
         res.status(500).json('failer to fetch the image',err)
           }
}
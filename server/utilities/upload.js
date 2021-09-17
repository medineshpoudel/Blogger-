import multer from 'multer'
import {GridFsStorage} from 'multer-gridfs-storage'
const storage = new GridFsStorage({
    url: 'mongodb+srv://dineshdb:dinesh21219@cluster0.x6xat.mongodb.net/blogger?retryWrites=true&w=majority',
    options: { useUnifiedTopology : true, useNewUrlParser : true},
    file: (req,file)=>{
       const match =  ["image/png", "image/jpg"]
       if(match.indexOf(file.memeType)=== -1){
        return `${Date.now()}-blog-${file.originalname}`;
        return {
            bucketName: "photos",
            fileName: `${Date.now()}-blog-${file.originalname}`
        }
       }
    } 
})
export default multer(storage);
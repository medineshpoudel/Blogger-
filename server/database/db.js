import mongoose from 'mongoose';
const connectionString = `mongodb+srv://dineshdb:dinesh21219@cluster0.x6xat.mongodb.net/blogger?retryWrites=true&w=majority`
const Connection =async ()=>{
    try{
        await mongoose.connect(connectionString,{useNewUrlParser : true,useUnifiedTopology: true,})
        console.log('connection to the database successful')
    }
    catch(err){
        console.log('error connecting to the database',err);
    }
}
export default Connection;
import mongoose from 'mongoose'
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    categories :{
        type: String,
        
    },
    description: {
        type: String,
        required:false
    },
    username: {
        type: String,
        required: true
    },
    image: {
        type: String,
        
    },
    date: {
        type: String,

    }

})
const Post = mongoose.model('Post', postSchema)
export default Post
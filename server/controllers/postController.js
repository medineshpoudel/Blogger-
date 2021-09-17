import mongoose from "mongoose"
import Post from "../schema/postSchema.js"
export const postCreate = async (req,res)=>{
    
    try{
      const post =  await new Post(req.body)
      post.save();
      res.status(200).json('new post created successfully')
      console.log(req.body)
      
    }
    catch(err){
        res.status(500).json(err)
    }
}
export const displayPosts = async (req,res)=>{
  let username = req.query.username;
  let categories = req.query.categories;
  let posts;
  try{
    if(username){
      posts = await Post.find({username:username})
    }
   else if(categories){
     posts =  await Post.find({categories:categories})
    }
    else{ 
    posts = await Post.find({})
    res.status(200).json(posts)
    }
  }catch(err){
    res.status(500).json(err)
  }
}
export const getPost = async (req,res)=>{
  try{
    let post = await Post.findById(req.params.id);
    res.status(200).json(post)
  }catch(err){
    res.status(500).json(err)
  }
}
export const updatePost = async (req,res)=>{
  try{
    await Post.findByIdAndUpdate(req.params.id, {$set: req.body})
    res.status(200).json('blog updated successfully')
  }catch(err){
    req.status(500).json(err)
  }
}
export const deletePost = async (req,res)=>{
  try{
      let post = await Post.findById(req.params.id)
      await post.delete();
    res.status(200).json('post deleted')
  }catch(err){
      req.status(500).json(err)
  }
}
export const saveFile = async (req,res)=>{
    try{
      let file = await Post.insertOne(req.body)
    }catch(err){
      req.status(500).json(err)
    }
}
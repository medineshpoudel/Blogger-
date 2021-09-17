import express from 'express';
import { postCreate, displayPosts, getPost,updatePost,deletePost,  } from '../controllers/postController.js'
import { saveFile,getFile } from '../controllers/fileController.js';
import upload from '../utilities/upload.js'
const router = express.Router()
router.post('/create', postCreate)
router.get('/posts', displayPosts)
router.get('/post/:id', getPost)
router.post('/update/:id',updatePost)
router.delete('/delete/:id',deletePost)
router.post('/file/upload',upload.single('file'), saveFile)
router.get('file/:filename', getFile)
export default router;
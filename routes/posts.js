import express from 'express'
import {createPost,
        getPost,
        deletePost
        } from '../controllers/posts.js'

const router = express.Router();

// //RETRIEVES ALL POSTS
router.get('/', getPost)

//CREATES NEW POST
router.post('/', createPost);

// //DELETES A POST BY ID
router.delete('/:id', deletePost);

// //UPDATES A POST BY ID
// router.patch('/:id', updatePost);

export default router
const express = require("express");
const { authMiddleware } = require("../middleware");
const { Posts } = require("../db");
const mongoose = require('mongoose');


const router = express.Router();

router.post('/newpost',authMiddleware,(req,res)=>{

    const {userId,content,content_body} = req.body;
    
    ///
    async function addPost(postTime) {
        try {
            // Find the post with the given userId
            
            
            let post = await Posts.findOneAndUpdate(
                { userId: userId },
                { $push: { posts: { content: content,content_body: content_body,postTime: postTime } } }, // Use $push to add to the posts array
                { new: true, upsert: true } // Options: new - return the modified document, upsert - create if doesn't exist
            );
    
            // return post;
        } catch (error) {
            console.error(error);
            throw new Error('Error adding post');
        }
    }
    ///
    const postTime = new Date().toTimeString();
    addPost(postTime)
        .then(()=>{
            res.json({
                message:"Post Added"
            })
        })
        .catch(()=>{
            message:"Error Adding the post"
        });



});

module.exports = router;
import express from 'express';
import mongoose from 'mongoose';
import ArchivePost from '../models/archivePost.js'

const router = express.Router();

export const archivePost = async (req, res) => {
    console.log(req.params.id)
    // const { movieTitle, creator, releaseDate, poster, priority, submittedOn, value } = req.body;
    // const newArchivePost = new ArchivePost({ movieTitle, creator, releaseDate, poster, priority, submittedOn, value })
    // try {
    //     await newArchivePost.save();
    //     res.status(201).json(newArchivePost)
    // } catch (error) {
    //     res.status(409).json({message: error.message})
    // }
}

export const getArchive = async (req, res) => {
    
}

export const deleteArchive = async (req, res) => {

}
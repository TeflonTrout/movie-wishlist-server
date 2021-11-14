import express from 'express';
import mongoose from 'mongoose';
import ArchivePost from '../models/archivePost.js'

const router = express.Router();

export const archivePost = async (req, res) => {
    console.log('request received')
    const { movieTitle, creator, releaseDate, poster, priority, submittedOn, value, id } = req.body;
    console.log(req.body)
    const newArchivePost = new ArchivePost({ movieTitle, creator, releaseDate, poster, priority, submittedOn, value, id })
    try {
        await newArchivePost.save();
        res.status(201).json(newArchivePost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const getArchive = async (req, res) => {
    try {
        const archivePosts = await ArchivePost.find().sort({value: -1})       
        res.status(200).json(archivePosts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteArchive = async (req, res) => {

}
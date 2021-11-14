import express from 'express';
import mongoose from 'mongoose';
import ArchivePost from '../models/archivePost.js'

const router = express.Router();

export const archivePost = async (req, res) => {
    console.log(req.body)
    const { id, movieTitle, creator, priority, releaseDate, poster, value, submittedOn, __v, _id } = req.body;
    const newArchivePost = new ArchivePost({ id, movieTitle, creator, priority, releaseDate, poster, value, submittedOn, __v, _id })
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
    console.log(req.params.id)
    ArchivePost.findByIdAndRemove({_id: req.params.id})
    .then(function(post){
        res.send(post)
    })
}
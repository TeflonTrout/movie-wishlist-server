import express from 'express';
import { archivePost, getArchive, deleteArchive } from '../controllers/archive.js';
const router = express.Router();

// RETRIEVE ALL ARCHIVED
router.get("/", getArchive)

// ARCHIVE NEW MOVIE
router.post("/", archivePost)

// DELETE ARCHIVED MOVIE
router.delete('/:id', deleteArchive);

export default router
import express from 'express';
import { archivePost, getArchive, deleteArchive } from '../controllers/archive.js';
const router = express.Router();

router.get("/", getArchive)

router.post("/", archivePost)

router.delete('/:id', deleteArchive);

export default router
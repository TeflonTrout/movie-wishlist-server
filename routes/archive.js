import express from 'express';
import { archivePost, getArchive, deleteArchive } from '../controllers/archive';
const router = express.Router();

router.get("/", getArchive)

router.post("/", archivePost)

router.delete('/:id', deleteArchive);
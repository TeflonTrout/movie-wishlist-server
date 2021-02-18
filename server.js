import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

//DECLARE RUNNING PORT
const PORT = process.env.PORT || 5000

//ROUTES
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/posts', postRoutes);

//MongoDB Setups
const DB_URL = process.env.MONGO_DB_URL

//MONGOOSE CONNECTION
mongoose.connect(DB_URL, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(app.listen(PORT, () => {
        console.log(`**SERVER RUNNING ON PORT ${PORT}**`)
    }))
    .catch(error => console.log(error.message));
mongoose.set('useFindAndModify', false);

import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const archiveShema = mongoose.Schema({
    // id: String,
    movieTitle: {type: String, required: true, unique: true},
    // creator: String,
    // priority: String,
    // releaseDate: String,
    // poster: String,
    // value: Number,
    // submittedOn: String,
    // _id: String
})

archiveShema.plugin(uniqueValidator);
const ArchivePost = mongoose.model('ArchivePost', archiveShema)

export default ArchivePost
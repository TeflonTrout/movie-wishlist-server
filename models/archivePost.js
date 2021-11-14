import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const archiveShema = mongoose.Schema({
    id: String,
    movieTitle: {type: String, required: true, unique: true},
    creator: String,
    releaseDate: String,
    poster: String,
    submittedOn: String,
})

archiveShema.plugin(uniqueValidator);
const ArchivePost = mongoose.model('ArchivePost', archiveShema)

export default ArchivePost
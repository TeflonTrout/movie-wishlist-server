import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const archiveShema = mongoose.Schema({
    id: {
        type: Date,
        default: Date.now()
    },
    movieTitle: {type: String, required: true, unique: true},
    creator: String,
    priority: String,
    releaseDate: String,
    poster: String,
    value: Number,
    submittedOn: {
        type: Date,
        default: Date.now()
    }
})

archiveShema.plugin(uniqueValidator);
const ArchivePost = mongoose.model('ArchivePost', archiveShema)

export default ArchivePost
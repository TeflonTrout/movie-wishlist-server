import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const postSchema = mongoose.Schema({
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

postSchema.plugin(uniqueValidator);
const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage
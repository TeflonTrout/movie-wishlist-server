import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    id: {
        type: Date,
        default: Date.now()
    },
    movieTitle: String,
    creator: String,
    priority: String,
    submittedOn: {
        type: Date,
        default: Date.now()
    }
})

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage
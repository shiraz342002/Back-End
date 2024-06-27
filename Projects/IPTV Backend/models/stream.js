import mongoose from "mongoose";

const streamSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    episode_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Episode',
        required: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },
    time: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

export default mongoose.model("Stream", streamSchema);

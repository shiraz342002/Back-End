import mongoose from "mongoose";

const episodeSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    season_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Season',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    thumbnail_id: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true 
});

export default mongoose.model("Episode", episodeSchema);

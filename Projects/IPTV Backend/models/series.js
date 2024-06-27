import mongoose from "mongoose";

const seriesSchema = new mongoose.Schema({
    id: {
        type: Number,
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
    trailer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'File',
        required: true,
    },
    thumbnail_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'File',
        required: true,
    }
}, {
    timestamps: true
});

export default mongoose.model("Series", seriesSchema);

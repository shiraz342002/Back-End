import mongoose from "mongoose";

const genreSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }
}, {
    timestamps: true 
});

export default mongoose.model("Genre", genreSchema);

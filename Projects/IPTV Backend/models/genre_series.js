import mongoose from "mongoose";

const genreSeriesSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Genre',
        required: true,
    },
    genre_id: {
        type: Number,
        required: true,
    },
    series_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Genre',
        required: true,
    }
}, {
    timestamps: true 
});

export default mongoose.model("GenreSeries", genreSeriesSchema);

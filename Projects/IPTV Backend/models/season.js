import mongoose from "mongoose";

const seasonSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjecteId,
        ref:'Series',
        required: true,
    },
    series_id: {
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
    }
}, {
    timestamps: true
});

export default mongoose.model("Season", seasonSchema);

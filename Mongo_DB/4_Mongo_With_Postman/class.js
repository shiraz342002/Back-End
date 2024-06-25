import mongoose from 'mongoose';

const classSchema = new mongoose.Schema({
  className: String,
  students: [String] // Adjust according to your schema requirements
});

const Class = mongoose.model('Class', classSchema);
export default Class;

import Right from '../models/right_model.js';
import Staff from '../models/staff_model.js'; 
export const findDetailsByStaffId = async (req, res) => {
    const { staff_id } = req.params;
    try {
        const existingStaff = await Staff.findById(staff_id);
        if (!existingStaff) {
            return res.status(404).json({ error: 'Staff member not found' });
        }
        const details = await Right.find({ staff_id }).populate('staff_id').exec();
        if (!details) {
            return res.status(404).json({ error: 'Details not found' });
        }
        return res.status(200).json(details);
    } catch (error) {
        console.error('Error finding details by staff_id:', error);
        return res.status(500).json({ error: 'Failed to find details' });
    }
};

export const create = async (req, res) => {
    const { staff_id, Right: rightValue } = req.body;

    try {
        const existingStaff = await Staff.findById(staff_id);

        if (!existingStaff) {
            return res.status(404).json({ error: 'Staff member not found' });
        }
        const newRight = await Right.create({
            staff_id,
            Right: rightValue
        });

        await newRight.populate('staff_id').execPopulate();
        return res.status(201).json(newRight);
    } catch (error) {
        console.error('Error creating Right document:', error);
        return res.status(500).json({ error: 'Failed to create Right document' });
    }
};

import Staff from '../models/staff_model.js';

export const create = async (req, res) => {
   
    const { name, email } = req.body;

    try {

        const newStaff = await Staff.create({
            name,
            email
        });

        return res.status(201).json(newStaff);
    } catch (error) {
        console.error('Error creating staff member:', error);
        return res.status(500).json({ error: 'Failed to create staff member' });
    }
};

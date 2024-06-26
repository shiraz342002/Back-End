import express from 'express';
const router = express.Router();

import { create as createStaff } from '../Controllers/staff_controller.js';
import { create as createRight, findDetailsByStaffId } from '../Controllers/right_controller.js';

router.post('/staff/create', createStaff);

router.post('/right/create', createRight);

router.post('/right/populate/:staff_id', findDetailsByStaffId); 

export default router;

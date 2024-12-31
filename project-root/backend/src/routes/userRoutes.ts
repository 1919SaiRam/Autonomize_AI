import express from 'express';
import { getUser, addUser, updateUser } from '../controllers/userController';

const router = express.Router();

router.get('/:username', getUser);
router.post('/', addUser);
router.put('/:username', updateUser);

export default router;

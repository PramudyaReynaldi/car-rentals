import express from 'express';
import { getUsers, registerUser, loginUser, logoutUser } from '../controller/Users.js';
import { verifyToken } from '../middleware/VerifyToken.js';
import { refreshToken } from '../controller/RefreshToken.js';

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.get('/token', refreshToken);

router.post('/users', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

export default router;
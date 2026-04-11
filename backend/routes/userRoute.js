import express from 'express';
import { registerUser, loginUser, forgotPassword, resetPassword, getUserProfile, updateUserProfile } from '../controllers/userController.js';
import authUser from '../middleware/authMiddleware.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/forgot-password', forgotPassword);
userRouter.post('/reset-password', resetPassword);
userRouter.get('/profile', authUser, getUserProfile);
userRouter.put('/profile', authUser, updateUserProfile);

export default userRouter;

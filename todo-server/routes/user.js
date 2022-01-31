import express from 'express';
import {login, signUp } from '../controllers/user.js';

// initialize express router
const router = express.Router();

router.post('/login', login);
router.post('/signup', signUp);




export default router;

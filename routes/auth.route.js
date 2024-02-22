import express from 'express';
import {google,signin, signup} from '../controllers/auth.controller.js'
const router = express.Router();

router.post("/signup",signup);//invoco al controlador
router.post("/signin",signin);//el mismo pero del signin
router.post("/google",google);

export default router;
import  express from "express";
import {
    registerController, 
    loginController, 
    testController,
    forgotPasswordController
} from '../controllers/authController.js';
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// router object creaate
const router = express.Router()

// routing 
// REGISTER Method || POST
router.post('/register',registerController)

// Login post
router.post('/login', loginController)

// forgot password post
router.post('/forgot-password',forgotPasswordController)

// test routes
router.get('/test',requireSignIn,isAdmin, testController)

// protected User route auth
router.get('/user-auth', requireSignIn, (req,res) => {
    res.status(200).send({ ok:true});
});
// protected Admin route auth
router.get('/admin-auth', requireSignIn, isAdmin, (req,res) => {
    res.status(200).send({ ok:true});
});

export default router;
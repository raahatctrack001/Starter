import express from 'express';
import { 
    deleteUser, 
    googleLogin, 
    loginUser, 
    logoutUser, 
    registerUser, 
    resetPassword, 
    updatePassword 
} from '../Controllers/auth.controllers.js';
const router = express.Router();

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(logoutUser)
router.route("/reset-password").patch(resetPassword)
router.route("/update-password").patch(updatePassword)
router.route("/google").post(googleLogin)
router.route("/delete").delete(deleteUser)



export default router;


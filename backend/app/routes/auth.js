import express from 'express';
import register from '../controllers/auth/register.js';
import validateRegister from '../controllers/auth/validators/validateRegister.js';
import validateLogin from '../controllers/auth/validators/validateLogin.js';
import login from '../controllers/auth/login.js';
import logout from '../controllers/auth/logout.js';
import { isLoggedIn } from '../middleware/authorization/isLoggedIn.js';
import checkUserPresent from '../middleware/authorization/checkUserPresent.js';
import loadUser from '../controllers/auth/loadUser.js';

const AuthRouter = express.Router();

AuthRouter.post("/register",
    validateRegister,
    register,
);

AuthRouter.post("/login",
    validateLogin,
    login,
);

AuthRouter.get("/logout",
    logout,
);

AuthRouter.get("/profile",
    isLoggedIn,
    checkUserPresent,
    loadUser
);

export default AuthRouter;
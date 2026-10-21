import express from "express";

import {addUser,getUser,getSingleUser,deleteUser,updateUser,loginuser} from "../controller/userDataController.js";

import upload from "../utils/uploadMiddleware.js";
import authenticateToken from "../utils/authMiddleware.js";

const router = express.Router();

router.post(
    "/api/add-user",
    upload.single("image"),
    addUser
);

router.get(
    "/api/get-user",
    authenticateToken,
    getUser
);

router.get(
    "/api/get-singleuser/:id",
    authenticateToken,
    getSingleUser
);

router.delete(
    "/api/get-deleteuser/:id",
    authenticateToken,
    deleteUser
);

router.put(
    "/api/update-user/:id",
    authenticateToken,
    upload.single("image"),
    updateUser
);

router.post(
    "/api/login",
    loginuser
);

export default router;

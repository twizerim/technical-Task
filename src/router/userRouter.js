
import express  from "express";
import { createUser, getUserById } from "../controller/userController";
import { getUser } from "../controller/userController";


const router=express.Router()
router.post("/",createUser)
router.get("/",getUser)
router.get("/:id",getUserById)

export default router
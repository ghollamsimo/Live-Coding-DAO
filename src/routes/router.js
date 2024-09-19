import express from "express";
import StudentController from "../controllers/StudentController.js";
const router = express.Router()
const controller = new StudentController();
router.get('/', (req, res) => {
  controller.getAllUsers(req, res)
})

export default router;
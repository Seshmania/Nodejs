import express from "express"
import { CreateEnrollment, DeleteEnrollment, FindAllEnrollments, FindEnrollmentById, UpdateEnrollment } from "../Handlers/enrollment_handlers.js"
import router from "./routes.js"

router.get(
    "/",
    FindAllEnrollments  
)
router.get(
    "/:id", 
    FindEnrollmentById
)
router.post(    
    "/",
    CreateEnrollment
)
router.put(
    "/:id",
    UpdateEnrollment
)
router.delete(
    "/:id",
    DeleteEnrollment
)
export default router   
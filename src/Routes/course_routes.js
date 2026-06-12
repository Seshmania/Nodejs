import express from "express"
import { CreateCourse, DeleteCourse, FindAllCourses, FindCourseById, UpdateCourse } from "../Handlers/course_handlers.js"
import router from "./routes.js"

router.get(
    "/",
    FindAllCourses  
)
router.get(
    "/:id", 
    FindCourseById
)
router.post(    
    "/",
    CreateCourse
)
router.put(
    "/:id",
    UpdateCourse
)
router.delete(
    "/:id",
    DeleteCourse
)
export default router   
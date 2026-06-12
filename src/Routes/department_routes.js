import express from "express"
import { CreateDepartment, DeleteDepartment, FindAllDepartments, FindDepartmentById, UpdateDepartment } from "../Handlers/department_handlers.js"
import router from "./routes.js"

router.get(
    "/",
    FindAllDepartments  
)
router.get(
    "/:id", 
    FindDepartmentById
)
router.post(    
    "/",
    CreateDepartment
)
router.put(
    "/:id",
    UpdateDepartment
)
router.delete(
    "/:id",
    DeleteDepartment
)
export default router   
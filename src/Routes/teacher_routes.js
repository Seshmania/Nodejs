import router from "./routes";
import { CreateTeacher, DeleteTeacher, FindAllTeachers, FindTeacherById, UpdateTeacher } from "../Handlers/teacher_handlers.js";
router.get(
    "/",(req,res)=>{
        res.json({
            message: "teacher routes called successfully"
        })  
    }
)

router.get(
    "/:id",(req,res)=>{
        res.json({  
            message: "teacher routes with id called successfully"
        })  
    }   
)

router.post(
    "/",(req,res)=>{
        res.json({
            message: "teacher post route called successfully"
        })  
    }
)   
router.put(
    "/:id",(req,res)=>{
        res.json({
            message: "teacher put route with id called successfully"
        })
    }       

)
router.delete(
    "/:id",(req,res)=>{
        res.json({
            message: "teacher delete route with id called successfully"
        })
    }       
)   
export default router
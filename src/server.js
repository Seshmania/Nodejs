import express from "express"
import dotenv from "dotenv"
import studentRouter from "./routes/student_routes.js"
import departmentRouter from "./routes/department_routes.js"
dotenv.config()
let app = express()
app.use(express.json())

app.use("/student", studentRouter)
app.use("/department", departmentRouter)
app.use("/teacher", teacherRouter)
app.use("/enrollment", enrollmentRouter)
app.use("/course", courseRouter)

let PORT = process.env.PORT || 8888

app.get("/",(req,res)=>{
    res.json({
        message: "Server initial routes called"
    })
})
app.listen(PORT, ()=>{
    console.log("server started at "+ PORT)
})
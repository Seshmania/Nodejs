
import prisma from "../db/prisma.js"
let FindAllCourses = async (req, res) => {
    let allCourses = await prisma.courses.findMany()
    res.json({
        message: "all courses found",
        data: allCourses           
    })

}
let    FindCourseById = async (req, res) => {
    let matchCourse = await prisma.courses.findUnique({
        where: {
            id: Number(req.params.id),
        }
    })
    res.status(200).json({
        message: "course found",
        data: matchCourse
    })
}
let CreateCourse = async (req, res) => {
    let data = req.body
    let createdCourse = await prisma.courses.create({
        data: {
            name,
            id,
            teacher: {
                connect: {
                    id: Number(teacher_id)  
        }
            }
        }
    })

    res.status(201).json({
        message: "course created successfully",
        data: createdCourse
    })
}
let UpdateCourse = async (req, res) => {
    let id = req.params.id
    let { name, email, roll_no } = req.body
    let updatedCourse = await prisma.courses.update(
        {
            where: {
                id: Number(id),
            },
            data: {
                name,
                email,
                rollNo: roll_no,
            }
        }
    )
    res.status(200).json({
        message: "course updated",
        data: updatedCourse
    })
}
let DeleteCourse = async (req, res) => {
    let id = req.params.id
    let deletedCourse = await prisma.courses.delete({
        where:{id}
    })
    res.status(200).json({
        message: "course deleted",
        data: deletedCourse
    })
}
export { FindAllCourses, FindCourseById, CreateCourse, UpdateCourse, DeleteCourse }



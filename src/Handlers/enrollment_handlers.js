import prisma from "../db/prisma.js"
let FindAllEnrollments = async (req, res) => {
    let allEnrollments = await prisma.enrollments.findMany()
    res.json({
        message: "all enrollments found",
        data: allEnrollments    
    })
}
let FindEnrollmentById = async (req, res) => {
    let matchEnrollment = await prisma.enrollments.findUnique({
        where: {
            id: Number(req.params.id),
        }
    })
    res.status(200).json({
        message: "enrollment found",
        data: matchEnrollment
    })
}
let CreateEnrollment = async (req, res) => {
    let data = req.body
    let createdEnrollment = await prisma.enrollments.create({
        data: {
            enrollment_date,
            student: {
                connect: {
                    id: Number(student_id)
                }
            },
            course: {
                connect: {
                    id: Number(course_id)
                }
            }
        }
    })
    res.status(201).json({
        message: "enrollment created successfully",
        data: createdEnrollment
    })
}
let UpdateEnrollment = async (req, res) => {
    let id = req.params.id
    let { enrollment_date, student_id, course_id } = req.body
    let updatedEnrollment = await prisma.enrollments.update(
        {
            where: {
                id: Number(id),
            },
            data: {
                enrollment_date,
                student: {
                    connect: {
                        id: Number(student_id)
                    }
                },
                course: {
                    connect: {
                        id: Number(course_id)
                    }
                }
            }
        }
    )
    res.status(200).json({
        message: "enrollment updated",
        data: updatedEnrollment
    })
}
let DeleteEnrollment = async (req, res) => {
    let id = req.params.id
    let deletedEnrollment = await prisma.enrollments.delete({
        where:{id}
    })
    res.status(200).json({
        message: "enrollment deleted",
        data: deletedEnrollment
    })
}
export { FindAllEnrollments, FindEnrollmentById, CreateEnrollment, UpdateEnrollment, DeleteEnrollment }



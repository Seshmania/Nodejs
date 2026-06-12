import prisma from "../db/prisma.js"
let FindAllDepartments = async (req, res) => {
    let allDepartments = await prisma.departments.findMany(
        {
            include: {
                students: true,
                teachers: true,
            }
        }
    )
    res.json({
        message: "all departments found",
        data: allDepartments    
    })
}
let FindDepartmentById = async (req, res) => {
    let matchDepartment = await prisma.departments.findUnique({
        where: {
            id: Number(req.params.id),
        },
        include: {
            students: true,
            teachers: true,
        }
    })
    res.status(200).json({
        message: "department found",
        data: matchDepartment
    })
}
let CreateDepartment = async (req, res) => {
    let data = req.body
    let createdDepartment = await prisma.departments.create({
        data: data
    })
    res.status(201).json({
        message: "department created successfully",
        data: createdDepartment
    })
}
let UpdateDepartment = async (req, res) => {
    let id = req.params.id
    let { name, email, roll_no } = req.body
    let updatedDepartment = await prisma.departments.update(
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
        message: "department updated",
        data: updatedDepartment
    })
}
let DeleteDepartment = async (req, res) => {
    let id = req.params.id
    let deletedDepartment = await prisma.departments.delete({
        where:{id}
    })
    res.status(200).json({
        message: "department deleted",
        data: deletedDepartment
    })
}
export { FindAllDepartments, FindDepartmentById, CreateDepartment, UpdateDepartment, DeleteDepartment }



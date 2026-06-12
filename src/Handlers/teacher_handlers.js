import prisma from "../db/prisma.js";
let FindAllTeachers = async (req, res) => {
  let allTeachers = await prisma.teachers.findMany(
    include: {
      department: {
        select: {
          name: true,
        },

      }, courses: true},
    
  );
  res.json({
    message: "all teachers found",
    data: allTeachers,
  });
};

let FindTeacherById = async (req, res) => {
  let matchTeacher = await prisma.teachers.findUnique({
    where: {
      id: Number(req.params.id),
    },
    include: {
      department: {
        select: {
          name: true,
        },
      }, courses: true},
  });
  res.status(200).json({
    message: "teacher found",
    data: matchTeacher,
  });
};
let CreateTeacherwithDepartment = async (req, res) => {
  const { name, email, roll_no, departmentId } = req.body;
  let createdTeacher = await prisma.teachers.create({
    data: {
      name,
      email,
      department: {
        create: {
          name: `Department of ${name}`,
        },
      },
    },
  }); 
  res.status(201).json({
    message: "teacher created successfully with department",
    data: createdTeacher,
  });
}         
let CreateTeacher = async (req, res) => {
  let data = req.body;
  let createdTeacher = await prisma.teachers.create({
    data: data,
  });
  res.status(201).json({
    message: "teacher created successfully",
    data: createdTeacher,
  });
};
  
let UpdateTeacher = async (req, res) => {
  let id = req.params.id;
  let { name, email, roll_no } = req.body;
  let updatedTeacher = await prisma.teachers.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      email,
      rollNo: roll_no,
    },
  });
  res.status(200).json({
    message: "teacher updated",
    data: updatedTeacher,
  });
};
let DeleteTeacher = async (req, res) => {
  let id = req.params.id;
  let deletedTeacher = await prisma.teachers.delete({
    where: { id },
  });
  res.status(200).json({
    message: "teacher deleted",
    data: deletedTeacher,
  });
};
export {
  FindAllTeachers,
  FindTeacherById,
  CreateTeacher,
  UpdateTeacher,
  DeleteTeacher,
};

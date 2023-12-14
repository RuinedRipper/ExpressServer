const Student = require("../models/studentModel");

module.exports.listOfStudents = async (req, res, next) => {
  try {
    let students;
    if (req.query.letter) {
      console.log("Get students by first letter");
      students = await Student.find({
        name: { $regex: "^" + req.query.letter, $options: "i" },
      });
    } else {
      console.log("Get all students");
      students = await Student.find({});
    }
    res.status(200).send(students);
  } catch (error) {
    console.log("123 :>> ", 123);
    next(error);
  }
};

module.exports.createStudent = async (req, res, next) => {
  try {
    console.log("req.body :>> ", req.body);
    const students = new Student(req.body);
    const student = await students.save();
    res.status(200).send(student);
  } catch (error) {
    next(error);
  }
};

module.exports.deleteStudent = async (req, res, next) => {
  try {
    const student = await Student.deleteOne({ _id: req.params.id });
    res.status(200).send(student);
  } catch (error) {
    next(error);
  }
};

module.exports.updateStudent = async (req, res, next) => {
  try {
    console.log("req.params :>> ", req.query);
    console.log("req.body :>> ", req.body);
    const student = await Student.findOneAndUpdate(req.query, req.body, {
      new: true,
    });
    if (!student) {
      return res.status(404).send("Student not found");
    }
    res.status(200).send(student);
  } catch (error) {
    next(error);
  }
};

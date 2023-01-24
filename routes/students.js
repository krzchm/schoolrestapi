const express = require("express");

const Student = require("../models/student");

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const students = await Student.find();
            res.json(students);
        }catch(err){
            res.json({message: err });
        };
});

router.post('/', async (req, res) => {
    const stud = new Student({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        classNumber: req.body.classNumber,
        age: req.body.age,
        gender: req.body.gender,
        courses: req.body.courses,
    });
    try{
    const saveStud = await stud.save();
        res.json(saveStud);
    }catch(err){
        res.json({message: err });
    };
});

router.delete("/:studentId", async (req, res) =>{
    try{
    const delStud = await Student.remove({_id: req.params.studentId});
    res.json(delStud);
    }catch(err){
        res.json({message: err });
    };
});

module.exports = router;
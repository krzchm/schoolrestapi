const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    classNumber: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    courses: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model("Students", studentSchema);
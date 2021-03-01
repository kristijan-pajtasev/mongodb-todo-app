const mongoose = require("mongoose")

const todo = new mongoose.Schema({
    text: String,
    isCompleted: Boolean,
})

const ToDo = mongoose.model("todo", student);
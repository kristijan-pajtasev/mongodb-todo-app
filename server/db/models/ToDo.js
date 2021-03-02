const mongoose = require("mongoose")

const todo = new mongoose.Schema({
    text: String,
    isCompleted: Boolean,
    created: Number
})

mongoose.models = {};
const ToDo = mongoose.model("Todo", todo);

export default ToDo
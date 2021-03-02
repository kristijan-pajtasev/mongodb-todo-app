const mongoose = require("mongoose")

const todo = new mongoose.Schema({
    text: String,
    isCompleted: Boolean,
})

mongoose.models = {};
const ToDo = mongoose.model("Todo", todo);

export default ToDo
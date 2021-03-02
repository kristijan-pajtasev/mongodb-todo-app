const mongoose = require("mongoose")

const ToDo = (function() {
    const todo = new mongoose.Schema({
        text: String,
        isCompleted: Boolean,
    })

    const ToDo = mongoose.model("todo", todo);
    return ToDo;
})();


export default ToDo
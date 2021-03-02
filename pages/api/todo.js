import connectDB from "../../middleware/mongodb";
import ToDo from "../../server/db/models/ToDo";

async function handler (req, res) {
    if (req.method === 'GET') {
        const todos = await ToDo.find({});
        res.status(200).json({todos});
    } else {
        console.log(req.body)
        const todoData = req.body;
        const todo = new ToDo({
            ...todoData,
            isCompleted: false,
            created: new Date().getTime()
        })
        const createdTodo = await todo.save();
        console.log(createdTodo)
        res.status(200).json({});
    }
}

export default connectDB(handler);
import {getTodos} from '../../server/controller/ToDoController'
import dbConnect from "../../utils/dbConnect";

export default async function handler (req, res) {
    if (req.method === 'GET') {
        await dbConnect()
        getTodos().then(todos => {
                res.status(200).json(todos);
            },
            err => res.status(400).json(err))
    } else {
        res.status(200).json({});
    }
}

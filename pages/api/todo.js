import {getTodos} from '../../server/controller/ToDoController'

export default function handler (req, res) {
    getTodos().then(todos => {
        res.status(200).json(todos);
    },
    err => res.status(400).json(err))
}
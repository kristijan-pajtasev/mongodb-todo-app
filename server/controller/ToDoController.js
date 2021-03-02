import connect from "../db/connection";

// const todos = [
//     {
//         text: "hello world",
//         isCompleted: true,
//         id: 123
//     },
//     {
//         text: "hello world 2",
//         isCompleted: false,
//         id: 1234
//     }
// ]

// export const getTodos = () => {
//     return new Promise((res, rej) => {
//         connect().then(
//             async connection => {
//                 const todos = await ToDo.find({});
//                 console.log(todos)
//                 res({todos})
//             }
//         )
//     })
// }
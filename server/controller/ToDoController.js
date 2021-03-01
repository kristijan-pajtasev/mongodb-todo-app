export const getTodos = () => {
    return new Promise((res, rej) => {
        res([
            {
                text: "hello world",
                isCompleted: true,
                id: 123
            },
            {
                text: "hello world 2",
                isCompleted: false,
                id: 1234
            }
        ])
    })
}
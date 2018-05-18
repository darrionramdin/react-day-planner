const initialState = [
    {
        id: "1",
        due: "8 AM",
        todo: "Finish Home Screen",
        memo: "Web App"
    },
    {
        id: "2",
        due: "11 AM",
        todo: "Lunch Break",
        memo: ""
    }
];

const todosReducer = (state = initialState, action) => {
    return state
}

export default todosReducer;
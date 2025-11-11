import { useReducer } from "react"

export default function TaskList() {
    const [list, dispatch] = useReducer(listReducer, []);
    return (
        <div>
            {list.map((l) => <div>{l.text}</div>)}
        </div>
    )
    function listReducer(state, action) {
        switch (action.type){
            case "add": 
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    done: false,
                }
            ];
            case "update":
                return state.map((item) => {
                    if (item.id === action.id) {
                        return action.task;
                    }
                    return item;
                });
        }
    }
}
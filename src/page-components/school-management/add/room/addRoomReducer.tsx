import { useReducer } from "react";

export type AddRoomReducerActionType =
    | { type: "SET_CLASS"; payload: string }
    | { type: "SET_ID"; payload: string }
    | { type: "SET_FLOOR"; payload: string }
    | { type: "SET_DESCRIPTION"; payload: string }
;

export interface IAddRoomReducerState {
    class: string;
    id: string;
    floor: string;
    description: string;
};

const initState:IAddRoomReducerState = {
    class: "",
    id: "",
    floor: "",
    description: ""
};

const addRoomReducer = (state: IAddRoomReducerState, action: AddRoomReducerActionType) => {
    switch (action.type) {
        case "SET_CLASS":
        {
            return { ...state, class: action.payload };
        }
        case "SET_ID":
        {
            return { ...state, id: action.payload };
        }
        case "SET_FLOOR":
        {
            return { ...state, floor: action.payload };
        }
        case "SET_DESCRIPTION":
        {
            return { ...state, description: action.payload };
        }
        default:
            return state;
    }
}

const useAddRoomReducer = () => {
    return useReducer(addRoomReducer, initState);
}

export default useAddRoomReducer;
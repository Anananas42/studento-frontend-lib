import { useReducer } from "react";

export type AddStudentReducerActionType =
    | { type: "SET_FIRST_NAME" }
    | { type: "SET_LAST_NAME" }
;

export interface IAddStudentReducerState {
    firstName: string;
    lastName: string;
};

const initState:IAddStudentReducerState = {
    firstName: "",
    lastName: "",
};

const addStudentReducer = (state: IAddStudentReducerState, action: AddStudentReducerActionType) => {
    switch (action.type) {
        default:
            return state;
    }
}

const useAddStudentReducer = () => {
    return useReducer(addStudentReducer, initState);
}

export default useAddStudentReducer;
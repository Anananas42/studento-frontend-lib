import { useReducer } from "react";

export type AddTeacherReducerActionType =
    | { type: "SET_ADDRESS"; payload: string }
    | { type: "SET_BIRTHDATE", payload: string }
    | { type: "SET_CITY", payload: string }
    | { type: "SET_CLASS", payload: string }
    | { type: "SET_DEGREE", payload: string }
    | { type: "SET_EMAIL", payload: string }
    | { type: "SET_FIRST_NAME", payload: string }
    | { type: "SET_INSURANCE_COMPANY", payload: string }
    | { type: "SET_LAST_NAME", payload: string }
    | { type: "SET_MIDDLE_NAME", payload: string }
    | { type: "SET_PERSONAL_ID", payload: string }
    | { type: "SET_PHONE_NUMBER", payload: string }
    | { type: "SET_PLACE_OF_BIRTH", payload: string }
    | { type: "SET_UNIVERSITY", payload: string }
    | { type: "SET_SPECIALIZATION", payload: string }
    | { type: "SET_ZIP_CODE", payload: string }
;

export interface IAddTeacherReducerState {
    address: string;
    birthdate: string;
    city: string;
    class: string;
    degree: string;
    email: string;
    firstName: string;
    insuranceCompany: string;
    lastName: string;
    middleName: string;
    personalID: string;
    phoneNumber: string;
    placeOfBirth: string;
    university: string;
    specialization: string;
    zipCode: string;
};

const initState:IAddTeacherReducerState = {
    address: "",
    birthdate: "",
    city: "",
    class: "",
    degree: "",
    email: "",
    firstName: "",
    insuranceCompany: "",
    lastName: "",
    middleName: "",
    personalID: "",
    phoneNumber: "",
    placeOfBirth: "",
    university: "",
    specialization: "",
    zipCode: "",
};

const addTeacherReducer = (state: IAddTeacherReducerState, action: AddTeacherReducerActionType) => {
    switch (action.type) {
        case "SET_ADDRESS":
        {
            return { ...state, address: action.payload };
        }
        case "SET_BIRTHDATE":
        {
            return { ...state, birthdate: action.payload };
        }
        case "SET_CITY":
        {
            return { ...state, city: action.payload };
        }
        case "SET_CLASS":
        {
            return { ...state, class: action.payload };  
        }
        case "SET_DEGREE":
        {
            return { ...state, degree: action.payload };
        }
        case "SET_EMAIL":
        {
            return { ...state, email: action.payload };
        }
        case "SET_FIRST_NAME":
        {
            return { ...state, firstName: action.payload };
        }
        case "SET_INSURANCE_COMPANY":
        {
            return { ...state, insuranceCompany: action.payload };
        }
        case "SET_LAST_NAME":
        {
            return { ...state, lastName: action.payload };
        }
        case "SET_MIDDLE_NAME":
        {
            return { ...state, middleName: action.payload };
        }
        case "SET_PERSONAL_ID":
        {
            return { ...state, personalID: action.payload };
        }
        case "SET_PHONE_NUMBER":
        {
            return { ...state, phoneNumber: action.payload };
        }
        case "SET_PLACE_OF_BIRTH":
        {
            return { ...state, placeOfBirth: action.payload };
        }
        case "SET_UNIVERSITY":
        {
            return { ...state, university: action.payload };
        }
        case "SET_SPECIALIZATION":
        {
            return { ...state, specialization: action.payload };
        }
        case "SET_ZIP_CODE":
        {
            return { ...state, zipCode: action.payload };
        }
        default:
            return state;
    }
}

const useAddTeacherReducer = () => {
    return useReducer(addTeacherReducer, initState);
}

export default useAddTeacherReducer;
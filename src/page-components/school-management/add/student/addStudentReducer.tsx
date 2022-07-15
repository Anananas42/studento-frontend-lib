import { useReducer } from "react";

export type AddStudentReducerActionType =
    | { type: "SET_ADDRESS"; payload: string }
    | { type: "SET_BIRTHDATE", payload: string }
    | { type: "SET_CITY", payload: string }
    | { type: "SET_CLASS", payload: string }
    | { type: "SET_EMAIL", payload: string }
    | { type: "SET_FIRST_NAME", payload: string }
    | { type: "SET_INSURANCE_COMPANY", payload: string }
    | { type: "SET_LAST_NAME", payload: string }
    | { type: "SET_MIDDLE_NAME", payload: string }
    | { type: "SET_PARENT_EMAIL", payload: string }
    | { type: "SET_PARENT_FIRST_NAME", payload: string }
    | { type: "SET_PARENT_LAST_NAME", payload: string }
    | { type: "SET_PARENT_PERSONAL_ID", payload: string }
    | { type: "SET_PARENT_PHONE_NUMBER", payload: string }
    | { type: "SET_PERSONAL_ID", payload: string }
    | { type: "SET_PHONE_NUMBER", payload: string }
    | { type: "SET_PLACE_OF_BIRTH", payload: string }
    | { type: "SET_ZIP_CODE", payload: string }
;

export interface IAddStudentReducerState {
    address: string;
    birthdate: string;
    city: string;
    class: string;
    email: string;
    firstName: string;
    insuranceCompany: string;
    lastName: string;
    middleName: string;
    parentEmail: string;
    parentFirstName: string;
    parentLastName: string;
    parentPersonalID: string;
    parentPhoneNumber: string;
    personalID: string;
    phoneNumber: string;
    placeOfBirth: string;
    zipCode: string;
};

const initState:IAddStudentReducerState = {
    address: "",
    birthdate: "",
    city: "",
    class: "",
    email: "",
    firstName: "",
    insuranceCompany: "",
    lastName: "",
    middleName: "",
    parentEmail: "",
    parentFirstName: "",
    parentLastName: "",
    parentPersonalID: "",
    parentPhoneNumber: "",
    personalID: "",
    phoneNumber: "",
    placeOfBirth: "",
    zipCode: "",
};

const addStudentReducer = (state: IAddStudentReducerState, action: AddStudentReducerActionType) => {
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
        case "SET_PARENT_EMAIL":
        {
            return { ...state, parentEmail: action.payload };
        }
        case "SET_PARENT_FIRST_NAME":
        {
            return { ...state, parentFirstName: action.payload };
        }
        case "SET_PARENT_LAST_NAME":
        {
            return { ...state, parentLastName: action.payload };
        }
        case "SET_PARENT_PERSONAL_ID":
        {
            return { ...state, parentPersonalID: action.payload };
        }
        case "SET_PARENT_PHONE_NUMBER":
        {
            return { ...state, parentPhoneNumber: action.payload };
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
        case "SET_ZIP_CODE":
        {
            return { ...state, zipCode: action.payload };
        }
        default:
            return state;
    }
}

const useAddStudentReducer = () => {
    return useReducer(addStudentReducer, initState);
}

export default useAddStudentReducer;
import { useReducer } from "react";

interface IOptions {
    [key: string]: string;
};

interface IItem {
    id: number,
    name: string,
    [key: string]: any,
}

interface IGroupPattern {
    title: string;
    groups: Array<Array<IItem>>;
}

interface IGroupPatterns {
    [key: string]: IGroupPattern;
}

interface IGroupPatternOptions {
    [key: string]: {
        title: string;
        options: IOptions; 
    }
}

export interface ISubjectReducerState {
    subjectTitle: string;
    hasMultiple: boolean;
    hasGroups: boolean;
    teacher: string;
    teacherOptions: IOptions;
    groupPattern: IGroupPattern | null;
    groupPatterns: IGroupPatterns;
    groupPatternOptions: IGroupPatternOptions;
    groupAmount: number;
    group: number;
    chosenItems: Array<IItem>;
    itemOptions: Array<IItem>;
    itemSearch: string;
    disciplines: Array<string>;
    discipline: string;
}

const initState:ISubjectReducerState = {
    subjectTitle: "",
    hasMultiple: false,
    hasGroups: false,
    teacher: "",
    teacherOptions: {},
    groupPattern: null,
    groupPatterns: {},
    groupPatternOptions: {},
    groupAmount: 0,
    group: 0,
    chosenItems: [],
    itemOptions: [],
    itemSearch: "",
    disciplines: [],
    discipline: "",
};

export type SubjectReducerActionType =
    | { type: "SET_TITLE", payload: string }
    | { type: "SET_HAS_MULTIPLE", payload: boolean }
    | { type: "SET_HAS_GROUPS", payload: boolean }
    | { type: "SET_TEACHER", payload: string }
    | { type: "SET_OPTIONS_TEACHER", payload: IOptions }
    | { type: "SET_GROUP_PATTERN", payload: IGroupPattern }
    | { type: "SET_OPTIONS_GROUP_PATTERN", payload: IOptions }
    | { type: "SET_GROUP_AMOUNT", payload: number }
    | { type: "SET_GROUP", payload: number }
    | { type: "SET_CHOSEN_ITEMS", payload: Array<IItem> }
    | { type: "SET_OPTIONS_ITEMS", payload: Array<IItem> }
    | { type: "SET_ITEM_SEARCH", payload: string }
    | { type: "SET_DISCIPLINES", payload: Array<string> }
    | { type: "SET_DISCIPLINE", payload: string }
    | { type: "REMOVE_DISCIPLINE", payload: string }
    | { type: "ADD_DISCIPLINE" }
;


const subjectStepReducer = (state: ISubjectReducerState, action: SubjectReducerActionType) => {
    switch (action.type) {
        case "ADD_DISCIPLINE":
            return {...state};
        case "REMOVE_DISCIPLINE":
            return {...state};
        case "SET_CHOSEN_ITEMS":
            return {...state};
        case "SET_DISCIPLINE":
            return {...state};
        case "SET_DISCIPLINES":
            return {...state};
        case "SET_GROUP":
            return {...state};
        case "SET_GROUP_AMOUNT":
            return {...state};
        case "SET_GROUP_PATTERN":
            return {...state};
        case "SET_HAS_GROUPS":
            return {...state, hasGroups: action.payload};
        case "SET_HAS_MULTIPLE":
            return {...state, hasMultiple: action.payload};
        case "SET_ITEM_SEARCH":
            return {...state};
        case "SET_OPTIONS_GROUP_PATTERN":
            return {...state};
        case "SET_OPTIONS_ITEMS":
            return {...state};
        case "SET_OPTIONS_TEACHER":
            return {...state};
        case "SET_TEACHER":
            return {...state};
        case "SET_TITLE":
            return {...state};
        default: 
            return {...state};
    }
}

const useSubjectStepReducer = () => {
    return useReducer(subjectStepReducer, initState);
}

export default useSubjectStepReducer;
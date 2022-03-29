import { useReducer } from "react";

interface IOptions {
    [key: string]: string; // Format used in forms to enable translation
};

interface IItem {
    id: number,
    name: string,
    [key: string]: any,
};

interface IGroupPattern {
    title: string; // "Cz - Grammar"
    groups: Array<Array<IItem>>; // [[{id: 42, name: "Holden"}], [{id: 69, name: "Alex"}, {id: 73, name: "Bobbie"}]]
};

interface IGroupPatterns { // To retrieve chosen students from a group pattern name
    [key: string]: IGroupPattern; // "Czech Language": group pattern
};

interface IGroupPatternOptions {
    [key: string]: { // "Czech Language"
        title: string; // Czech Language
        options: IOptions; // { "Cz - Grammar": "Cz - Grammar", "Cz - Literature": "Cz - Literature"}
    }
};

interface ISubject {
    title: string; // Mathematics
    code: string; // M
    hasMultiple: boolean; // Subject is divided into multiple disciplines
    hasGroups: boolean; // Subject or disciplines are divided into multiple exclusive groups
    teacher: string; // teacherId
    teachers: IOptions; // Teachers with relevant approbations
    disciplines: Array<string>;
    groupPattern: IGroupPattern | null; // Copy group arrangement from an existing pattern
    groupAmount: number;
    chosenStudents: Array<Array<IItem>>; // Students in each group - (index + 1) indicates group number
};

export interface ISubjectReducerState {
    subjects: Array<ISubject>;
    subject: ISubject | null;
    discipline: string;
    groupPatterns: IGroupPatterns;
    groupPatternOptions: IGroupPatternOptions;
    group: number;
    studentOptions: Array<IItem>;
    studentSearch: string;
    disciplineInput: string;
    isFetching: boolean;
};

const initState:ISubjectReducerState = {
    subjects: [],
    subject: null,
    discipline: "",
    groupPatterns: {},
    groupPatternOptions: {},
    group: 0,
    studentOptions: [],
    studentSearch: "",
    disciplineInput: "",
    isFetching: true,
};

export type SubjectReducerActionType =
    | { type: "SET_HAS_MULTIPLE", payload: boolean }
    | { type: "SET_HAS_GROUPS", payload: boolean }
    | { type: "SET_DISCIPLINE_INPUT", payload: string }
    | { type: "SET_GROUP_PATTERN", payload: IGroupPattern }
    | { type: "SET_GROUP_AMOUNT", payload: number }
    | { type: "SET_GROUP", payload: number }
    | { type: "SET_TEACHER", payload: string }
    | { type: "SET_STUDENT_SEARCH", payload: string }
    | { type: "SET_CHOSEN_STUDENTS", payload: Array<IItem> }
    | { type: "REMOVE_DISCIPLINE", payload: string }
    | { type: "ADD_DISCIPLINE" }
;


const subjectStepReducer = (state: ISubjectReducerState, action: SubjectReducerActionType) => {
    switch (action.type) {
        case "ADD_DISCIPLINE":
            return {...state};
        case "REMOVE_DISCIPLINE":
            return {...state};
        case "SET_DISCIPLINE_INPUT":
            return {...state, disciplineInput: action.payload};
        case "SET_HAS_GROUPS":
            return {...state, hasGroups: action.payload};
        case "SET_HAS_MULTIPLE":
            return {...state, hasMultiple: action.payload};
        default: 
            return {...state};
    }
}

const useSubjectStepReducer = () => {
    return useReducer(subjectStepReducer, initState);
}

export default useSubjectStepReducer;
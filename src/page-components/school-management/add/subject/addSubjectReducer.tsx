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

interface IGroupPatternOptions {
    [key: string]: { // "Czech Language"
        title: string; // Czech Language
        options: IOptions; // { "Cz - Grammar": "Cz - Grammar", "Cz - Literature": "Cz - Literature"} - left empty if only subject and no disciplines
    }
};

export interface IAddSubjectReducerState {
    subjectTypeId: string;
    title: string; // Mathematics
    code: string; // M
    hasMultiple: boolean; // Subject is divided into multiple disciplines
    hasGroups: boolean; // Subject or disciplines are divided into multiple exclusive groups
    hasOwnGroupPattern: boolean; // Subject or disciplines have own group pattern
    teacher: string; // teacherId
    teachers: IOptions; // Teachers with relevant approbations
    discipline: string;
    disciplines: Array<string>;
    disciplinesHasGroups: {[key: string]: boolean};
    disciplinesHasOwnGroupPatterns: {[key: string]: boolean};
    disciplineGroupAmounts: {[key: string]: number};
    disciplineGroupPatterns: {[key: string]: IGroupPattern};
    disciplineInput: string;
    disciplineTeachers: {[key: string]: string};
    groupPattern: IGroupPattern; // Own group pattern
    groupPatternOptions: IGroupPatternOptions;
    groupAmount: number;
    group: number;
    referencedGroupPattern: string;
    referencedGroupPatterns: IOptions;
    studentOptions: Array<IItem>;
    studentSearch: string;
    subjectType: string;
};

const dummyStudentOptions = [
    {
        id: 42,
        name: "Christopher Nolan",
    },
    {
        id: 43,
        name: "Jonathan Nolan",
    },
    {
        id: 45,
        name: "Milos Forman",
    },
    {
        id: 85,
        name: "Ridley Scott",
    },
    {
        id: 48,
        name: "Bogdan Random",
    },
    {
        id: 25,
        name: "Your Name",
    },
    {
        id: 35,
        name: "What is",
    },
    {
        id: 12,
        name: "Wow Random",
    },
    {
        id: 13,
        name: "Incredible Name",
    },
    {
        id: 14,
        name: "Shrek Swamply",
    },
    {
        id: 19,
        name: "Wow Random",
    },
    {
        id: 2,
        name: "Incredible Very",
    },
    {
        id: 3,
        name: "Shrek Greene",
    },
    {
        id: 4,
        name: "Shrek Big",
    },
    {
        id: 100,
        name: "Name Name",
    },
    {
        id: 1001,
        name: "Swamply Swamply",
    },
    {
        id: 1002,
        name: "Wow Uga",
    },
    {
        id: 10002,
        name: "Incredible Incredible",
    },
    {
        id: 100003,
        name: "Shrek Shrek",
    },
    {
        id: 4300,
        name: "Jonathan Jonathan",
    },
    {
        id: 4500,
        name: "Milos Milos",
    },
    {
        id: 8500,
        name: "Ridley Ridley",
    },
    {
        id: 2243,
        name: "Nolan Nolan",
    },
    {
        id: 2245,
        name: "Forman Forman",
    },
    {
        id: 2285,
        name: "Scott Scott",
    },
    {
        id: 34444,
        name: "Shrek Scott",
    },
    {
        id: 4444,
        name: "Scott Big",
    },
    {
        id: 10440,
        name: "Name Forman",
    },
    {
        id: 10041,
        name: "Nolan Swamply",
    },
];

const dummyTeacherOptions = {
    randomGuy1: "Alfred Nobel",
    randomGuy2: "Diogenes",
    randomGuy3: "Mike Ehrmentraut",
}

const initState:IAddSubjectReducerState = {
    subjectTypeId: "",
    title: "",
    code: "",
    discipline: "",
    hasMultiple: false,
    hasGroups: false,
    hasOwnGroupPattern: false,
    teacher: "",
    teachers: {},
    disciplines: [],
    disciplinesHasGroups: {},
    disciplinesHasOwnGroupPatterns: {},
    disciplineGroupAmounts: {},
    disciplineGroupPatterns: {},
    disciplineInput: "",
    disciplineTeachers: {},
    groupPattern: {title: "", groups: []},
    groupPatternOptions: {},
    groupAmount: 0,
    group: 0,
    referencedGroupPattern: "",
    referencedGroupPatterns: {},
    studentOptions: dummyStudentOptions,
    studentSearch: "",
    subjectType: "",
};

export type AddSubjectReducerActionType =
    | { type: "ADD_DISCIPLINE" }
    | { type: "GOTO_NEXT_DISCIPLINE" }
    | { type: "GOTO_PREV_DISCIPLINE" }
    | { type: "SET_BACKUP_TEACHER", payload: string }
    | { type: "SET_CHOSEN_STUDENTS", payload: Array<IItem> }
    | { type: "SET_DISCIPLINE_INPUT", payload: string }
    | { type: "SET_DISCIPLINE", payload: string }
    | { type: "SET_GROUP", payload: number }
    | { type: "SET_GROUP_AMOUNT", payload: number }
    | { type: "SET_GROUP_PATTERN", payload: IGroupPattern }
    | { type: "SET_GROUP_STUDENTS", payload: Array<IItem> }
    | { type: "SET_HAS_GROUPS", payload: boolean }
    | { type: "SET_HAS_MULTIPLE", payload: boolean }
    | { type: "SET_HAS_OWN_GROUP_PATTERN", payload: boolean }
    | { type: "SET_NOTE", payload: string }
    | { type: "SET_REFERENCED_GROUP_PATTERN", payload: string }
    | { type: "SET_STUDENT_SEARCH", payload: string }
    | { type: "SET_SUBJECT_TYPE", payload: string }
    | { type: "SET_TEACHER", payload: string }
    | { type: "REMOVE_DISCIPLINE", payload: string }
;

const addSubjectReducer = (state: IAddSubjectReducerState, action: AddSubjectReducerActionType) => {
    switch (action.type) {
        case "ADD_DISCIPLINE": 
            {
                return state;
            }
        case "GOTO_NEXT_DISCIPLINE":
            {
                return state;
            }
        case "GOTO_PREV_DISCIPLINE":
            {
            return state;
            }
        case "SET_BACKUP_TEACHER":
            return state;
        case "SET_DISCIPLINE":
            {
                return { ...state, discipline: action.payload };
            }
        case "SET_DISCIPLINE_INPUT":
            return {...state, disciplineInput: action.payload};
        case "SET_GROUP":
            return {...state, group: action.payload};
        case "SET_GROUP_AMOUNT":
            {
                return state;
            }
        case "SET_GROUP_PATTERN":
            {
                return state;
            }
        case "SET_GROUP_STUDENTS":
            {
                return state;
            }
        case "SET_HAS_GROUPS":
            {
                return state;
            }
        case "SET_HAS_MULTIPLE":
            {
                return state;
            }
        case "SET_HAS_OWN_GROUP_PATTERN": 
            {
                return state;
            }
        case "SET_NOTE":
            return {...state, note: action.payload};
        case "SET_REFERENCED_GROUP_PATTERN":
            {
                return state;
            }
        case "SET_STUDENT_SEARCH":
            return {...state, studentSearch: action.payload};
        case "SET_TEACHER":
            {
                return state;
            }
        case "REMOVE_DISCIPLINE": {
            return state;
        }
        default: 
            return {...state};
    }
}

const useAddSubjectReducer = () => {
    return useReducer(addSubjectReducer, initState);
}

export default useAddSubjectReducer;
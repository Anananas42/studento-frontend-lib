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

export interface IAddClassReducerState {
    grade: string;
    code: string;
    room: string;
    roomOptions: IOptions;
    classTeacher: string;
    backupTeacher: string;
    classTeacherOptions: IOptions;
    backupTeacherOptions: IOptions;
    note: string;
    subjects: Array<ISubject>;
    chosenSubjectTypes: Array<IItem>;
    subjectTypeOptions: Array<IItem>;
    displayedSubject: number | null;
    discipline: string;
    groupPatterns: IGroupPatterns;
    groupPatternOptions: IGroupPatternOptions;
    group: number;
    classStudents: Array<IItem>;
    studentOptions: Array<IItem>;
    studentSearch: string;
    disciplineInput: string;
};

const initState:IAddClassReducerState = {
    grade: "",
    code: "",
    room: "",
    roomOptions: {},
    classTeacher: "",
    backupTeacher: "",
    classTeacherOptions: {},
    backupTeacherOptions: {},
    note: "",
    subjects: [],
    chosenSubjectTypes: [],
    subjectTypeOptions: [],
    displayedSubject: null,
    discipline: "",
    groupPatterns: {},
    groupPatternOptions: {},
    group: 0,
    classStudents: [],
    studentOptions: [],
    studentSearch: "",
    disciplineInput: "",
};

export type AddClassReducerActionType =
    | { type: "ADD_DISCIPLINE" }
    | { type: "SET_BACKUP_TEACHER", payload: string }
    | { type: "SET_CHOSEN_STUDENTS", payload: Array<IItem> }
    | { type: "SET_CHOSEN_SUBJECT_TYPES", payload: Array<IItem> }
    | { type: "SET_CLASS_TEACHER", payload: string }
    | { type: "SET_CODE", payload: string }
    | { type: "SET_DISCIPLINE_INPUT", payload: string }
    | { type: "SET_GRADE", payload: string }
    | { type: "SET_GROUP", payload: number }
    | { type: "SET_GROUP_AMOUNT", payload: number }
    | { type: "SET_GROUP_PATTERN", payload: IGroupPattern }
    | { type: "SET_HAS_GROUPS", payload: boolean }
    | { type: "SET_HAS_MULTIPLE", payload: boolean }
    | { type: "SET_NOTE", payload: string }
    | { type: "SET_ROOM", payload: string }
    | { type: "SET_STUDENT_SEARCH", payload: string }
    | { type: "SET_TEACHER", payload: string }
    | { type: "REMOVE_DISCIPLINE", payload: string }
;

const updateSubject = (subjects: Array<ISubject>, displayedSubject: number | null, key: string, value: any) => {
    if (!displayedSubject) return subjects;
    const subj = subjects[displayedSubject];
    const subjectsUpdated = [...subjects.slice(0, displayedSubject), {...subj, [key]: value}, ...subjects.slice(displayedSubject + 1)];
    return subjectsUpdated;
}

const addClassReducer = (state: IAddClassReducerState, action: AddClassReducerActionType) => {
    switch (action.type) {
        case "ADD_DISCIPLINE": 
            {
                if (!state.displayedSubject) return {...state };
                const subj = state.subjects[state.displayedSubject];
                if (!state.disciplineInput || subj.disciplines.includes(state.disciplineInput)) return {...state };
                const subjectsUpdated = [...state.subjects.slice(0, state.displayedSubject), {...subj, disciplines: [...subj.disciplines, state.disciplineInput]}];
                return {...state, subjects: subjectsUpdated};
            }
        case "SET_BACKUP_TEACHER":
            return {...state, backupTeacher: action.payload};
        case "SET_CHOSEN_STUDENTS":
            return {...state, chosenStudents: action.payload};
        case "SET_CHOSEN_SUBJECT_TYPES":
            return {...state, chosenSubjectTypes: action.payload};
        case "SET_CLASS_TEACHER":
            return {...state, classTeacher: action.payload};
        case "SET_CODE":
            return {...state, code: action.payload};
        case "SET_DISCIPLINE_INPUT":
            return {...state, disciplineInput: action.payload};
        case "SET_GRADE":
            return {...state, grade: action.payload};
        case "SET_GROUP":
            return {...state, group: action.payload};
        case "SET_GROUP_AMOUNT":
            {
                const subjectsUpdated = updateSubject(state.subjects, state.displayedSubject, "groupAmount", action.payload);
                return {...state, subjects: subjectsUpdated};
            }
        case "SET_GROUP_PATTERN":
            {
                const subjectsUpdated = updateSubject(state.subjects, state.displayedSubject, "groupPattern", action.payload);
                return {...state, subjects: subjectsUpdated};
            }
        case "SET_HAS_GROUPS":
            return {...state, hasGroups: action.payload};
        case "SET_HAS_MULTIPLE":
            return {...state, hasMultiple: action.payload};
        case "SET_NOTE":
            return {...state, note: action.payload};
        case "SET_ROOM":
            return {...state, room: action.payload};
        case "SET_STUDENT_SEARCH":
            return {...state, studentSearch: action.payload};
        case "SET_TEACHER":
            {
                const subjectsUpdated = updateSubject(state.subjects, state.displayedSubject, "teacher", action.payload);
                return {...state, subjects: subjectsUpdated};
            }
        case "REMOVE_DISCIPLINE": {
            if (!state.displayedSubject) return {...state };
            const subj = state.subjects[state.displayedSubject];
            const subjectsUpdated = [...state.subjects.slice(0, state.displayedSubject), {...subj, disciplines: subj.disciplines.filter(d => d !== action.payload)}, ...state.subjects.slice(state.displayedSubject + 1)];
            return {...state, subjects: subjectsUpdated};
        }
        default: 
            return {...state};
    }
}

const useAddClassReducer = () => {
    return useReducer(addClassReducer, initState);
}

export default useAddClassReducer;
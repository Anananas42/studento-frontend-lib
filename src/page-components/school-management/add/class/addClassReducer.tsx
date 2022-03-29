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
    subjectTypeId: string;
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

const dummySubjectTypes = [
    {
        id: 42,
        name: "Mathematics",
        code: "M",
    },
    {
        id: 43,
        name: "Czech Language",
        code: "Cz",
    },
    {
        id: 45,
        name: "English Language",
        code: "En",
    },
    {
        id: 85,
        name: "Physics",
        code: "Phy",
    },
    {
        id: 48,
        name: "Biology",
        code: "B",
    },
    {
        id: 25,
        name: "Chemistry",
        code: "Ch",
    },
    {
        id: 35,
        name: "History",
        code: "H",
    },
    {
        id: 12,
        name: "Geography",
        code: "G",
    },
    {
        id: 13,
        name: "Informatics",
        code: "I",
    },
    {
        id: 14,
        name: "PE",
        code: "PE",
    },
    {
        id: 19,
        name: "Philosophy",
        code: "Phi",
    }
];

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

const dummyRoomOptions = {
    1: "420",
    2: "69",
    3: "3141",
}

const initState:IAddClassReducerState = {
    grade: "",
    code: "",
    room: "",
    roomOptions: dummyRoomOptions,
    classTeacher: "",
    backupTeacher: "",
    classTeacherOptions: dummyTeacherOptions,
    backupTeacherOptions: dummyTeacherOptions,
    note: "",
    subjects: [],
    chosenSubjectTypes: [],
    subjectTypeOptions: dummySubjectTypes,
    displayedSubject: null,
    discipline: "",
    groupPatterns: {},
    groupPatternOptions: {},
    group: 0,
    classStudents: [],
    studentOptions: dummyStudentOptions,
    studentSearch: "",
    disciplineInput: "",
};

export type AddClassReducerActionType =
    | { type: "ADD_DISCIPLINE" }
    | { type: "ENTER_STUDENTS_STEP" }
    | { type: "ENTER_SUBJECT_TYPES_STEP" }
    | { type: "ENTER_SUBJECTS_STEP" }
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
    if (displayedSubject !== 0 && !displayedSubject) return subjects;
    const subj = subjects[displayedSubject];
    const subjectsUpdated = [...subjects.slice(0, displayedSubject), {...subj, [key]: value}, ...subjects.slice(displayedSubject + 1)];
    return subjectsUpdated;
}

const initSubjects = (subjects: Array<ISubject>, chosenSubjectTypes: Array<IItem>) => {
    const ids = subjects.map(s => s.subjectTypeId);
    const stIds = chosenSubjectTypes.map(st => st.id);
    const updatedSubjects = [...subjects.filter(s => stIds.includes(parseInt(s.subjectTypeId)))];
    chosenSubjectTypes.filter(st => !ids.includes(`${st.id}`)).map(st => {
        updatedSubjects.push({
            subjectTypeId: `${st.id}`,
            title: st.name,
            code: st.code,
            hasMultiple: false,
            hasGroups: false,
            teacher: "",
            teachers: dummyTeacherOptions,
            groupPattern: null,
            disciplines: [],
            groupAmount: 0,
            chosenStudents: [],

        })
        return 0;
    });
    return updatedSubjects;
}

const addClassReducer = (state: IAddClassReducerState, action: AddClassReducerActionType) => {
    switch (action.type) {
        case "ADD_DISCIPLINE": 
            {
                if (state.displayedSubject !== 0 && !state.displayedSubject) return {...state };
                const subj = state.subjects[state.displayedSubject];
                if (!state.disciplineInput || subj.disciplines.includes(state.disciplineInput)) return {...state };
                const subjectsUpdated = [...state.subjects.slice(0, state.displayedSubject), {...subj, disciplines: [...subj.disciplines, state.disciplineInput]}, ...state.subjects.slice(state.displayedSubject + 1)];
                return {...state, subjects: subjectsUpdated, disciplineInput: ""};
            }
        case "ENTER_STUDENTS_STEP":
            {
                return {...state};
            }
        case "ENTER_SUBJECT_TYPES_STEP":
            {
                return {...state};
            }
        case "ENTER_SUBJECTS_STEP":
            {
                const updatedSubjects = initSubjects(state.subjects, state.chosenSubjectTypes);
                return {...state, subjects: updatedSubjects, displayedSubject: updatedSubjects.length > 0 ? 0 : null};
            }
        case "SET_BACKUP_TEACHER":
            return {...state, backupTeacher: action.payload};
        case "SET_CHOSEN_STUDENTS":
            return {...state, classStudents: action.payload};
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
            {
                const subjectsUpdated = updateSubject(state.subjects, state.displayedSubject, "hasGroups", action.payload);
                return {...state, subjects: subjectsUpdated};
            }
        case "SET_HAS_MULTIPLE":
            {
                const subjectsUpdated = updateSubject(state.subjects, state.displayedSubject, "hasMultiple", action.payload);
                return {...state, subjects: subjectsUpdated};
            }
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
            if (state.displayedSubject !== 0 && !state.displayedSubject) return {...state };
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
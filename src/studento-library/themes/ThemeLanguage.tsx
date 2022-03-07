export interface ILanguageSet {
    Generic: {
        cancel: string;
        date: string;
        delete: string;
        drpDwnPlaceholder: string;
        login: string;
        logout: string;
        optional: string;
        password: string;
        passwordConfirm: string;
        passwordPlaceholder: string;
        time: string;
        upload: string;
        username: string;
        usernamePlaceholder: string;
        weekday: string;
        PopupUpload: {
            title: string;
            prompt: string;
            errorFileSize: string;
        },
        Week: {
            monday: string;
            tuesday: string;
            wednesday: string;
            thursday: string;
            friday: string;
            saturday: string;
            sunday: string;
        },
    },

    Address: {
        index: string;
        street: string;
        city: string;
        zip: string;
    },
    Contact: {
        index: string;
        email: string;
        phoneNumber: string;
    },
    Navigation: {
        absences: string;
        grades: string;
        home: string;
        timetable: string;

        Student: {
            class: string;
            classDesc: string;
            diplomas: string;
            diplomasDesc: string;
            events: string;
            eventsDesc: string;
            homework: string;
            homeworkDesc: string;
            schoolTrips: string;
            schoolTripsDesc: string;
            subjects: string;
            subjectsDesc: string;
        }
    },
    PersonalDetails: {
        index: string;
        firstName: string;
        middleName: string;
        lastName: string;
        birthdate: string;
        personalIdentifNumber: string;
        placeOfBirth: string;
        startDate: string;
        insuranceCompany: string;
    }
}

const EnSet:ILanguageSet = {
    Generic: {
        cancel: "CANCEL",
        date: "Date",
        delete: "DELETE",
        drpDwnPlaceholder: "Choose one",
        login: "Login",
        logout: "Logout",
        optional: "optional",
        password: "Password",
        passwordConfirm: "Confirm password",
        passwordPlaceholder: "",
        time: "Time",
        upload: "upload",
        username: "Username",
        usernamePlaceholder: "",
        weekday: "Day of the week",
        PopupUpload: {
            title: "Upload File",
            prompt: "Drag and drop or click and choose a file to upload.",
            errorFileSize: "Uploaded file exceeds the size of ",
        },
        Week: {
            monday: "Monday",
            tuesday: "Tuesday",
            wednesday: "Wednesday",
            thursday: "Thursday",
            friday: "Friday",
            saturday: "Saturday",
            sunday: "Sunday",
        },
    },
    Address: {
        index: "Adress",
        street: "Street",
        city: "City",
        zip: "Zip code",
    },
    Contact: {
        index: "Contact",
        email: "Email",
        phoneNumber: "Phone number",
    },
    Navigation: {
        absences: "Absences",
        grades: "Grades",
        home: "Home",
        timetable: "Timetable",

        Student: {
            class: "Class",
            classDesc: "Class information and actions to take",
            diplomas: "Diplomas",
            diplomasDesc: "Your diplomas and current prediction",
            events: "Events",
            eventsDesc: "Explore upcoming and past events",
            homework: "Homework",
            homeworkDesc: "Manage your homework",
            schoolTrips: "School Trips",
            schoolTripsDesc: "Explore upcoming and past school trips",
            subjects: "Subjects",
            subjectsDesc: "Explore your subjects and statistics",
        }
    },
    PersonalDetails: {
        index: "Personal details",
        firstName: "First name",
        middleName: "Middle name",
        lastName: "Last name",
        birthdate: "Date of birth",
        personalIdentifNumber: "Personal identification number",
        placeOfBirth: "Place of birth",
        startDate: "Start date",
        insuranceCompany: "Insurance provider",
    },
    
}

const CzSet:ILanguageSet = {
    Generic: {
        cancel: "ZRUŠIT",
        date: "Datum",
        delete: "SMAZAT",
        drpDwnPlaceholder: "Vybrat možnost",
        login: "Přihlásit",
        logout: "Odhlásit",
        optional: "volitelné",
        password: "Heslo",
        passwordConfirm: "Potvrdit heslo",
        passwordPlaceholder: "",
        time: "Čas",
        upload: "nahrát",
        username: "Přihlašovací jméno",
        usernamePlaceholder: "",
        weekday: "Den v týdnu",
        PopupUpload: {
            title: "Nahrát Soubor",
            prompt: "Přetáhni, nebo klikni a zvol soubor pro nahrání.",
            errorFileSize: "Nahraný soubor je větší než limit ",
        },
        Week: {
            monday: "Pondělí",
            tuesday: "Úterý",
            wednesday: "Středa",
            thursday: "Čtvrtek",
            friday: "Pátek",
            saturday: "Sobota",
            sunday: "Neděle",
        },
    },
    Address: {
        index: "Adresa",
        street: "Ulice",
        city: "Město",
        zip: "PSČ",
    },
    Contact: {
        index: "Kontakt",
        email: "Email",
        phoneNumber: "Telefonní číslo",
    },
    Navigation: {
        absences: "Absence",
        grades: "Známky",
        home: "Domov",
        timetable: "Rozvrh",

        Student: {
            class: "Třída",
            classDesc: "Informace o třídě a požadované akce",
            diplomas: "Vysvědčení",
            diplomasDesc: "Tvá vysvědčení a budoucí predikce",
            events: "Události",
            eventsDesc: "Nadcházející a minulé událost",
            homework: "Úkoly",
            homeworkDesc: "Zobrazení a odevzdávání tvých úkolů",
            schoolTrips: "Školní Výlety",
            schoolTripsDesc: "Nadcházející a minulé školní výlety",
            subjects: "Předměty",
            subjectsDesc: "Tvé předměty a užitečné statistiky",
        }
    },
    PersonalDetails: {
        index: "Osobní údaje",
        firstName: "Křestní jméno",
        middleName: "Střední jméno",
        lastName: "Příjmení",
        birthdate: "Datum narození",
        personalIdentifNumber: "Osobní identifikační číslo",
        placeOfBirth: "Místo narození",
        startDate: "Datum nastoupení",
        insuranceCompany: "Pojišťovna",
    },
}

interface ILanguageSets {
    [key: string]: ILanguageSet;
}

export const LanguageSets:ILanguageSets = {
    en: EnSet,
    cz: CzSet,
}

export type Language = "en" | "cz";


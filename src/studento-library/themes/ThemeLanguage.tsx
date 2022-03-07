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
        admissions: string;
        class: string;
        create: string;
        diplomas: string;
        employees: string;
        events: string;
        find: string;
        grades: string;
        home: string;
        homework: string;
        parentMeetings: string;
        schoolTrips: string;
        subjects: string;
        substitutions: string;
        timetable: string;
        timetableManagement: string;

        Admin: {
            admissionsDesc: string;
            diplomasDesc: string;
            eventsDesc: string;
            schoolTripsDesc: string;
            substitutionDesc: string;
            timetableManagementDesc: string;
        },
        Parent: {
            diplomasDesc: string;
            eventsDesc: string;
            homeworkDesc: string;
            schoolTripsDesc: string;
            subjectsDesc: string;
            timetableDesc: string;
        },
        Student: {
            classDesc: string;
            diplomasDesc: string;
            eventsDesc: string;
            homeworkDesc: string;
            schoolTripsDesc: string;
            subjectsDesc: string;
        },
        Teacher: {
            eventsDesc: string;
            findDesc: string;
            diplomasDesc: string;
            homeworkDesc: string;
            schoolTripsDesc: string;
            subjectsDesc: string;
        },
        Principal: {
            admissionsDesc: string;
            diplomasDesc: string;
            employeesDesc: string;
            eventsDesc: string;
            schoolTripsDesc: string;
            substitutionDesc: string;
            timetableManagementDesc: string;
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
        admissions: "Admissions",
        class: "Class",
        create: "Create",
        diplomas: "Diplomas",
        employees: "Employees",
        events: "Events",
        find: "Find",
        grades: "Grades",
        home: "Home",
        homework: "Homework",
        parentMeetings: "Parent Meetings",
        schoolTrips: "School Trips",
        subjects: "Subjects",
        substitutions: "Substitutions",
        timetable: "Timetable",
        timetableManagement: "Timetable Management",

        Admin: {
            admissionsDesc: "Automate communication and transfer new students",
            diplomasDesc: "Print and edit diplomas",
            eventsDesc: "Create and manage school events",
            schoolTripsDesc: "Create and manage school trips",
            substitutionDesc: "Create and manage substitutions",
            timetableManagementDesc: "Create and manage timetables",
        },
        Parent: {
            diplomasDesc: "Diplomas and current prediction",
            eventsDesc: "Upcoming and past events",
            homeworkDesc: "Student's homework",
            schoolTripsDesc: "Upcoming and past school trips",
            subjectsDesc: "Subjects and statistics",
            timetableDesc: "Student's timetable",
        },
        Student: {
            classDesc: "Class information and actions to take",
            diplomasDesc: "Your diplomas and current prediction",
            eventsDesc: "Explore upcoming and past events",
            homeworkDesc: "Manage your homework",
            schoolTripsDesc: "Explore upcoming and past school trips",
            subjectsDesc: "Explore your subjects and statistics",
        },
        Teacher: {
            eventsDesc: "View and manage all your events",
            findDesc: "Find a person or anything about your school",
            diplomasDesc: "Prepare and print your class' diplomas",
            homeworkDesc: "Create and manage student assignments",
            schoolTripsDesc: "View and manage all your school trips",
            subjectsDesc: "View and manage all your subjects",
        },
        Principal: {
            admissionsDesc: "Automate communication and transfer new students",
            diplomasDesc: "Print and edit diplomas",
            employeesDesc: "View and manage school employees",
            eventsDesc: "Create and manage school events",
            schoolTripsDesc: "Create and manage school trips",
            substitutionDesc: "Create and manage substitutions",
            timetableManagementDesc: "Create and manage timetables",
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
        admissions: "Přijímací Proces",
        class: "Třída",
        create: "Přidat",
        diplomas: "Vysvědčení",
        employees: "Zaměstnanci",
        events: "Události",
        find: "Najít",
        grades: "Známky",
        home: "Domov",
        homework: "Úkoly",
        parentMeetings: "Třídní Schůzky",
        schoolTrips: "Školní Výlety",
        subjects: "Předměty",
        substitutions: "Suplování",
        timetable: "Rozvrh",
        timetableManagement: "Správa Rozvrhů",

        Admin: {
            admissionsDesc: "Hromadná komunikace a přijímání nových studentů",
            diplomasDesc: "Úpravy a tisk vysvědčení",
            eventsDesc: "Vytváření a správa školních událostí",
            schoolTripsDesc: "Vytváření a správa školních výletů",
            substitutionDesc: "Vytváření a správa suplování",
            timetableManagementDesc: "Vytváření a správa rozvrhů",
        },
        Parent: {
            diplomasDesc: "Vysvědčení a budoucí predikce",
            eventsDesc: "Nadcházející a minulé události",
            homeworkDesc: "Nadcházející a minulé úkoly",
            schoolTripsDesc: "Nadcházející a minulé školní výlety",
            subjectsDesc: "Předměty a souhrnné statistiky",
            timetableDesc: "Studentův rozvrh",
        },
        Student: {
            classDesc: "Informace o třídě a požadované akce",
            diplomasDesc: "Tvá vysvědčení a budoucí predikce",
            eventsDesc: "Nadcházející a minulé události",
            homeworkDesc: "Zobrazení a odevzdávání tvých úkolů",
            schoolTripsDesc: "Nadcházející a minulé školní výlety",
            subjectsDesc: "Tvé předměty a souhrnné statistiky",
        },
        Teacher: {
            eventsDesc: "Přehled tvých nadcházejících událostí",
            findDesc: "Najdi osobu nebo cokoliv o tvé škole",
            diplomasDesc: "Příprava a tisk vysvědčení pro tvou třídu",
            homeworkDesc: "Vytváření a sledování zadaných úkolů",
            schoolTripsDesc: "Správa a přehled tvých školních výletů",
            subjectsDesc: "Správa a přehled tvých předmětů",
        },
        Principal: {
            admissionsDesc: "Hromadná komunikace a přijímání nových studentů",
            diplomasDesc: "Úpravy a tisk vysvědčení",
            eventsDesc: "Vytváření a správa školních událostí",
            employeesDesc: "Přehled a správa školních zaměstnanců",
            schoolTripsDesc: "Vytváření a správa školních výletů",
            substitutionDesc: "Vytváření a správa suplování",
            timetableManagementDesc: "Vytváření a správa rozvrhů",
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


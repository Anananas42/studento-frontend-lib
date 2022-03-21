export interface ILanguageSet {
    Generic: {
        accountCreate: string;
        accountNew: string;
        cancel: string;
        date: string;
        delete: string;
        drpDwnPlaceholder: string;
        login: string;
        logout: string;
        optional: string;
        password: string;
        passwordConfirm: string;
        passwordForgot: string;
        passwordPlaceholder: string;
        passwordRemember: string;
        passwordReset: string;
        time: string;
        upload: string;
        usermode: string;
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
        UserModes: {
            admin: string;
            parent: string;
            principal: string;
            student: string;
            teacher: string;
        }
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
        add: string;
        admissions: string;
        class: string;
        contact: string;
        diplomas: string;
        documentation: string;
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
        Default: {

        },
        Parent: {
            classDesc: string;
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
            classDesc: string;
            eventsDesc: string;
            findDesc: string;
            diplomasDesc: string;
            homeworkDesc: string;
            schoolTripsDesc: string;
            subjectsDesc: string;
            parentMeetingsDesc: string;
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
    },
    SchoolManagement: {
        class: string;
        employee: string;
        room: string;
        student: string;
        subject: string;
        teacher: string;

        AddPage: {
            recentlyAdded: string;
        }
    }
}

const EnSet:ILanguageSet = {
    Generic: {
        accountCreate: "Create new account",
        accountNew: "New account",
        cancel: "Cancel",
        date: "Date",
        delete: "Delete",
        drpDwnPlaceholder: "Choose one",
        login: "Log In",
        logout: "Logout",
        optional: "optional",
        password: "Password",
        passwordConfirm: "Confirm password",
        passwordForgot: "Forgot password",
        passwordPlaceholder: "",
        passwordRemember: "Remember password",
        passwordReset: "Send password reset email",
        time: "Time",
        upload: "upload",
        usermode: "User mode",
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
        UserModes: {
            admin: "Admin",
            parent: "Parent",
            principal: "Principal",
            student: "Student",
            teacher: "Teacher",
        }
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
        add: "Add",
        admissions: "Admissions",
        class: "Class",
        contact: "Contact us",
        diplomas: "Diplomas",
        documentation: "Documentation",
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
        Default: {

        },
        Parent: {
            classDesc: "Class information and actions to take",
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
            classDesc: "View and manage your class",
            eventsDesc: "View and manage all your events",
            findDesc: "Find a person or anything about your school",
            diplomasDesc: "Prepare and print your class' diplomas",
            homeworkDesc: "Create and manage student assignments",
            schoolTripsDesc: "View and manage all your school trips",
            subjectsDesc: "View and manage all your subjects",
            parentMeetingsDesc: "View and manage all your parent meetings",
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
    SchoolManagement: {
        class: "Class",
        employee: "Employee",
        room: "Room",
        student: "Student",
        subject: "Subject",
        teacher: "Teacher",

        AddPage: {
            recentlyAdded: "Recently added",
        }
    }
    
}

const CzSet:ILanguageSet = {
    Generic: {
        accountCreate: "Vytvořit účet",
        accountNew: "Nový účet",
        cancel: "Zrušit",
        date: "Datum",
        delete: "Smazat",
        drpDwnPlaceholder: "Vybrat možnost",
        login: "Přihlásit",
        logout: "Odhlásit",
        optional: "volitelné",
        password: "Heslo",
        passwordConfirm: "Potvrdit heslo",
        passwordForgot: "Zapomenuté heslo",
        passwordPlaceholder: "",
        passwordRemember: "Zapamatovat přihlášení",
        passwordReset: "Zaslat resetovací email",
        time: "Čas",
        upload: "nahrát",
        usermode: "Uživatelský mód",
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
        UserModes: {
            admin: "Admin",
            parent: "Rodič",
            principal: "Ředitel",
            student: "Student",
            teacher: "Učitel",
        }
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
        add: "Přidat",
        admissions: "Přijímací Proces",
        class: "Třída",
        contact: "Napište nám",
        diplomas: "Vysvědčení",
        documentation: "Manuál",
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
        Default: {

        },
        Parent: {
            classDesc: "Informace o třídě a požadované akce",
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
            classDesc: "Správa a komplexní přehled tvé třídy",
            eventsDesc: "Přehled tvých nadcházejících událostí",
            findDesc: "Najdi osobu nebo cokoliv o tvé škole",
            diplomasDesc: "Příprava a tisk vysvědčení pro tvou třídu",
            homeworkDesc: "Vytváření a sledování zadaných úkolů",
            schoolTripsDesc: "Správa a přehled tvých školních výletů",
            subjectsDesc: "Správa a přehled tvých předmětů",
            parentMeetingsDesc: "Správa a přehled tvých třídních schůzek",
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
    SchoolManagement: {
        class: "Třída",
        employee: "Zaměstnanec",
        room: "Místnost",
        student: "Student",
        subject: "Předmět",
        teacher: "Učitel",

        AddPage: {
            recentlyAdded: "Nedávno přidané",
        }
    }
}

interface ILanguageSets {
    [key: string]: ILanguageSet;
}

export const LanguageSets:ILanguageSets = {
    en: EnSet,
    cz: CzSet,
}

export type Language = "en" | "cz";


export interface ILanguageSet {
    Generic: {
        btnLogin: string;
        cancel: string;
        date: string;
        delete: string;
        drpDwnPlaceholder: string;
        optional: string;
        password: string;
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
    }
}

const EnSet:ILanguageSet = {
    Generic: {
        btnLogin: "login",
        cancel: "CANCEL",
        date: "Date",
        delete: "DELETE",
        drpDwnPlaceholder: "Choose one",
        optional: "optional",
        password: "Password",
        passwordPlaceholder: "Enter password",
        time: "Time",
        upload: "upload",
        username: "Username",
        usernamePlaceholder: "Enter username",
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
    }
}

const CzSet:ILanguageSet = {
    Generic: {
        btnLogin: "přihlásit",
        cancel: "ZRUŠIT",
        date: "Datum",
        delete: "SMAZAT",
        drpDwnPlaceholder: "Vybrat možnost",
        optional: "volitelné",
        password: "Heslo",
        passwordPlaceholder: "Heslo",
        time: "Čas",
        upload: "nahrát",
        username: "Přihlašovací jméno",
        usernamePlaceholder: "Přihlašovací jméno",
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
    }
}

interface ILanguageSets {
    [key: string]: ILanguageSet;
}

export const LanguageSets:ILanguageSets = {
    en: EnSet,
    cz: CzSet,
}


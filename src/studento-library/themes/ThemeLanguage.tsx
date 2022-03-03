export interface ILanguageSet {
    Generic: {
        optional: string;
        btnLogin: string;
        drpDwnPlaceholder: string;
        upload: string;
        cancel: string;
        delete: string;
        PopupUpload: {
            title: string;
            prompt: string;
            errorFileSize: string;
        },
        weekday: string;
        Week: {
            monday: string;
            tuesday: string;
            wednesday: string;
            thursday: string;
            friday: string;
            saturday: string;
            sunday: string;
        },
        password: string;
        passwordPlaceholder: string;
    }
}

const EnSet:ILanguageSet = {
    Generic: {
        optional: "optional",
        btnLogin: "login",
        drpDwnPlaceholder: "Choose one",
        upload: "upload",
        cancel: "CANCEL",
        delete: "DELETE",
        PopupUpload: {
            title: "Upload File",
            prompt: "Drag and drop or click and choose a file to upload.",
            errorFileSize: "Uploaded file exceeds the size of ",
        },
        weekday: "Day of the week",
        Week: {
            monday: "Monday",
            tuesday: "Tuesday",
            wednesday: "Wednesday",
            thursday: "Thursday",
            friday: "Friday",
            saturday: "Saturday",
            sunday: "Sunday",
        },
        password: "Password",
        passwordPlaceholder: "Enter password",
    }
}

const CzSet:ILanguageSet = {
    Generic: {
        optional: "volitelné",
        btnLogin: "přihlásit",
        drpDwnPlaceholder: "Vybrat možnost",
        upload: "nahrát",
        cancel: "ZRUŠIT",
        delete: "SMAZAT",
        PopupUpload: {
            title: "Nahrát Soubor",
            prompt: "Přetáhni, nebo klikni a zvol soubor pro nahrání.",
            errorFileSize: "Nahraný soubor je větší než limit ",
        },
        weekday: "Den v týdnu",
        Week: {
            monday: "Pondělí",
            tuesday: "Úterý",
            wednesday: "Středa",
            thursday: "Čtvrtek",
            friday: "Pátek",
            saturday: "Sobota",
            sunday: "Neděle",
        },
        password: "Heslo",
        passwordPlaceholder: "Zadejte heslo",
    }
}

interface ILanguageSets {
    [key: string]: ILanguageSet;
}

export const LanguageSets:ILanguageSets = {
    en: EnSet,
    cz: CzSet,
}


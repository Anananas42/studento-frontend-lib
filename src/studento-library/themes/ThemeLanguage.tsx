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
        }
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
        }
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


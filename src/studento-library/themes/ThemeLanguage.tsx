export interface ILanguageSet {
    BtnLogin: string
}

const EnSet:ILanguageSet = {
    BtnLogin: "login",
}

const CzSet:ILanguageSet = {
    BtnLogin: "přihlásit",
}

interface ILanguageSets {
    [key: string]: ILanguageSet;
}

export const LanguageSets:ILanguageSets = {
    en: EnSet,
    cz: CzSet,
}


export interface ILanguageSet {
    BtnLogin: string
}

const EnSet:ILanguageSet = {
    BtnLogin: "login",
}

const CzSet:ILanguageSet = {
    BtnLogin: "přihlásit",
}

export const LanguageSets = {
    en: EnSet,
    cz: CzSet,
}
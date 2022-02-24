import { useState, createContext, FC, SetStateAction, useContext } from 'react';
import { IColorSet, colorsLightMode, colorsDarkMode } from './themes/ThemeColor';
import { ILanguageSet, LanguageSets } from './themes/ThemeLanguage';

type ThemeMode = "light" | "dark";
type Language = keyof typeof LanguageSets;

interface ThemeContextValue {
    borderRadius: string;
    mode: ThemeMode;
    setMode: React.Dispatch<SetStateAction<ThemeMode>>;
    language: Language;
    languageMap: ILanguageSet;
    setLanguage: React.Dispatch<SetStateAction<Language>>;
    colors: IColorSet;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const borderRadius = "10px";


export const useThemeContext = () => {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw Error("<ThemeContext.Provider> is missing. Wrap your components to provide the context.");
    }

    return context;
}

const ThemeProvider:FC = (props) => {
    const [mode, setMode] = useState<ThemeMode>("light");
    const [language, setLanguage] = useState<Language>("en");

    const colors = mode === "light" ? colorsLightMode : colorsDarkMode;
    const languageMap = LanguageSets[language];

    return (
        <ThemeContext.Provider value={{ mode, setMode, language, languageMap, setLanguage, colors, borderRadius }}>
            { props.children }
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;
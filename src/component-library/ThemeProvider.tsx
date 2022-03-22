import React, { useState, createContext, FC, SetStateAction, useContext, ReactNode } from 'react';
import { IColorSet, colorsLightMode, colorsDarkMode } from './themes/ThemeColor';
import { ILanguageSet, Language, LanguageSets } from './themes/ThemeLanguage';
import SystemNotificationManager, { INewEntry, INotification } from './managers/SystemNotificationManager';

type ThemeMode = "light" | "dark";

interface IThemeContextValue {
    mode: ThemeMode;
    setMode: React.Dispatch<SetStateAction<ThemeMode>>;
    language: Language;
    languageMap: ILanguageSet;
    setLanguage: React.Dispatch<SetStateAction<Language>>;
    colors: IColorSet;
    pushSystemNotification: {(entry: INotification, isClearBefore: boolean): void};
    clearSystemNotifications: {(): void};
}

const ThemeContext = createContext<IThemeContextValue | undefined>(undefined);

export const borderRadius = "10px";
export const sectionPadding = "24px";
export const sectionRadius = "24px";
export const sectionTitleSize = "30px";

export const useThemeContext = () => {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw Error("<ThemeContext.Provider> is missing. Wrap your App component to provide the context.");
    }

    return context;
}

interface IProviderProps {
    chilren?: ReactNode;
}

const ThemeProvider:FC<IProviderProps> = (props) => {
    const [mode, setMode] = useState<ThemeMode>("light");
    const [language, setLanguage] = useState<Language>("en");

    const colors = mode === "light" ? colorsLightMode : colorsDarkMode;
    const languageMap = LanguageSets[language];

    const [systemNotification, setSystemNotification] = useState<INewEntry | null>(null);

    const pushSystemNotification = (entry: INotification, isClearBefore: boolean) => {
        setSystemNotification({notification: entry, isClearBefore: isClearBefore});
    }

    const clearSystemNotifications = () => {
        setSystemNotification(null);
    }

    return (
        <ThemeContext.Provider value={{ mode, setMode, language, languageMap, setLanguage, colors, pushSystemNotification, clearSystemNotifications}}>
            <SystemNotificationManager newEntry={systemNotification}/>
            { props.children }
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;
export interface IColorSet {
    primary: string;
    primaryAlt: string;
    secondary: string;
    link: string;
    linkActive: string;
    fill: string;
    fillSecondary: string;
    fillDisabled: string;
    bg: string;
    descBg: string;
    descTxt: string;
    sectionShadow: string;

    System: {
        Error: {
            dark: string;
            light: string;  
        },
        Warning: {
            dark: string;
            light: string;
        },
        Neutral: {
            dark: string;
            light: string;
        },
        Success: {
            dark: string;
            light: string;
        }
    }
}

export const colorsLightMode: IColorSet = {
    primary: "#FFBB3D",
    primaryAlt: "#FFA724",
    secondary: "#24A1FF",
    link: "#0F5FFF",
    linkActive: "#5C92FF",
    fill: "#453C30",
    fillSecondary: "rgba(69, 60, 48, 0.6)",
    fillDisabled: "#453C3042",
    bg: "#F7F6F5",
    descBg: "#C5E3FA",
    descTxt: "#186AA8",
    sectionShadow: "2px 2px 16px -2px rgba(69, 60, 48, 0.24)",

    System: {
        Error: {
            dark: "#EB2013",
            light: "#FEC9D1"  
        },
        Warning: {
            dark: "#FA8314",
            light: "#FFEEE3"
        },
        Neutral: {
            dark: "#0086EB",
            light: "#E5F4FF"
        },
        Success: {
            dark: "#2AAD18",
            light: "#E9FFE5"
        }
    }
}

export const colorsDarkMode: IColorSet = {
    primary: "#FFBB3D",
    primaryAlt: "#FFA724",
    secondary: "#24A1FF",
    link: "#0F5FFF",
    linkActive: "#5C92FF",
    fill: "#453C30",
    fillSecondary: "rgba(69, 60, 48, 0.6)",
    fillDisabled: "#453C3042",
    bg: "#F7F6F5",
    descBg: "#C5E3FA",
    descTxt: "#186AA8",
    sectionShadow: "rgba(69, 60, 48, 0.32)",

    System: {
        Error: {
            dark: "#F14E43",
            light: "#FEE2E6"  
        },
        Warning: {
            dark: "#FA7723",
            light: "#FFEEE3"
        },
        Neutral: {
            dark: "#24A1FF",
            light: "#E5F4FF"
        },
        Success: {
            dark: "#3DB82C",
            light: "#E9FFE5"
        }
    }
}
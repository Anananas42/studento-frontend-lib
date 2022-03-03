export enum StateType {
    Default = "Default",
    Error = "Error",
    Disabled = "Disabled",
}

export interface IFormColors {
    Default: {
        placeholder: string;
        border: string;
        label: string;
        note: string;
        innerShadow: string;
        dropdownShadow: string;
        singleChoiceShadow: string;
        icon: string;
        hoverBg1: string;
        hoverBg2: string;
    },
    Active: {
        border: string;
        innerShadow: string;
    },
    Error: {
        border: string,
        label: string;
        note: string;
        innerShadow: string;
    },
    Disabled: {
        label: string,
        border: string,
        placeholder: string;
        text: string;
        note: string;
        background: string;
        icon: string;
    };
    SecondaryGrad: {
        bg1: string,
        bg2: string,
    }
}

const FormColors:IFormColors = {
    Default: {
        placeholder: "rgba(69, 60, 48, 0.5)",
        border: "#DED7CE",
        label: "#453c30",
        note: "rgba(69, 60, 48, 0.6)",
        innerShadow: "rgba(69, 60, 48, 0.06)",
        dropdownShadow: "rgba(69, 60, 48, 0.22)",
        singleChoiceShadow: "hsla(222.29074889867843, 100%, 35%, 0.3)",
        icon: "rgba(69, 60, 48, 0.4)",
        hoverBg1: "#FFBB3D",
        hoverBg2: "#FFD53D",
    },
    Active: {
        border: "rgb(255, 187, 61)",
        innerShadow: "rgba(255, 187, 61, 0.12)",
    },
    Error: {
        border: "#EB2013",
        label: "#EB2013",
        note: "#EB2013",
        innerShadow: "rgba(69, 60, 48, 0.1)",
    },
    Disabled: {
        label: "rgba(69, 60, 48, 0.48)",
        placeholder: "rgba(69, 60, 48, 0.42)",
        text: "rgba(69, 60, 48, 0.26)",
        border: "rgba(69, 60, 48, 0.04)",
        note: "rgba(69, 60, 48, 0.32)",
        background: "rgba(69, 60, 48, 0.06)",
        icon: "rgba(69, 60, 48, 0.2)",
    },
    SecondaryGrad: {
        bg1: "#1C5FFF",
        bg2: "#1C9EFF",
    }
    
}

export interface IFormState {
    type: StateType;
    message?: string;
}


export default FormColors;
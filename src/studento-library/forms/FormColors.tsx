export enum StateType {
    Default = "Default",
    Active = "Active",
    Error = "Error",
}

export interface IFormColors {
    border: string;
    innerShadow: string;
    outerShadow: string;
    Message: {
        Default: {
            text: string;
        },
        Active: {
            text: string;
        },
        Error: {
            text: string;
        },
        Disabled: {
            text: string;
        }
    };
}

const FormColors:IFormColors = {
    border: "#000",
    innerShadow: "rgba(0, 0, 0, 0.2)",
    outerShadow: "rgba(0, 0, 0, 0.2)",
    Message: {
        Default: {
            text: "#000",
        },
        Active: {
            text: "#00f",
        },
        Error: {
            text: "#f00",
        },
        Disabled: {
            text: "rgba(0, 0, 0, 0.2)",
        }
    },
}

export interface IFormState {
    type: StateType;
    message?: string;
}


export default FormColors;
export interface IBtnSizes {
    fontSize: string;
    lineHeight: string;
    paddingV: string;
    paddingH: string;
}

export const BtnSizes = {
    Large: {
        fontSize: "20px",
        lineHeight: "14px",
        paddingV: "18px",
        paddingH: "36px",
    },
    Medium: {
        fontSize: "18px",
        lineHeight: "13px",
        paddingV: "15px",
        paddingH: "30px"
    },
    Small: {
        fontSize: "17px",
        lineHeight: "12px",
        paddingV: "14px",
        paddingH: "28px"
    }
}

export default BtnSizes;
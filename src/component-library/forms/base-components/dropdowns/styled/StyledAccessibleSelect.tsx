import styled from "styled-components";
import FormColors from "../../../shared/FormColors";
import FormStyles from "../../../shared/FormStyles";

export interface IStyledSelect {
    errorMessage?: string;
    borderRadius: string;
    fill: string;
    placeholderFill: string;
    isOpen?: boolean;
    isDisabled?: boolean;
    width?: string;
}

const StyledAccessibleSelect = styled.select<IStyledSelect>`
    position: relative;
    width: ${props => props.width ? props.width : "100%"};
    font-size: ${FormStyles.fontSize};
    padding: ${FormStyles.inputPaddingV} ${FormStyles.inputPaddingH};
    border: 1px solid ${props => props.errorMessage ? FormColors.Error.border : FormColors.Default.border};
    border-radius: ${props => props.borderRadius};
    outline: 0;
    box-shadow: inset 0 4px 8px ${FormColors.Default.innerShadow};
    background-color: white;
    color: ${props => props.placeholderFill};
    font-family: 'Varela Round', sans-serif;
    margin: 0;

    -moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;

    option {
        color: ${props => props.fill};
    }

    :focus {
        box-shadow: inset 0 4px 8px ${FormColors.Active.innerShadow};
        border-color: ${FormColors.Active.border};
        outline: ${FormColors.Active.border} solid 1px;
        transition: box-shadow 0.2s ease-in-out;
    }

    :disabled {
        visibility: hidden;
    }

    @media (hover: hover) {
        :focus + div {
            display: none;
        }
    }
`;

export default StyledAccessibleSelect;
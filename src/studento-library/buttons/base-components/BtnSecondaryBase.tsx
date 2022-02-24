import { IBtnSizes } from '../shared/ButtonSizes';
import SecondaryColors from '../colors/SecondaryColors';
import styled from 'styled-components';
import { FC, ReactElement } from 'react';
import BtnBase, { IStyledBtn } from '../shared/BtnBase';

const StyledSecondary = styled.button<IStyledBtn>`
    border-radius: ${props => props.borderRadius};
    color: ${SecondaryColors.Default.txt};
    background-color: ${SecondaryColors.Default.bg};
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: ${props => props.fontSize};
    line-height: ${props => props.lineHeight};
    padding: ${props => props.padding};
    width: fit-content;
    display: flex;
    flex-flow: row;
    align-items: center;
    border: 2px solid ${SecondaryColors.Default.stroke};
    text-decoration: none;
    cursor: pointer;

    :hover {
        color: ${SecondaryColors.Hover.txt};
        background-color: ${SecondaryColors.Hover.bg};
        border-color: ${SecondaryColors.Hover.stroke};
    }

    :active {
        color: ${SecondaryColors.Active.txt};
        background-color: ${SecondaryColors.Active.bg};
        border-color: ${SecondaryColors.Active.stroke};
    }

    :disabled {
        color: ${SecondaryColors.Disabled.txt};
        background-color: ${SecondaryColors.Disabled.bg};
        border-color: ${SecondaryColors.Disabled.stroke};
        pointer-events: none;
    }
`;

interface SecondaryProps {
    children?: string;
    isAfter?: boolean;
    Icon?: ReactElement;
    Sizes: IBtnSizes;
    onClick: Function;
    isDisabled?: boolean;
}

const BtnSecondaryBase:FC<SecondaryProps> = (props) => {

    return <BtnBase {...props} StyledButton={StyledSecondary} />
}

export default BtnSecondaryBase;
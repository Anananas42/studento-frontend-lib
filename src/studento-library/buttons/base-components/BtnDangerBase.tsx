import { IBtnSizes } from '../shared/ButtonSizes';
import DangerColors from '../colors/DangerColors';
import styled from 'styled-components';
import { FC, ReactElement } from 'react';
import BtnBase, { IStyledBtn } from '../shared/BtnBase';

const StyledDanger = styled.button<IStyledBtn>`
    border-radius: ${props => props.borderRadius};
    color: ${DangerColors.Default.txt};
    background-color: ${DangerColors.Default.bg};
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: ${props => props.fontSize};
    line-height: ${props => props.lineHeight};
    padding: ${props => props.padding};
    width: fit-content;
    display: flex;
    flex-flow: row;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    border: none;

    :hover {
        color: ${DangerColors.Hover.txt};
        background-color: ${DangerColors.Hover.bg};
    }

    :active {
        color: ${DangerColors.Active.txt};
        background-color: ${DangerColors.Active.bg};
    }

    :disabled {
        color: ${DangerColors.Disabled.txt};
        background-color: ${DangerColors.Disabled.bg};
        pointer-events: none;
    }
`;

interface DangerProps {
    children?: string;
    isAfter?: boolean;
    Icon?: ReactElement;
    Sizes: IBtnSizes;
    onClick: Function;
    isDisabled?: boolean;
}

const BtnDangerBase:FC<DangerProps> = (props) => {

    return <BtnBase {...props} StyledButton={StyledDanger} />
}

export default BtnDangerBase;
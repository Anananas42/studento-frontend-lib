import { IBtnSizes } from '../shared/ButtonSizes';
import CloseColors from '../colors/CloseColors';
import styled from 'styled-components';
import { FC, ReactElement } from 'react';
import BtnBase, { IStyledBtn } from '../shared/BtnBase';

const StyledClose = styled.button<IStyledBtn>`
    border-radius: ${props => props.borderRadius};
    color: ${CloseColors.Default.txt};
    background-color: ${CloseColors.Default.bg};
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
        color: ${CloseColors.Hover.txt};
        background-color: ${CloseColors.Hover.bg};
    }

    :active {
        color: ${CloseColors.Active.txt};
        background-color: ${CloseColors.Active.bg};
    }

    :disabled {
        color: ${CloseColors.Disabled.txt};
        background-color: ${CloseColors.Disabled.bg};
        pointer-events: none;
    }
`;

interface CloseProps {
    Sizes: IBtnSizes;
    onClick: Function;
    isDisabled?: boolean;
    Icon: ReactElement;
}

const BtnCloseBase:FC<CloseProps> = (props) => {

    return <BtnBase {...props} StyledButton={StyledClose} children={undefined} />
}

export default BtnCloseBase;
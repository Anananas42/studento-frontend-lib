import { IBtnSizes } from '../shared/ButtonSizes';
import TextColors from '../colors/TextColors';
import styled from 'styled-components';
import { FC, ReactElement } from 'react';
import BtnBase, { IStyledBtn } from '../shared/BtnBase';

const StyledText = styled.button<IStyledBtn>`
    border-radius: ${props => props.borderRadius};
    color: ${TextColors.Default.txt};
    background-color: ${TextColors.Default.bg};
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: ${props => props.fontSize};
    line-height: ${props => props.lineHeight};
    padding: ${props => props.padding};
    width: fit-content;
    height: ${props => `calc(${props.lineHeight} + 2*${props.paddingV})`};
    display: flex;
    flex-flow: row;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    border: none;

    :hover {
        color: ${TextColors.Hover.txt};
        background-color: ${TextColors.Hover.bg};
    }

    :active {
        color: ${TextColors.Active.txt};
        background-color: ${TextColors.Active.bg};
    }

    :disabled {
        color: ${TextColors.Disabled.txt};
        background-color: ${TextColors.Disabled.bg};
        pointer-events: none;
    }
`;

interface TextProps {
    children?: string;
    isAfter?: boolean;
    Icon?: ReactElement;
    Sizes: IBtnSizes;
    onClick: Function;
    isDisabled?: boolean;
}

const BtnTextBase:FC<TextProps> = (props) => {

    return <BtnBase {...props} StyledButton={StyledText} />
}

export default BtnTextBase;
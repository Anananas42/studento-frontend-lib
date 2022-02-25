import { IBtnSizes } from '../shared/ButtonSizes';
import OutlineColors from '../colors/OutlineColors';
import styled from 'styled-components';
import { FC, ReactElement } from 'react';
import BtnBase, { IStyledBtn } from '../shared/BtnBase';

const StyledOutline = styled.button<IStyledBtn>`
    border-radius: ${props => props.borderRadius};
    color: ${OutlineColors.Default.txt};
    background-color: ${OutlineColors.Default.bg};
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: ${props => props.fontSize};
    line-height: ${props => props.lineHeight};
    padding: ${props => props.padding};
    width: fit-content;
    display: flex;
    flex-flow: row;
    align-items: center;
    border: 2px solid ${OutlineColors.Default.stroke};
    text-decoration: none;
    cursor: pointer;
    box-shadow: 1px 1px 8px ${OutlineColors.shadow};

    :hover {
        color: ${OutlineColors.Hover.txt};
        background-color: ${OutlineColors.Hover.bg};
        border-color: ${OutlineColors.Hover.stroke};
    }

    :active {
        color: ${OutlineColors.Active.txt};
        background-color: ${OutlineColors.Active.bg};
        border-color: ${OutlineColors.Active.stroke};
    }

    :disabled {
        color: ${OutlineColors.Disabled.txt};
        background-color: ${OutlineColors.Disabled.bg};
        border-color: ${OutlineColors.Disabled.stroke};
        box-shadow: none;
        pointer-events: none;
    }
`;

interface OutlineProps {
    children?: string;
    isAfter?: boolean;
    Icon?: ReactElement;
    Sizes: IBtnSizes;
    onClick: Function;
    isDisabled?: boolean;
}

const BtnOutlineBase:FC<OutlineProps> = (props) => {

    return <BtnBase {...props} StyledButton={StyledOutline}/>
}

export default BtnOutlineBase;
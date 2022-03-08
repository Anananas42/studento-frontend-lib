import { IBtnSizes } from '../shared/ButtonSizes';
import TertiaryColors from '../colors/TertiaryColors';
import styled from 'styled-components';
import { FC, ReactElement } from 'react';
import BtnBase, { IStyledBtn } from '../shared/BtnBase';

const StyledTertiary = styled.button<IStyledBtn>`
    border-radius: ${props => props.borderRadius};
    color: ${TertiaryColors.Default.txt};
    background-color: ${TertiaryColors.Default.bg};
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
        color: ${TertiaryColors.Hover.txt};
        background-color: ${TertiaryColors.Hover.bg};
    }

    :active {
        color: ${TertiaryColors.Active.txt};
        background-color: ${TertiaryColors.Active.bg};
    }

    :disabled {
        color: ${TertiaryColors.Disabled.txt};
        background-color: ${TertiaryColors.Disabled.bg};
        pointer-events: none;
    }
`;

interface TertiaryProps {
    children?: string;
    isAfter?: boolean;
    Icon?: ReactElement;
    Sizes: IBtnSizes;
    onClick: Function;
    isDisabled?: boolean;
}

const BtnTertiaryBase:FC<TertiaryProps> = (props) => {

    return <BtnBase {...props} StyledButton={StyledTertiary}/>
}

export default BtnTertiaryBase;
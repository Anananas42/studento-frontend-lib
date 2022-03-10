import { IBtnSizes } from '../shared/ButtonSizes';
import styled from 'styled-components';
import { FC, ReactElement } from 'react';
import BtnBase, { IStyledBtn } from '../shared/BtnBase';
import LinkColors from '../colors/LinkColors';

const StyledBtnLink = styled.button<IStyledBtn>`
    border-radius: ${props => props.borderRadius};
    color: ${LinkColors.Default.txt};
    background-color: transparent;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: ${props => props.fontSize};
    line-height: ${props => props.lineHeight};
    padding: ${props => props.padding};
    padding-left: 0;
    padding-right: 0;
    width: fit-content;
    height: ${props => `calc(${props.lineHeight} + 2*${props.paddingV})`};
    display: flex;
    flex-flow: row;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    border: none;

    :hover {
        color: ${LinkColors.Hover.txt};
        text-decoration: underline;
    }

    :active {
        color: ${LinkColors.Active.txt};
    }

    :disabled {
        color: ${LinkColors.Disabled.txt};
        pointer-events: none;
    }
`;

interface BtnLinkProps {
    children?: string;
    isAfter?: boolean;
    Icon?: ReactElement;
    Sizes: IBtnSizes;
    onClick: Function;
    isDisabled?: boolean;
}

const BtnLinkBase:FC<BtnLinkProps> = (props) => {

    return <BtnBase {...props} StyledButton={StyledBtnLink} />
}

export default BtnLinkBase;
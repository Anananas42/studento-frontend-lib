import { IBtnSizes } from '../shared/ButtonSizes';
import CTAColors from '../colors/CTAColors';
import styled from 'styled-components';
import { FC, ReactElement } from 'react';
import BtnBase, { IStyledBtn } from '../shared/BtnBase';

const StyledCTA = styled.button<IStyledBtn>`
    border-radius: ${props => props.borderRadius};
    color: ${CTAColors.Default.txt};
    background: linear-gradient(45deg, ${CTAColors.Default.bg1},
                                    ${CTAColors.Default.bg2});
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: ${props => props.fontSize};
    line-height: ${props => props.lineHeight};
    padding: ${props => props.padding};
    width: ${props => props.width ? props.width : "fit-content"};
    height: ${props => `calc(${props.lineHeight} + 2*${props.paddingV})`};
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    border: none;
    text-decoration: none;
    cursor: pointer;
    text-shadow: 2px 2px 8px ${CTAColors.txtShadow};
    box-shadow: 2px 2px 8px -2px ${CTAColors.shadow};

    :hover {
        color: ${CTAColors.Hover.txt};
        background: linear-gradient(45deg, ${CTAColors.Hover.bg1},
                                        ${CTAColors.Hover.bg2});
    }

    :active {
        color: ${CTAColors.Active.txt};
        background: linear-gradient(45deg, ${CTAColors.Active.bg1},
                                        ${CTAColors.Active.bg2});
    }

    :disabled {
        color: ${CTAColors.Disabled.txt};
        background: ${CTAColors.Disabled.bg};
        box-shadow: none;
        text-shadow: none;
        pointer-events: none;
    }
`;

interface CTAProps {
    children?: string;
    isAfter?: boolean;
    Icon?: ReactElement;
    Sizes: IBtnSizes;
    onClick: Function;
    isDisabled?: boolean;
    width?: string;
}

const BtnCTABase:FC<CTAProps> = (props) => {

    return <BtnBase {...props} StyledButton={StyledCTA} forceUppercase={false}/>
}

export default BtnCTABase;
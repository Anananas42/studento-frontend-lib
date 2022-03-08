import { IBtnSizes } from '../shared/ButtonSizes';
import ConfirmColors from '../colors/ConfirmColors';
import styled from 'styled-components';
import { FC, ReactElement } from 'react';
import BtnBase, { IStyledBtn } from '../shared/BtnBase';

const StyledConfirm = styled.button<IStyledBtn>`
    border-radius: ${props => props.borderRadius};
    color: ${ConfirmColors.Default.txt};
    background: linear-gradient(45deg, ${ConfirmColors.Default.bg1},
                                    ${ConfirmColors.Default.bg2});
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
    border: none;
    text-decoration: none;
    cursor: pointer;
    text-shadow: 2px 2px 8px ${ConfirmColors.txtShadow};
    box-shadow: 2px 4px 8px -2px ${ConfirmColors.shadow};

    :hover {
        color: ${ConfirmColors.Hover.txt};
        background: linear-gradient(45deg, ${ConfirmColors.Hover.bg1},
                                        ${ConfirmColors.Hover.bg2});
    }

    :active {
        color: ${ConfirmColors.Active.txt};
        background: linear-gradient(45deg, ${ConfirmColors.Active.bg1},
                                        ${ConfirmColors.Active.bg2});
    }

    :disabled {
        color: ${ConfirmColors.Disabled.txt};
        background: ${ConfirmColors.Disabled.bg};
        box-shadow: none;
        text-shadow: none;
        pointer-events: none;
    }
`;

interface ConfirmProps {
    children?: string;
    isAfter?: boolean;
    Icon?: ReactElement;
    Sizes: IBtnSizes;
    onClick: Function;
    isDisabled?: boolean;
}

const BtnConfirmBase:FC<ConfirmProps> = (props) => {

    return <BtnBase {...props} StyledButton={StyledConfirm} />
}

export default BtnConfirmBase;
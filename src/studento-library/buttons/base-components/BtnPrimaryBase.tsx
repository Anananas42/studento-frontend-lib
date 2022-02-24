import { IBtnSizes } from '../shared/ButtonSizes';
import PrimaryColors from '../colors/PrimaryColors';
import styled from 'styled-components';
import { FC, ReactElement } from 'react';
import BtnBase, { IStyledBtn } from '../shared/BtnBase';

const StyledPrimary = styled.button<IStyledBtn>`
    border-radius: ${props => props.borderRadius};
    color: ${PrimaryColors.Default.txt};
    background: linear-gradient(45deg, ${PrimaryColors.Default.bg1},
                                    ${PrimaryColors.Default.bg2});
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: ${props => props.fontSize};
    line-height: ${props => props.lineHeight};
    padding: ${props => props.padding};
    width: fit-content;
    display: flex;
    flex-flow: row;
    align-items: center;
    border: none;
    text-decoration: none;
    cursor: pointer;
    text-shadow: 2px 2px 8px ${PrimaryColors.txtShadow};
    box-shadow: 2px 4px 16px -2px ${PrimaryColors.shadow};

    :hover {
        color: ${PrimaryColors.Hover.txt};
        background: linear-gradient(45deg, ${PrimaryColors.Hover.bg1},
                                        ${PrimaryColors.Hover.bg2});
    }

    :active {
        color: ${PrimaryColors.Active.txt};
        background: linear-gradient(45deg, ${PrimaryColors.Active.bg1},
                                        ${PrimaryColors.Active.bg2});
    }

    :disabled {
        color: ${PrimaryColors.Disabled.txt};
        background: ${PrimaryColors.Disabled.bg};
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
}

const BtnPrimaryBase:FC<CTAProps> = (props) => {

    return <BtnBase {...props} StyledButton={StyledPrimary} />
}

export default BtnPrimaryBase;
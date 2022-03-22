import { IBtnSizes } from './ButtonSizes';
import { FC, ReactElement } from 'react';
import { borderRadius, useThemeContext } from '../../ThemeProvider';
import styled, { StyledComponent } from 'styled-components';

export interface IStyledBtn {
    borderRadius: string;
    padding: string;
    fontSize: string;
    lineHeight: string;
    paddingV: string;
    onClick: any;
    width?: string;
}

interface BtnProps {
    children?: string;
    isAfter?: boolean;
    Icon?: ReactElement;
    Sizes: IBtnSizes;
    onClick: Function;
    isDisabled?: boolean;
    StyledButton: StyledComponent<"button", any, IStyledBtn, never>;
    forceUppercase?: boolean;
    width?: string;
}

const StyledButtonBase = styled.div<{width?: string}>`
    width: ${props => props.width ? props.width : "auto"};
    white-space: nowrap;
`;

const BtnBase:FC<BtnProps> = (props) => {
    const { Icon, isAfter, Sizes, children, StyledButton, forceUppercase, ...rest } = props;
    const padH = Sizes.paddingH;
    const padV = Sizes.paddingV;

    const padding = Icon ? (children ? (isAfter ? `0 ${borderRadius} 0 ${padH}` : `0 ${padH} 0 ${borderRadius}`) : `0`) : `${padV} ${padH}`;
    const fontSize = Sizes.fontSize;
    const lineHeight = Sizes.lineHeight;

    return(
        <StyledButtonBase width={rest.width}>
            <StyledButton borderRadius={borderRadius} padding={padding} paddingV={padV} fontSize={fontSize} lineHeight={lineHeight} {...rest}>
                {Icon && !isAfter && Icon}{children && (forceUppercase ? children.toUpperCase() : children)}{Icon && isAfter && Icon}
            </StyledButton>
        </StyledButtonBase>
    )
}

export default BtnBase;
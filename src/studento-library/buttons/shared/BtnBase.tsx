import { IBtnSizes } from './ButtonSizes';
import { FC, ReactElement } from 'react';
import { useThemeContext } from '../../ThemeProvider';
import styled, { StyledComponent } from 'styled-components';

export interface IStyledBtn {
    borderRadius: string;
    padding: string;
    fontSize: string;
    lineHeight: string;
    paddingV: string;
    onClick: any;
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
}

const StyledButtonBase = styled.div`
    white-space: nowrap;
`;

const BtnBase:FC<BtnProps> = (props) => {
    const { borderRadius } = useThemeContext();
    const { Icon, isAfter, Sizes, children, onClick, isDisabled, StyledButton, forceUppercase } = props;
    const padH = Sizes.paddingH;
    const padV = Sizes.paddingV;

    const padding = Icon ? (children ? (isAfter ? `0 ${borderRadius} 0 ${padH}` : `0 ${padH} 0 ${borderRadius}`) : `0`) : `${padV} ${padH}`;
    const fontSize = Sizes.fontSize;
    const lineHeight = Sizes.lineHeight;

    return(
        <StyledButtonBase>
            <StyledButton borderRadius={borderRadius} padding={padding} paddingV={padV} fontSize={fontSize} lineHeight={lineHeight} disabled={isDisabled} onClick={onClick}>
                {Icon && !isAfter && Icon}{children && (forceUppercase ? children.toUpperCase() : children)}{Icon && isAfter && Icon}
            </StyledButton>
        </StyledButtonBase>
    )
}

export default BtnBase;
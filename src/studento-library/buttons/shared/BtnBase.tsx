import { IBtnSizes } from './ButtonSizes';
import { FC, ReactElement } from 'react';
import { useThemeContext } from '../../ThemeProvider';
import { StyledComponent } from 'styled-components';

export interface IStyledBtn {
    borderRadius: string;
    padding: string;
    fontSize: string;
    lineHeight: string;
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

const BtnBase:FC<BtnProps> = (props) => {
    const { borderRadius } = useThemeContext();
    const { Icon, isAfter, Sizes, children, onClick, isDisabled, StyledButton, forceUppercase } = props;
    const padH = Sizes.paddingH;
    const padV = Sizes.paddingV;

    const padding = Icon ? (children ? (isAfter ? `0 ${borderRadius} 0 ${padH}` : `0 ${padH} 0 ${borderRadius}`) : `0`) : `${padV} ${padH}`;
    const fontSize = Sizes.fontSize;
    const lineHeight = Sizes.lineHeight;

    return(
        <StyledButton borderRadius={borderRadius} padding={padding} fontSize={fontSize} lineHeight={lineHeight} disabled={isDisabled} onClick={onClick}>
            {Icon && !isAfter && Icon}{children && (forceUppercase ? children.toUpperCase() : children)}{Icon && isAfter && Icon}
        </StyledButton>
    )
}

export default BtnBase;
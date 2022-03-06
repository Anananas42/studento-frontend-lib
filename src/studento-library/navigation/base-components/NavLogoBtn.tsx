import { FC } from "react";
import styled from "styled-components";
import TextColors from "../../buttons/colors/TextColors";
import logo from '../../media/logo.png';
import { useThemeContext } from "../../ThemeProvider";

interface IStyledProps {
    fill: string;
    borderRadius: string;
}

const StyledNavLogoBtn = styled.div<IStyledProps>`
    display: flex;
    align-items: center;
    border-radius: ${props => props.borderRadius};
    height: fit-content;
    padding: 4px 24px 4px 8px;
    margin-right: 80px;
    cursor: pointer;

    img {
        object-fit: contain;
        pointer-events: none;
        padding-bottom: 4px;
    }

    span {
        color: ${props => props.fill};
        font-size: 24px;
        user-select: none;
    }

    :hover {
        background-color: ${TextColors.Hover.bg};
    }

    :active {
        background-color: ${TextColors.Active.bg};
    }

`;

interface INavLogoBtn {
    dashboardUrl?: string;
}

const NavLogoBtn:FC<INavLogoBtn> = (props) => {
    const { dashboardUrl } = props;
    const { colors, borderRadius } = useThemeContext();

    return (
        <StyledNavLogoBtn fill={colors.fill} borderRadius={borderRadius}>
            <img alt={"Studento logo"} src={logo} />
            <span>Studento</span>
        </StyledNavLogoBtn>
    )
}

export default NavLogoBtn;
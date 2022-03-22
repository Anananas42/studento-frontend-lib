import { FC } from "react";
import styled from "styled-components";
import { BtnTextL } from "../../buttons/components/BtnText";
import { borderRadius, useThemeContext } from "../../ThemeProvider";
import StyledLink from "../../utilities/StyledLink";

interface IStyledNavLoginBtn {
    bg: string;
    fill: string;
    borderRadius: string;
}

const StyledNavLoginBtn = styled.div<IStyledNavLoginBtn>`
    display: flex;
    align-items: center;
    user-select: none;
    color: ${props => props.fill};
    background-color: ${props => props.bg};
    border-radius: 0 0 16px 16px;
    padding: 8px 16px;
`;

const NavLoginBtn:FC = () => {
    const { colors, languageMap } = useThemeContext();

    return (
        <StyledLink to={'/login'}>
            <StyledNavLoginBtn bg={colors.primary} fill={colors.fill} borderRadius={borderRadius}>
                <BtnTextL icon={"login"} isAfter={true} onClick={() => 0}>{languageMap.Generic.login}</BtnTextL>
            </StyledNavLoginBtn>
        </StyledLink>
    )
}

export default NavLoginBtn;
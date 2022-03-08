import { FC } from "react";
import styled from "styled-components";
import { BtnTextL } from "../../buttons/components/BtnText";
import { useThemeContext } from "../../ThemeProvider";

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
    padding: 0px 16px;
`;

const NavLoginBtn:FC = () => {
    const { colors, borderRadius, languageMap } = useThemeContext();

    return (
        <StyledNavLoginBtn bg={colors.primary} fill={colors.fill} borderRadius={borderRadius}>
            <BtnTextL icon={"login"} isAfter={true} onClick={() => 0}>{languageMap.Generic.login}</BtnTextL>
        </StyledNavLoginBtn>
    )
}

export default NavLoginBtn;
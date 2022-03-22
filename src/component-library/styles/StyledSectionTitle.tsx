import { FC } from "react";
import styled from "styled-components";
import { sectionTitlePadding, sectionTitleSize, useThemeContext } from "../ThemeProvider";

const StyledTitle = styled.div<{fill: string}>`
    font-size: ${sectionTitleSize};
    color: ${props => props.fill};
    padding: ${sectionTitlePadding};
    text-align: center;
`;

const StyledSectionTitle:FC = (props) => {
    const { colors } = useThemeContext();

    return (
        <StyledTitle fill={colors.fill}>
            {props.children}
        </StyledTitle>
    );
};

export default StyledSectionTitle;
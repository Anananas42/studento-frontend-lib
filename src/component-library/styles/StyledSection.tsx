import { FC } from "react";
import styled from "styled-components";
import { sectionPadding, sectionRadius, useThemeContext } from "../ThemeProvider";

interface IStyleProps {
    sectionShadow: string;
}

const StyledSectionComponent = styled.div<IStyleProps>`
    position: relative;
    background-color: #fff;
    box-shadow: ${props => props.sectionShadow};
    border-radius: ${sectionRadius};
    padding: ${sectionPadding};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
`;

const StyledSection:FC = (props) => {
    const { colors } = useThemeContext();

    return (
        <StyledSectionComponent sectionShadow={colors.sectionShadow}>
            {props.children}
        </StyledSectionComponent>
    )
}

export default StyledSection;
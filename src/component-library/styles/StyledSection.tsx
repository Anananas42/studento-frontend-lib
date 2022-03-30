import { FC } from "react";
import styled from "styled-components";
import { sectionPadding, sectionRadius, useThemeContext } from "../ThemeProvider";

interface IStyleProps {
    sectionShadow: string;
    isStretched?: boolean;
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
    min-height: ${props => props.isStretched ? "max(100%, 300px)" : "fit-content"};
    ${props => props.isStretched ? "max-height: max(100%, 300px); overflow: hidden; overflow-y: auto;" : ""}
`;

interface ISectionProps {
    isStretched?: boolean;
}

const StyledSection:FC<ISectionProps> = (props) => {
    const { colors } = useThemeContext();

    return (
        <StyledSectionComponent sectionShadow={colors.sectionShadow} isStretched={props.isStretched}>
            {props.children}
        </StyledSectionComponent>
    )
}

export default StyledSection;
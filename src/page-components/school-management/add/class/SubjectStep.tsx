import { FC } from "react";
import styled from "styled-components";
import { useThemeContext } from "../../../../component-library/ThemeProvider";

interface IStyleProps {
    fill: string;
    sectionPadding: string;
    sectionShadow: string;
    sectionRadius: string;
    borderRadius: string;
}

const StyledSubjectStep = styled.div<IStyleProps>`
    color: ${props => props.fill};
    background-color: #fff;
    box-shadow: ${props => props.sectionShadow};
    border-radius: ${props => props.sectionRadius};
    padding: ${props => props.sectionPadding};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    gap: 16px;
`;

const StyledTitle = styled.div<IStyleProps>`
    font-size: 32px;
    color: ${props => props.fill};
    padding-bottom: 16px;
    text-align: center;
`;

interface ISubjectStepProps {
    title: string;
    ButtonRow: JSX.Element;
}

const SubjectStep:FC<ISubjectStepProps> = (props) => {
    const { title, ButtonRow } = props;
    const { colors, borderRadius, sectionPadding, sectionRadius } = useThemeContext();

    const styleProps = {fill: colors.fill, sectionPadding, sectionRadius, sectionShadow: colors.sectionShadow, borderRadius};

    return (
        <StyledSubjectStep {...styleProps}>
            <StyledTitle {...styleProps}>
                {`${title} - subjects`}
            </StyledTitle>
            
            {ButtonRow}
        </StyledSubjectStep>
    );
}

export default SubjectStep;
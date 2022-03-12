import { FC } from "react";
import styled from "styled-components";
import { useThemeContext } from "../../../../component-library/ThemeProvider";
import DetailForm from "./DetailForm";

interface IStyleProps {
    fill: string;
    sectionPadding: string;
    sectionShadow: string;
    sectionRadius: string;
    borderRadius: string;
}

const StyledDetailStep = styled.div<IStyleProps>`
    color: ${props => props.fill};
    background-color: #fff;
    box-shadow: ${props => props.sectionShadow};
    border-radius: ${props => props.sectionRadius};
    padding: ${props => props.sectionPadding};
`;

const StyledTitle = styled.div<IStyleProps>`
    font-size: 32px;
    color: ${props => props.fill};
    padding-bottom: 8px;
    text-align: center;
`;

interface IDetailStepProps {
    title: string;
}

const DetailStep:FC<IDetailStepProps> = (props) => {
    const { title } = props;
    const { colors, borderRadius, sectionPadding, sectionRadius } = useThemeContext();

    const styleProps = {fill: colors.fill, sectionPadding, sectionRadius, sectionShadow: colors.sectionShadow, borderRadius};

    return (
        <>
            <StyledTitle {...styleProps}>
                {`${title} - details`}
            </StyledTitle>
            <StyledDetailStep {...styleProps}>
                <DetailForm />
            </StyledDetailStep>
        </>
    );
}

export default DetailStep;
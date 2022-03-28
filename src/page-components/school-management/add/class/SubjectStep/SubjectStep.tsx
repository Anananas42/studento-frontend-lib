import React, { FC, useState } from "react";
import styled from "styled-components";
import { BtnPrimaryS, BtnSecondaryS, BtnTertiaryS } from "../../../../../component-library/buttons/components";
import { DropdownFormBase, DropdownSearchFormBase, SingleChoiceFormBase, TextFormBase, ToggleRow } from "../../../../../component-library/forms/base-components";
import DropdownGroupedSearchFormBase from "../../../../../component-library/forms/base-components/dropdowns/DropdownGroupedSearchFormBase";
import { borderRadius, useThemeContext } from "../../../../../component-library/ThemeProvider";
import { IconS } from "../../../../../component-library/utilities/Icon";
import ProgressStep, { IProgressStepProps } from "../../../../../template-library/ProgressStep";
import TransferList, { IItem } from "../../../../../template-library/TransferList";
import SubjectDetail from "./SubjectDetail";
import useSubjectStepReducer from "./subjectReducer";

interface IStyleProps {
    fill: string;
    fillDisabled: string;
    currentBg: string;
    completeBg: string;
    skipBg: string;
    borderRadius: string;
    hasMultiple: boolean;
    hasGroups: boolean;
}

const StyledSubjectStep = styled.div`
    display: flex;
    min-height: calc(100% - 127px);
    gap: 32px;
`;

const StyledSubjectList = styled.div<IStyleProps>`
    display: flex;
    flex-direction: column;
    min-height: 100%;
    width: 36ch;
    margin-top: 1px;

    * {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        user-select: none;
        margin-top: -1px;
    }

    .current {
        background-color: ${props => props.currentBg};
    }

    .skipped {
        background-color: ${props => props.skipBg};
    }

    .completed {
        background-color: ${props => props.completeBg};
        
    }
`;

const StyledSubjectRow = styled.div<IStyleProps>`
    font-size: 1.8rem;
    font-weight: 700;
    color: ${props => props.fill};
    border: 1px solid ${props => props.fill};
    padding: 8px;

`;

const StyledDisciplineRow = styled.div<IStyleProps>`
    font-size: 1.6rem;
    color: ${props => props.fill};
    border: 1px solid ${props => props.fill};
    width: calc(100% - 3ch);
    padding: 8px;
    align-self: flex-end;
`;

const dummySubjectTypes = [
    "Mathematics",
    "Czech Language",
    "French Language",
    "Physics",
]

const dummyItems = [
    {id: 5, name: "xd"},
]

const dummyTeachers = {
    123: "Jan Amos Komensky"
};

const dummyOptionGroups = {
    Cz: {
        title: "Czech Language",
        options: {
            lit: "Cz - Literature",
            gram: "Cz - Grammar",
        }
    },
    Fr: {
        title: "French Language",
        options: {
            lit: "Fr - Literature",
            gram: "Fr - Grammar",
            spch: "Fr - Speech",
        }
    }

};

interface ISubjectStepProps extends IProgressStepProps {
    subjectTypes: Array<IItem>;
}

const SubjectStep:FC<ISubjectStepProps> = (props) => {
    const { title, subjectTypes, ...rest } = props;
    const { colors } = useThemeContext();

    const [state, dispatch] = useSubjectStepReducer();

    const styleProps = { fill: colors.fill, fillDisabled: colors.fillDisabled, currentBg: colors.primary, completeBg: colors.System.Success.light, skipBg: colors.fillDisabled,
         borderRadius, hasMultiple: state.hasMultiple, hasGroups: state.hasGroups };

    return (
        <ProgressStep title={title + " - subjects"} {...rest}>
            <StyledSubjectStep>
                <StyledSubjectList {...styleProps}>
                    {dummySubjectTypes.map(s => {
                        return (
                        <React.Fragment key={s}>
                            <StyledSubjectRow {...styleProps} className={""}>
                                {s}
                            </StyledSubjectRow>
                            {state.disciplines.map(d => {
                                return (
                                <StyledDisciplineRow key={d} {...styleProps}>
                                    {d}
                                </StyledDisciplineRow>
                                )
                            })}
                        </React.Fragment>
                        )
                    })}
                </StyledSubjectList>
                <SubjectDetail state={state} dispatch={dispatch}/>
            </StyledSubjectStep>
        </ProgressStep>
    );
}

export default SubjectStep;
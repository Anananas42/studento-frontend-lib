import React, { FC } from "react";
import styled from "styled-components";
import { borderRadius, useThemeContext } from "../../../../../component-library/ThemeProvider";
import { IAddClassStepProps } from "../../../../../pages/admin/add/AddClass";
import ProgressStep from "../../../../../template-library/ProgressStep";
import SubjectDetail from "./SubjectDetail";

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
    max-height: 100%;
    min-height: 100%;
    gap: 16px;
    margin-top: -8px;
`;

const StyledSubjectList = styled.div<IStyleProps>`
    display: flex;
    flex-direction: column;
    min-height: 200px;
    width: 36ch;
    padding-top: 1px;
    overflow-y: auto;
    padding: 8px;

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
    min-height: 4rem;
    font-weight: 700;
    color: ${props => props.fill};
    border: 1px solid ${props => props.fill};
    padding: 8px;
    cursor: pointer;
`;

const StyledDisciplineRow = styled.div<IStyleProps>`
    font-size: 1.6rem;
    min-height: 4rem;
    color: ${props => props.fill};
    border: 1px solid ${props => props.fill};
    width: calc(100% - 3ch);
    padding: 8px;
    align-self: flex-end;
    cursor: pointer;
`;

const SubjectStep:FC<IAddClassStepProps> = (props) => {
    const { title, state, dispatch, ...rest } = props;
    const { colors } = useThemeContext();

    if (state.displayedSubject !== 0 && !state.displayedSubject) return <ProgressStep {...{...props, title: `${props.title} - subjects`}}><span style={{fontWeight: "500", fontSize: "1.8rem", padding: "64px"}}>No subject types added.</span></ProgressStep>;

    const subject = state.subjects[state.displayedSubject];
    const { hasMultiple, hasGroups } = subject;

    const styleProps = { fill: colors.fill, fillDisabled: colors.fillDisabled, currentBg: colors.primary, completeBg: colors.System.Success.light, skipBg: colors.fillDisabled,
         borderRadius, hasMultiple, hasGroups };

    return (
        <ProgressStep title={title + " - subjects"} isStretched={true} {...rest}>
            <StyledSubjectStep>
                <StyledSubjectList {...styleProps}>
                    {state.subjects.map((s, id) => {
                        return (
                        <React.Fragment key={s.code}>
                            <StyledSubjectRow {...styleProps} className={state.displayedSubject === id && !state.discipline ? "current" : ""}
                                onClick={() => dispatch({type: "SET_CURRENT_SUBJECT", payload: [id, ""]})}>
                                {s.title}
                            </StyledSubjectRow>
                            {s.disciplines.map(d => {
                                return (
                                <StyledDisciplineRow key={d} {...styleProps} className={state.displayedSubject === id && state.discipline === d ? "current" : ""}
                                    onClick={() => dispatch({type: "SET_CURRENT_SUBJECT", payload: [id, d]})}>
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
import { stat } from "fs";
import { FC } from "react";
import styled from "styled-components";
import TextColors from "../../../../../component-library/buttons/colors/TextColors";
import { BtnPrimaryS, BtnSecondaryS, BtnTertiaryS } from "../../../../../component-library/buttons/components";
import { DropdownFormBase, DropdownSearchFormBase, SingleChoiceFormBase, TextFormBase, ToggleRow } from "../../../../../component-library/forms/base-components";
import DropdownGroupedSearchFormBase from "../../../../../component-library/forms/base-components/dropdowns/DropdownGroupedSearchFormBase";
import { borderRadius, useThemeContext } from "../../../../../component-library/ThemeProvider";
import { IconS } from "../../../../../component-library/utilities/Icon";
import TransferList, { IItem } from "../../../../../template-library/TransferList";
import { IAddClassReducerState, AddClassReducerActionType } from "../addClassReducer";

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

const StyledSubjectDetail = styled.div<IStyleProps>`
    display: flex;
    flex-direction: column;
    min-height: 100%;
    max-height: 100%;
    min-width: 765px;
    gap: 8px;
    overflow-y: auto;
    padding: 8px;
`;

const StyledSubjectTitle = styled.div<IStyleProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2.8rem;
    color: ${props => props.fill};
    padding-bottom: 8px;
`;

const StyledSubjectForms = styled.div<IStyleProps>`
    display: flex;
    flex-direction: column;
    gap: 16px;

    > div {
        display: flex;
        flex-direction: row;
        gap: 16px;
    }

    > div:first-child {
        
    }

    > div:last-child {
        > div {
            max-width: 48ch;
        }
    }
    
`;

const StyledGroupListHeader = styled.div<IStyleProps>`
    display: flex;
    gap: 16px;

    > div:first-child {
        width: 44ch;
    }

    > div:nth-of-type(2) {
        min-width: 16ch;
        max-width: 16ch;
    }

    > div:last-child {
        width: fit-content;
    }

    + div:last-child {
        max-height: max(calc(100% - 296px), 220px);
    }

`;

const StyledSubjectButtons = styled.div`
    display: flex;
    gap: 8px;
`;

const StyledDisciplineList = styled.div<IStyleProps>`
    display: flex;
    flex-direction: column;
    padding-top: 8px;

    > .add-row {
        display: flex;
        gap: 8px;
        align-items: center;

        > div:first-child {
            width: 40ch;
        }

        button {
            margin-top: 0.8rem;
        }
    }

    > .disciplines {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        max-width: 120ch;
    }
`;

const StyledDiscipline = styled.div<IStyleProps>`
    color: ${props => props.fill};
    display: flex;
    align-items: center;
    padding-left: 8px;
    border-radius: ${props => props.borderRadius};
    user-select: none;
    background-color: ${TextColors.Hover.bg};
    max-width: 100%;
    

    > span {
        font-size: 2rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: calc(100% - 40px);
    }

    :hover {
        background-color: ${TextColors.Active.bg};
        cursor: pointer;

        > div {
            color: ${props => props.fill};
        }
    }

    :active {
        background-color: ${TextColors.Hover.bg};
    }

    > div {
        padding-bottom: 2px;
        color: ${TextColors.Active.bg};
    }
`;

interface IProps {
    state: IAddClassReducerState;
    dispatch: React.Dispatch<AddClassReducerActionType>;
}

const SubjectDetail:FC<IProps> = (props) => {
    const { state, dispatch } = props;
    const { colors } = useThemeContext();

    if (state.displayedSubject !== 0 && !state.displayedSubject) return <></>;

    const subject = state.subjects[state.displayedSubject];
    const { hasMultiple, hasGroups } = subject;

    const styleProps = { fill: colors.fill, fillDisabled: colors.fillDisabled, currentBg: colors.primary, completeBg: colors.System.Success.light, skipBg: colors.fillDisabled,
        borderRadius, hasMultiple, hasGroups };

    const addDiscipline = (e?: React.KeyboardEvent<any>) => {
        if (e !== undefined && e.key !== 'Enter') return;

        if (!subject.disciplines.includes(state.discipline)) dispatch({type: "ADD_DISCIPLINE" });
    }

    const setGroupPattern = (pattern: string) => {
        dispatch({type: "SET_GROUP_PATTERN", payload: state.groupPatterns[pattern]});
    }

    const groupAmount = state.discipline ? subject.disciplineGroupAmounts[state.discipline] : subject.groupAmount;
    const currGroups = state.discipline ? subject.disciplineGroupPatterns[state.discipline].groups : (subject.groupPattern ? subject.groupPattern.groups : []);
    const studentsInOtherGroups = currGroups.slice(0, groupAmount).filter((i, id) => id != state.group).flat();

    return (
        <StyledSubjectDetail {...styleProps}>
            <StyledSubjectTitle {...styleProps}>
                {state.discipline ? `${subject.code} - ${state.discipline}` : subject.title}
                <StyledSubjectButtons>
                    {(state.displayedSubject > 0 || state.discipline) &&
                     <BtnTertiaryS onClick={() => dispatch({type: "GOTO_PREV"})} icon={"arrow_backward"}>Previous subject</BtnTertiaryS>}
                    {!(state.displayedSubject === state.subjects.length - 1 && subject.disciplines.indexOf(state.discipline) === subject.disciplines.length - 1) &&
                     <BtnPrimaryS onClick={() => dispatch({type: "GOTO_NEXT"})} icon={"arrow_forward"} isAfter={true}>Next subject</BtnPrimaryS>}
                </StyledSubjectButtons>
            </StyledSubjectTitle>
                
                <StyledSubjectForms {...styleProps}>
                    <div>
                        {!state.discipline && <ToggleRow value={subject.hasMultiple} setValue={(value: boolean) => dispatch({type: "SET_HAS_MULTIPLE", payload: value})} label={"Has multiple disciplines"}/>}
                        {(state.discipline || !hasMultiple) && <ToggleRow value={state.discipline ? Boolean(subject.disciplinesHasGroups[state.discipline]) : hasGroups} setValue={(value: boolean) => dispatch({type: "SET_HAS_GROUPS", payload: value})} label={"Has groups"} />}
                    </div>
                    {(state.discipline || !hasMultiple) &&
                        <div>
                            <DropdownSearchFormBase value={`${subject.teacher}`} setValue={(value: string) => dispatch({type: "SET_TEACHER", payload: value})} label={"Teacher"} options={subject.teachers} />
                        </div>
                    }
                </StyledSubjectForms>
            {((state.discipline && subject.disciplinesHasGroups[state.discipline]) || (!hasMultiple && hasGroups)) &&
                <>
                    <StyledGroupListHeader {...styleProps}>
                        <DropdownGroupedSearchFormBase value={subject.groupPattern ? subject.groupPattern.title : ""} setValue={setGroupPattern} label={"Group Pattern"} optionGroups={state.groupPatternOptions} isOptional={true}/>
                        <DropdownFormBase value={`${groupAmount}`} setValue={(value: string) => dispatch({type: "SET_GROUP_AMOUNT", payload: parseInt(value)})} label={"# Groups"} options={{1: "1", 2: "2", 3: "3", 4: "4"}} />
                        {groupAmount > 1 && <SingleChoiceFormBase value={`${state.group+1}`} setValue={(value: string) => dispatch({type: "SET_GROUP", payload: parseInt(value)-1})} label={"Group"} options={Object.fromEntries(Array.from(Array(groupAmount), (e, i) => [i+1, `${i+1}`]))}/>}
                    </StyledGroupListHeader>   
                    <TransferList availableItems={state.classStudents} chosenItems={(state.discipline ? subject.disciplineGroupPatterns[state.discipline].groups[state.group] : subject.groupPattern.groups[state.group]) || []} setChosenItems={(value: Array<IItem>) => dispatch({ type: "SET_GROUP_STUDENTS", payload: value })}
                     excludedItems={studentsInOtherGroups} search={state.studentSearch} setSearch={(value: string) => dispatch({type: "SET_STUDENT_SEARCH", payload: value})} />
                </>
            }
            {(!state.discipline && hasMultiple) &&
                <>
                    <StyledDisciplineList {...styleProps}>
                        <div className={"add-row"}>
                            <TextFormBase label={"New discipline"} value={state.disciplineInput} setValue={(value: string) => dispatch({type: "SET_DISCIPLINE_INPUT", payload: value})} placeholder={""} onKeyDown={(e) => addDiscipline(e)}/>
                            <BtnSecondaryS onClick={() => addDiscipline()} icon={"add"}></BtnSecondaryS>
                        </div>
                        <div className={"disciplines"}>
                            {subject.disciplines.map(d => {
                                return (
                                    <StyledDiscipline {...styleProps} key={d} onClick={() => dispatch({type: "REMOVE_DISCIPLINE", payload: d})}>
                                        <span>{d}</span>
                                        <IconS>cancel</IconS>
                                    </StyledDiscipline>
                                )
                            })}

                        </div>
                    </StyledDisciplineList>
                </>
            }
            
        </StyledSubjectDetail>
    )
}

export default SubjectDetail;
import { FC } from "react";
import styled from "styled-components";
import TextColors from "../../../../../component-library/buttons/colors/TextColors";
import { BtnPrimaryS, BtnSecondaryS, BtnTertiaryS } from "../../../../../component-library/buttons/components";
import { DropdownFormBase, DropdownSearchFormBase, SingleChoiceFormBase, TextFormBase, ToggleRow } from "../../../../../component-library/forms/base-components";
import DropdownGroupedSearchFormBase from "../../../../../component-library/forms/base-components/dropdowns/DropdownGroupedSearchFormBase";
import { borderRadius, useThemeContext } from "../../../../../component-library/ThemeProvider";
import { IconS } from "../../../../../component-library/utilities/Icon";
import TransferList, { IItem } from "../../../../../template-library/TransferList";
import { IAddSubjectReducerState, AddSubjectReducerActionType } from "../addSubjectReducer";

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
    state: IAddSubjectReducerState;
    dispatch: React.Dispatch<AddSubjectReducerActionType>;
}

const SubjectDetail:FC<IProps> = (props) => {
    const { state, dispatch } = props;
    const { colors } = useThemeContext();

    const styleProps = { fill: colors.fill, fillDisabled: colors.fillDisabled, currentBg: colors.primary, completeBg: colors.System.Success.light, skipBg: colors.fillDisabled,
        borderRadius, hasMultiple: state.hasMultiple, hasGroups: state.hasGroups };

    const addDiscipline = (e?: React.KeyboardEvent<any>) => {
        if (e !== undefined && e.key !== 'Enter') return;

        if (!state.disciplines.includes(state.discipline)) dispatch({type: "ADD_DISCIPLINE" });
    }

    const setReferencedGroupPattern = (name: string) => {
        dispatch({type: "SET_REFERENCED_GROUP_PATTERN", payload: name});
    }

    const groupPattern = state.discipline ? state.disciplineGroupPatterns[state.discipline] : state.groupPattern;
    const isOwnGroup = state.discipline ? state.disciplinesHasOwnGroupPatterns[state.discipline] : state.hasOwnGroupPattern;
    const teacher = state.discipline ? state.disciplineTeachers[state.discipline] : state.teacher;

    const groupAmount = state.discipline ? state.disciplineGroupAmounts[state.discipline] : state.groupAmount;
    const currGroups = state.discipline ? state.disciplineGroupPatterns[state.discipline].groups : (state.groupPattern ? state.groupPattern.groups : []);
    const studentsInOtherGroups = currGroups ? currGroups.slice(0, groupAmount).filter((i, id) => id !== state.group).flat() : [];

    return (
        <StyledSubjectDetail {...styleProps}>
            <StyledSubjectTitle {...styleProps}>
                {state.discipline ? `${state.code} - ${state.discipline}` : state.title}
                <StyledSubjectButtons>
                    {state.discipline &&
                     <BtnTertiaryS onClick={() => dispatch({type: "GOTO_PREV_DISCIPLINE"})} icon={"arrow_backward"}>Previous subject</BtnTertiaryS>}
                    {!(state.disciplines.indexOf(state.discipline) === state.disciplines.length - 1) &&
                     <BtnPrimaryS onClick={() => dispatch({type: "GOTO_NEXT_DISCIPLINE"})} icon={"arrow_forward"} isAfter={true}>Next subject</BtnPrimaryS>}
                </StyledSubjectButtons>
            </StyledSubjectTitle>
                
                <StyledSubjectForms {...styleProps}>
                    <div>
                        {!state.discipline && <ToggleRow value={state.hasMultiple} setValue={(value: boolean) => dispatch({type: "SET_HAS_MULTIPLE", payload: value})} label={"Has multiple disciplines"}/>}
                        {(state.discipline || !state.hasMultiple) && <ToggleRow value={state.discipline ? Boolean(state.disciplinesHasGroups[state.discipline]) : state.hasGroups} setValue={(value: boolean) => dispatch({type: "SET_HAS_GROUPS", payload: value})} label={"Has groups"} />}
                        {((state.discipline && state.disciplinesHasGroups[state.discipline]) || ((!state.discipline && !state.hasMultiple && state.hasGroups))) &&
                         <ToggleRow value={isOwnGroup} setValue={(value: boolean) => dispatch({type: "SET_HAS_OWN_GROUP_PATTERN", payload: value})} label={"Has own group pattern"} />}
                    </div>
                    {(state.discipline || !state.hasMultiple) &&
                        <div>
                            <DropdownSearchFormBase value={teacher} setValue={(value: string) => dispatch({type: "SET_TEACHER", payload: value})} label={"Teacher"} options={state.teachers} />
                        </div>
                    }
                </StyledSubjectForms>
            {((state.discipline && state.disciplinesHasGroups[state.discipline]) || (!state.hasMultiple && state.hasGroups)) &&
                <>
                    <StyledGroupListHeader {...styleProps}>
                        {!isOwnGroup && <DropdownGroupedSearchFormBase value={state.referencedGroupPatterns[state.discipline ? state.discipline : state.title]} setValue={setReferencedGroupPattern} label={"Group Pattern"} optionGroups={state.groupPatternOptions} width={"22ch"}/>}
                        {isOwnGroup && <DropdownFormBase value={`${groupAmount}`} setValue={(value: string) => dispatch({type: "SET_GROUP_AMOUNT", payload: parseInt(value)})} label={"# Groups"} options={{1: "1", 2: "2", 3: "3", 4: "4"}} />}
                        {(isOwnGroup && groupAmount > 1) && <SingleChoiceFormBase value={`${state.group+1}`} setValue={(value: string) => dispatch({type: "SET_GROUP", payload: parseInt(value)-1})} label={"Group"} options={Object.fromEntries(Array.from(Array(groupAmount), (e, i) => [i+1, `${i+1}`]))}/>}
                    </StyledGroupListHeader>   
                    {isOwnGroup && <TransferList availableItems={state.studentOptions} chosenItems={(state.discipline ? state.disciplineGroupPatterns[state.discipline].groups[state.group] : state.groupPattern.groups[state.group]) || []} setChosenItems={(value: Array<IItem>) => dispatch({ type: "SET_GROUP_STUDENTS", payload: value })}
                     excludedItems={studentsInOtherGroups} search={state.studentSearch} setSearch={(value: string) => dispatch({type: "SET_STUDENT_SEARCH", payload: value})} />}
                </>
            }
            {(!state.discipline && state.hasMultiple) &&
                <>
                    <StyledDisciplineList {...styleProps}>
                        <div className={"add-row"}>
                            <TextFormBase label={"New discipline"} value={state.disciplineInput} setValue={(value: string) => dispatch({type: "SET_DISCIPLINE_INPUT", payload: value})} placeholder={""} onKeyDown={(e) => addDiscipline(e)}/>
                            <BtnSecondaryS onClick={() => addDiscipline()} icon={"add"}></BtnSecondaryS>
                        </div>
                        <div className={"disciplines"}>
                            {state.disciplines.map(d => {
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
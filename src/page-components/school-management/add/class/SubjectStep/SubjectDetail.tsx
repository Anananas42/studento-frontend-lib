import { FC, SetStateAction } from "react";
import styled from "styled-components";
import TextColors from "../../../../../component-library/buttons/colors/TextColors";
import { BtnPrimaryS, BtnSecondaryS, BtnTertiaryS } from "../../../../../component-library/buttons/components";
import { DropdownFormBase, DropdownSearchFormBase, SingleChoiceFormBase, TextFormBase, ToggleRow } from "../../../../../component-library/forms/base-components";
import DropdownGroupedSearchFormBase from "../../../../../component-library/forms/base-components/dropdowns/DropdownGroupedSearchFormBase";
import { borderRadius, useThemeContext } from "../../../../../component-library/ThemeProvider";
import { IconS } from "../../../../../component-library/utilities/Icon";
import TransferList, { IItem } from "../../../../../template-library/TransferList";
import { ISubjectReducerState, SubjectReducerActionType } from "./subjectReducer";

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
    min-width: 750px;
    gap: 8px;
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

    > span {
        font-size: 2rem;
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
    state: ISubjectReducerState;
    dispatch: React.Dispatch<SubjectReducerActionType>;
}

const SubjectDetail:FC<IProps> = (props) => {
    const { state, dispatch } = props;
    const { hasMultiple, hasGroups } = state;
    const { colors } = useThemeContext();

    const styleProps = { fill: colors.fill, fillDisabled: colors.fillDisabled, currentBg: colors.primary, completeBg: colors.System.Success.light, skipBg: colors.fillDisabled,
        borderRadius, hasMultiple, hasGroups };

    const addDiscipline = (e?: React.KeyboardEvent<any>) => {
        if (e !== undefined && e.key !== 'Enter') return;

        if (!state.disciplines.includes(state.discipline)) dispatch({type: "ADD_DISCIPLINE" });
    }

    const setGroupPattern = (pattern: string) => {
        dispatch({type: "SET_GROUP_PATTERN", payload: state.groupPatterns[pattern]});
    }

    return (
        <StyledSubjectDetail {...styleProps}>
            <StyledSubjectTitle {...styleProps}>
                {state.subjectTitle}
                <StyledSubjectButtons>
                    <BtnTertiaryS onClick={() => 0} icon={"arrow_backward"}>Previous subject</BtnTertiaryS>
                    <BtnPrimaryS onClick={() => 0} icon={"arrow_forward"} isAfter={true}>Next subject</BtnPrimaryS>
                </StyledSubjectButtons>
            </StyledSubjectTitle>
                
                <StyledSubjectForms {...styleProps}>
                    <div>
                        <ToggleRow value={state.hasMultiple} setValue={(value: boolean) => dispatch({type: "SET_HAS_MULTIPLE", payload: value})} label={"Has multiple disciplines"}/>
                        {!hasMultiple && <ToggleRow value={hasGroups} setValue={(value: boolean) => dispatch({type: "SET_HAS_GROUPS", payload: value})} label={"Has groups"} isDisabled={hasMultiple}/>}
                    </div>
                    {!hasMultiple &&
                        <div>
                            <DropdownSearchFormBase value={state.teacher} setValue={(value: string) => dispatch({type: "SET_TEACHER", payload: value})} label={"Teacher"} options={state.teacherOptions} />
                        </div>
                    }
                </StyledSubjectForms>
            {!hasMultiple && hasGroups &&
                <>
                    <StyledGroupListHeader {...styleProps}>
                        <DropdownGroupedSearchFormBase value={state.groupPattern ? state.groupPattern.title : ""} setValue={setGroupPattern} label={"Group Pattern"} optionGroups={state.groupPatternOptions} isOptional={true}/>
                        <DropdownFormBase value={`${state.groupAmount}`} setValue={(value: string) => dispatch({type: "SET_GROUP_AMOUNT", payload: parseInt(value)})} label={"# Groups"} options={{1: "1", 2: "2", 3: "3", 4: "4"}} />
                        {state.groupAmount > 1 && <SingleChoiceFormBase value={`${state.group}`} setValue={(value: string) => dispatch({type: "SET_GROUP", payload: parseInt(value)})} label={"Group"} options={Object.fromEntries(Array.from(Array(state.groupAmount), (e, i) => [i+1, `${i+1}`]))}/>}
                    </StyledGroupListHeader>   
                    <TransferList availableItems={state.itemOptions} chosenItems={state.chosenItems} setChosenItems={(value: Array<IItem>) => dispatch({ type: "SET_CHOSEN_ITEMS", payload: value })}
                     search={state.itemSearch} setSearch={(value: string) => dispatch({type: "SET_ITEM_SEARCH", payload: value})} height={"100%"}/>
                </>
            }
            {hasMultiple &&
                <>
                    <StyledDisciplineList {...styleProps}>
                        <div className={"add-row"}>
                            <TextFormBase label={"New discipline"} value={state.discipline} setValue={(value: string) => dispatch({type: "SET_DISCIPLINE", payload: value})} placeholder={""} onKeyDown={(e) => addDiscipline(e)}/>
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
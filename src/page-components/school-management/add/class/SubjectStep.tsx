import { FC, useState } from "react";
import styled from "styled-components";
import { BtnSecondaryS } from "../../../../component-library/buttons/components";
import { DropdownFormBase, DropdownSearchFormBase, SingleChoiceFormBase, TextFormBase, ToggleRow } from "../../../../component-library/forms/base-components";
import DropdownGroupedSearchFormBase from "../../../../component-library/forms/base-components/dropdowns/DropdownGroupedSearchFormBase";
import { useThemeContext } from "../../../../component-library/ThemeProvider";
import { IconS } from "../../../../component-library/utilities/Icon";
import ProgressStep, { IProgressStepProps } from "../../../../template-library/ProgressStep";
import TransferList, { IItem } from "../../../../template-library/TransferList";

interface IStyleProps {
    fill: string;
    hasMultiple: boolean;
    hasGroups: boolean;
}

const StyledSubjectStep = styled.div`
    display: flex;
    min-height: calc(100% - 127px);
    gap: 32px;
`;

const StyledSubjectDetail = styled.div<IStyleProps>`
    display: flex;
    flex-direction: column;
    min-height: 100%;
    min-width: 750px;
    gap: 8px;
`;

const StyledSubjectTitle = styled.div<IStyleProps>`
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
        width: 16ch;
    }

    > div:nth-of-type(2) {
        width: fit-content;
    }

`;

const StyledSubjectList = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
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
        max-width: 120ch;
    }
`;

const StyledDiscipline = styled.div<IStyleProps>`
    color: ${props => props.fill};

    > div {
        user-select: none;
    }
`;



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

    const [currSubject, setCurrSubject] = useState<number>(0);

    const [chosenItems, setChosenItems] = useState<Array<IItem>>([]);
    const [search, setSearch] = useState<string>("");
    const [hasMultiple, setHasMultiple] = useState<boolean>(false);
    const [hasGroups, setHasGroups] = useState<boolean>(false);
    const [teacher, setTeacher] = useState<string>("");
    const [groupPattern, setGroupPattern] = useState<string>(""); // Changes to null value on any change to the selected pattern
    const [group, setGroup] = useState<string>("");
    const [groupAmount, setGroupAmount] = useState<string>("1");
    const [discipline, setDiscipline] = useState<string>("");
    const [disciplines, setDisciplines] = useState<Array<string>>([]);

    const styleProps = { fill: colors.fill, hasMultiple, hasGroups };

    const addDiscipline = (e?: React.KeyboardEvent<any>) => {
        if (e !== undefined && e.key !== 'Enter') return;

        if (!disciplines.includes(discipline)) setDisciplines([...disciplines, discipline]);
        setDiscipline("");
    }

    return (
        <ProgressStep title={title + " - subjects"} {...rest}>
            <StyledSubjectStep>
                <StyledSubjectList>
                        SUBJECT LIST

                </StyledSubjectList>
                <StyledSubjectDetail {...styleProps}>
                    <StyledSubjectTitle {...styleProps}>{subjectTypes[currSubject].name}</StyledSubjectTitle>
                     
                        <StyledSubjectForms {...styleProps}>
                            <div>
                                <ToggleRow value={hasMultiple} setValue={setHasMultiple} label={"Has multiple disciplines"}/>
                                {!hasMultiple && <ToggleRow value={hasGroups} setValue={setHasGroups} label={"Has groups"} isDisabled={hasMultiple}/>}
                            </div>
                            {!hasMultiple &&
                                <div>
                                    <DropdownSearchFormBase value={teacher} setValue={setTeacher} label={"Teacher"} options={dummyTeachers} />
                                    {hasGroups && 
                                        <DropdownGroupedSearchFormBase value={groupPattern} setValue={setGroupPattern} label={"Group Pattern"} optionGroups={dummyOptionGroups} isOptional={true}/>
                                    }
                                </div>
                            }
                        </StyledSubjectForms>
                    {!hasMultiple && hasGroups &&
                        <>
                            <StyledGroupListHeader {...styleProps}>
                                <DropdownFormBase value={groupAmount} setValue={setGroupAmount} label={"# Groups"} options={{1: "1", 2: "2", 3: "3", 4: "4"}} />
                                {parseInt(groupAmount) > 1 && <SingleChoiceFormBase value={group} setValue={setGroup} label={"Group"} options={Object.fromEntries(Array.from(Array(parseInt(groupAmount)), (e, i) => [i+1, `${i+1}`]))}/>}
                            </StyledGroupListHeader>   
                            <TransferList availableItems={dummyItems} chosenItems={chosenItems} setChosenItems={setChosenItems} search={search} setSearch={setSearch} height={"100%"}/>
                        </>
                    }
                    {hasMultiple &&
                        <>
                            <StyledDisciplineList {...styleProps}>
                                <div className={"add-row"}>
                                    <TextFormBase label={"New discipline"} value={discipline} setValue={setDiscipline} placeholder={""} onKeyDown={(e) => addDiscipline(e)}/>
                                    <BtnSecondaryS onClick={() => addDiscipline()} icon={"add"}></BtnSecondaryS>
                                </div>
                                <div className={"disciplines"}>
                                    {disciplines.map(d => {
                                        return (
                                            <StyledDiscipline {...styleProps} key={d}>
                                                <span>{d}</span>
                                                <IconS onClick={() => setDisciplines(disciplines.filter(disc => disc !== d))}>cancel</IconS>
                                            </StyledDiscipline>
                                        )
                                    })}

                                </div>
                            </StyledDisciplineList>
                        </>
                    }
                </StyledSubjectDetail>
            </StyledSubjectStep>
        </ProgressStep>
    );
}

export default SubjectStep;
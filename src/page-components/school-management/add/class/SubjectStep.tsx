import { FC, useState } from "react";
import styled from "styled-components";
import { CheckboxRow, DropdownFormBase, DropdownSearchFormBase, SingleChoiceFormBase, ToggleRow } from "../../../../component-library/forms/base-components";
import DropdownGroupedSearchFormBase from "../../../../component-library/forms/base-components/dropdowns/DropdownGroupedSearchFormBase";
import { useThemeContext } from "../../../../component-library/ThemeProvider";
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

const StyledSubjectList = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
`;

const StyledSubjectDetail = styled.div<IStyleProps>`
    display: flex;
    flex-direction: column;
    min-height: 100%;
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
        width: fit-content;
    }

    > div:last-child {
        width: 18ch;
    }
`;

const StyledDisciplineList = styled.div<IStyleProps>`

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

    const styleProps = { fill: colors.fill, hasMultiple, hasGroups };

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
                            {parseInt(groupAmount) > 1 && <SingleChoiceFormBase value={group} setValue={setGroup} label={"Group"} options={Object.fromEntries(Array.from(Array(parseInt(groupAmount)), (e, i) => [i+1, `${i+1}`]))}/>}
                            <DropdownFormBase value={groupAmount} setValue={setGroupAmount} label={"# Groups"} options={{1: "1", 2: "2", 3: "3", 4: "4"}} />
                            </StyledGroupListHeader>   
                            <TransferList availableItems={dummyItems} chosenItems={chosenItems} setChosenItems={setChosenItems} search={search} setSearch={setSearch} height={"100%"}/>
                        </>
                    }
                    {hasMultiple &&
                        <StyledDisciplineList {...styleProps}>
                            asdkjhsdfghjkjfhkfdsjhsdfjksdf DISCIPLINES
                        </StyledDisciplineList>
                    }
                </StyledSubjectDetail>
            </StyledSubjectStep>
        </ProgressStep>
    );
}

export default SubjectStep;
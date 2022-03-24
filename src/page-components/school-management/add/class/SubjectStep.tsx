import { FC, useState } from "react";
import styled from "styled-components";
import { CheckboxRow, DropdownSearchFormBase, ToggleRow } from "../../../../component-library/forms/base-components";
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
    padding-top: 8px;
    width: 44ch;
`;

const StyledDisciplineList = styled.div<IStyleProps>`

`;

const dummyItems = [
    {id: 5, name: "xd"},
]

const dummyTeachers = {
    123: "Jan Amos Komensky"
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

    const styleProps = { fill: colors.fill, hasMultiple, hasGroups };

    return (
        <ProgressStep title={title + " - subjects"} {...rest}>
            <StyledSubjectStep>
                <StyledSubjectList>
                        SUBJECT LIST

                </StyledSubjectList>
                <StyledSubjectDetail {...styleProps}>
                    <StyledSubjectTitle {...styleProps}>{subjectTypes[currSubject].name}</StyledSubjectTitle>
                    <ToggleRow value={hasMultiple} setValue={setHasMultiple} label={"Has multiple disciplines"}/>
                    <ToggleRow value={hasGroups} setValue={setHasGroups} label={"Has groups"} isDisabled={hasMultiple}/>
                    {!hasMultiple && 
                        <StyledSubjectForms {...styleProps}>
                            <DropdownSearchFormBase value={teacher} setValue={setTeacher} label={"Teacher"} options={dummyTeachers} />
                        </StyledSubjectForms>
                    }
                    {!hasMultiple && hasGroups &&
                        <TransferList availableItems={dummyItems} chosenItems={chosenItems} setChosenItems={setChosenItems} search={search} setSearch={setSearch} height={"100%"}/>
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
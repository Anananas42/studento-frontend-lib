import { FC, useState } from "react";
import styled from "styled-components";
import ProgressStep, { IProgressStepProps } from "../../../../template-library/ProgressStep";
import TransferList, { IItem } from "../../../../template-library/TransferList";

const StyledSubjectStep = styled.div`
    display: flex;
    min-height: calc(100% - 127px);
`;

const StyledSubjectList = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
`;

const StyledSubjectDetail = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
`;

const SubjectStep:FC<IProgressStepProps> = (props) => {
    const { title, ...rest } = props;
    const [currSubject, setCurrSubject] = useState<number>(0);

    const [chosenItems, setChosenItems] = useState<Array<IItem>>([]);
    const [search, setSearch] = useState<string>("");

    return (
        <ProgressStep title={title + " - subjects"} {...rest}>
            <StyledSubjectStep>
                <StyledSubjectList>
                        asdadsdas

                </StyledSubjectList>
                <StyledSubjectDetail>
                        dsadsa
                    <TransferList availableItems={[{id: 5, name: "xd"}]} chosenItems={chosenItems} setChosenItems={setChosenItems} search={search} setSearch={setSearch} height={"100%"}/>
                </StyledSubjectDetail>
            </StyledSubjectStep>
        </ProgressStep>
    );
}

export default SubjectStep;
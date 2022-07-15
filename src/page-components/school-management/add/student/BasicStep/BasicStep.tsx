import { FC } from "react";
import styled from "styled-components";
import { DropdownFormBase, TextFormBase } from "../../../../../component-library/forms/base-components";
import { BirthdateForm, FirstNameForm, LastNameForm, MiddleNameForm } from "../../../../../component-library/forms/components";
import { PersonalIDForm } from "../../../../../component-library/forms/components/PersonalDetailsForms";
import { IAddStudentStepProps } from "../../../../../pages/admin/add/AddStudent";
import ProgressStep from "../../../../../template-library/ProgressStep";

const StyledRow = styled.div`
    display: flex;  
    flex-direction: row;
    justify-content: flex-start;
    gap: 16px;
`;

const dummyInsuranceCompanies = {
    "VZP": "VZP",
    "OZP": "OZP",
}

const dummyClasses = {
    "4.C": "4.C",
    "4.B": "4.B",
    "5.B": "5.B",
}

const BasicStep:FC<IAddStudentStepProps> = (props) => {
    const { title, state, dispatch, ...rest } = props;

    const nextCallback = () => {
        
        return true;
    };

    return (
        <ProgressStep title={title + " - basic details"} nextCallback={nextCallback} {...rest}>
            <StyledRow>
                <FirstNameForm value={state.firstName} setValue={(value: string) => dispatch({type: "SET_FIRST_NAME", payload: value})}/>
                <LastNameForm value={state.lastName} setValue={(value: string) => dispatch({type: "SET_LAST_NAME", payload: value})}/>
            </StyledRow>
            <StyledRow>
                <div style={{width: "43ch"}}>
                    <DropdownFormBase label={"Insurance company"} value={state.insuranceCompany} setValue={(value: string) => dispatch({type: "SET_INSURANCE_COMPANY", payload: value})} options={dummyInsuranceCompanies} isOptional={true} />
                </div>
                <DropdownFormBase label={"Class"} value={state.class} setValue={(value: string) => dispatch({type: "SET_CLASS", payload: value})} options={dummyClasses} width={"120px"} placeholder={"1.A"}/>
            </StyledRow>
            <StyledRow>
                <PersonalIDForm value={state.personalID} setValue={(value: string) => dispatch({type: "SET_PERSONAL_ID", payload: value})}/>
                <BirthdateForm value={state.birthdate} setValue={(value: string) => dispatch({type: "SET_BIRTHDATE", payload: value})}/>
            </StyledRow>
        </ProgressStep>
    )
}

export default BasicStep;
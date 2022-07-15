import { FC, useState } from "react";
import styled from "styled-components";
import { DropdownFormBase } from "../../../../../component-library/forms/base-components";
import { BirthdateForm, FirstNameForm, LastNameForm } from "../../../../../component-library/forms/components";
import { PersonalIDForm } from "../../../../../component-library/forms/components/PersonalDetailsForms";
import { IAddTeacherStepProps } from "../../../../../pages/admin/add/AddTeacher";
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

interface IErrors {
    firstName?: string;
    lastName?: string;
    birthdate?: string;
    personalID?: string;
}

const EducationStep:FC<IAddTeacherStepProps> = (props) => {
    const { title, state, dispatch, ...rest } = props;
    const [errors, setErrors] = useState<IErrors>({});

    const nextCallback = () => {
        let isError = false;
        let temp:IErrors = {};
        if (!state.firstName) {
            temp.firstName = "default";
            isError = true;
        }
        if (!state.lastName) {
            temp.lastName = "default";
            isError = true;
        }
        if (!state.birthdate) {
            temp.birthdate = "default";
            isError = true;
        }
        if (!state.personalID) {
            temp.personalID = "default";
            isError = true;
        }
        setErrors(temp);
        
        return !isError;
    };

    return (
        <ProgressStep title={title + " - basic details"} nextCallback={nextCallback} {...rest}>
            <StyledRow>
                <FirstNameForm value={state.firstName} setValue={(value: string) => dispatch({type: "SET_FIRST_NAME", payload: value})} errorMessage={errors.firstName}/>
                <LastNameForm value={state.lastName} setValue={(value: string) => dispatch({type: "SET_LAST_NAME", payload: value})} errorMessage={errors.lastName}/>
            </StyledRow>
            <PersonalIDForm value={state.personalID} setValue={(value: string) => dispatch({type: "SET_PERSONAL_ID", payload: value})} errorMessage={errors.personalID} width={"240px"}/>
            <div style={{width: "41ch"}}>
                <DropdownFormBase label={"Insurance company"} value={state.insuranceCompany} setValue={(value: string) => dispatch({type: "SET_INSURANCE_COMPANY", payload: value})} options={dummyInsuranceCompanies} isOptional={true} />
            </div>
            <StyledRow>
                <BirthdateForm value={state.birthdate} setValue={(value: string) => dispatch({type: "SET_BIRTHDATE", payload: value})} errorMessage={errors.birthdate}/>
            </StyledRow>
        </ProgressStep>
    )
}

export default EducationStep;
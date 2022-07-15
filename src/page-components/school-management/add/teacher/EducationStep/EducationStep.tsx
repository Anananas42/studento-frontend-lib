import { FC, useState } from "react";
import styled from "styled-components";
import { DropdownFormBase, TextFormBase } from "../../../../../component-library/forms/base-components";
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

interface IErrors {
    
}

const EducationStep:FC<IAddTeacherStepProps> = (props) => {
    const { title, state, dispatch, ...rest } = props;
    const [errors, setErrors] = useState<IErrors>({});

    const nextCallback = () => {
        let isError = false;
        let temp:IErrors = {};
        
        setErrors(temp);
        
        return !isError;
    };

    return (
        <ProgressStep title={title + " - education"} nextCallback={nextCallback} {...rest}>
            <TextFormBase label={"Degree"} value={state.degree} setValue={(value: string) => dispatch({ type: "SET_DEGREE", payload: value })} placeholder={"PhD"}/>
            <TextFormBase label={"Specialization"} value={state.specialization} setValue={(value: string) => dispatch({ type: "SET_SPECIALIZATION", payload: value })} placeholder={"Computer Science"}/>
            <TextFormBase label={"University"} value={state.university} setValue={(value: string) => dispatch({ type: "SET_UNIVERSITY", payload: value })} placeholder={"Univerzita Karlova"}/>
        </ProgressStep>
    )
}

export default EducationStep;
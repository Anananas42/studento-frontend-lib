import { FC } from "react";
import styled from "styled-components";
import { CityForm, ZipCodeForm } from "../../../../../component-library/forms/components";
import { AddressForm } from "../../../../../component-library/forms/components/AddressDetailsForms";
import { IAddEmployeeStepProps } from "../../../../../pages/admin/add/AddEmployee";
import ProgressStep from "../../../../../template-library/ProgressStep";

const StyledRow = styled.div`
    display: flex;  
    flex-direction: row;
    justify-content: flex-start;
    gap: 16px;
`;

const AddressStep:FC<IAddEmployeeStepProps> = (props) => {
    const { title, state, dispatch, ...rest } = props;

    const nextCallback = () => {
        
        return true;
    };

    return (
        <ProgressStep title={title + " - address"} nextCallback={nextCallback} {...rest}>
            <AddressForm value={state.address} setValue={(value: string) => dispatch({ type: "SET_ADDRESS", payload: value })} />
            <StyledRow>
                <CityForm value={state.city} setValue={(value: string) => dispatch({ type: "SET_CITY", payload: value })} />
                <ZipCodeForm value={state.zipCode} setValue={(value: string) => dispatch({ type: "SET_ZIP_CODE", payload: value })} width={"160px"} />
            </StyledRow>
        </ProgressStep>
    )
}

export default AddressStep;
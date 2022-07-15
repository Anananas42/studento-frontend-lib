import { FC, useState } from "react";
import { IAddSubjectStepProps } from "../../../../../pages/admin/add/AddSubject";
import ProgressStep from "../../../../../template-library/ProgressStep";
import DetailForm, { IErrors } from "./DetailForm";


const DetailStep:FC<IAddSubjectStepProps> = (props) => {
    const { title, state, dispatch, ...rest } = props;
    const [errors, setErrors] = useState<IErrors>({});

    const nextCallback = () => {
        let isError = false;
        let temp:IErrors = {};
        
        setErrors(temp);

        return !isError;
    };

    return (
        <ProgressStep title={title + " - details"} nextCallback={nextCallback} {...rest}>
            <DetailForm state={state} dispatch={dispatch} errors={errors} />
        </ProgressStep>
    );
}

export default DetailStep;
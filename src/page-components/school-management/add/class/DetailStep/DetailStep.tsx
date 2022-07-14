import { FC, useState } from "react";
import { IAddClassStepProps } from "../../../../../pages/admin/add/AddClass";
import ProgressStep from "../../../../../template-library/ProgressStep";
import DetailForm, { IErrors } from "./DetailForm";


const DetailStep:FC<IAddClassStepProps> = (props) => {
    const { title, state, dispatch, ...rest } = props;
    const [errors, setErrors] = useState<IErrors>({});

    const nextCallback = () => {
        let isError = false;
        let temp:IErrors = {};
        if (!state.grade) {
            temp.gradeError = "default";
            isError = true;
        }
        if (!state.code) {
            temp.codeError = "default";
            isError = true;
        }
        if (!state.classTeacher) {
            temp.classTeacherError = "default";
            isError = true;
        }
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
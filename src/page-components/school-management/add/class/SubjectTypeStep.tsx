import { FC } from "react";
import ProgressStep, { IProgressStepProps } from "../../../../template-library/ProgressStep";
import DetailForm from "./DetailForm";

const SubjectTypeStep:FC<IProgressStepProps> = (props) => {
    const { title, ...rest } = props;

    return (
        <ProgressStep title={title + " - subject types"} {...rest}>
            
        </ProgressStep>
    );
}

export default SubjectTypeStep;
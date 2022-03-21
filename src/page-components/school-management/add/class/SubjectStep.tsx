import { FC } from "react";
import ProgressStep, { IProgressStepProps } from "../../../../template-library/ProgressStep";
import DetailForm from "./DetailForm";

const SubjectStep:FC<IProgressStepProps> = (props) => {
    const { title, ...rest } = props;

    return (
        <ProgressStep title={title + " - subjects"} {...rest}>
            
        </ProgressStep>
    );
}

export default SubjectStep;
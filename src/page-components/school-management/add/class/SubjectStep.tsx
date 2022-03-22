import { FC } from "react";
import ProgressStep, { IProgressStepProps } from "../../../../template-library/ProgressStep";

const SubjectStep:FC<IProgressStepProps> = (props) => {
    const { title, ...rest } = props;

    return (
        <ProgressStep title={title + " - subjects"} {...rest}>
            
        </ProgressStep>
    );
}

export default SubjectStep;
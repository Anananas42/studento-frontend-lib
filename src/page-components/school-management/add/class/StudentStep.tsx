import { FC } from "react";
import ProgressStep, { IProgressStepProps } from "../../../../template-library/ProgressStep";

const StudentStep:FC<IProgressStepProps> = (props) => {
    const { title, ...rest } = props;

    return (
        <ProgressStep title={title + " - students"} {...rest}>
            
        </ProgressStep>
    );
}

export default StudentStep;
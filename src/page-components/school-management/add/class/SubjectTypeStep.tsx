import { FC } from "react";
import ProgressStep, { IProgressStepProps } from "../../../../template-library/ProgressStep";

const SubjectTypeStep:FC<IProgressStepProps> = (props) => {
    const { title, ...rest } = props;

    return (
        <ProgressStep title={title + " - subject types"} {...rest}>
            
        </ProgressStep>
    );
}

export default SubjectTypeStep;
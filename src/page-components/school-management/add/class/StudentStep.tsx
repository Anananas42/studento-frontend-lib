import { FC } from "react";
import ProgressStep, { IProgressStepProps } from "../../../../template-library/ProgressStep";
import TransferList from "../../../../template-library/TransferList";

const StudentStep:FC<IProgressStepProps> = (props) => {
    const { title, ...rest } = props;

    return (
        <ProgressStep title={title + " - students"} {...rest}>
            <TransferList />
        </ProgressStep>
    );
}

export default StudentStep;
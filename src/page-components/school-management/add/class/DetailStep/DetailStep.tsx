import { FC } from "react";
import ProgressStep, { IProgressStepProps } from "../../../../../template-library/ProgressStep";
import DetailForm from "./DetailForm";

const DetailStep:FC<IProgressStepProps> = (props) => {
    const { title, ...rest } = props;

    return (
        <ProgressStep title={title + " - details"} {...rest}>
            <DetailForm />
        </ProgressStep>
    );
}

export default DetailStep;
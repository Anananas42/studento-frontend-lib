import { FC } from "react";
import { IAddClassStepProps } from "../../../../../pages/admin/add/AddClass";
import ProgressStep from "../../../../../template-library/ProgressStep";
import DetailForm from "./DetailForm";

const DetailStep:FC<IAddClassStepProps> = (props) => {
    const { title, ...rest } = props;

    return (
        <ProgressStep title={title + " - details"} {...rest}>
            <DetailForm />
        </ProgressStep>
    );
}

export default DetailStep;
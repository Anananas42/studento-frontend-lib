import { FC, useState } from "react";
import { IAddClassStepProps } from "../../../../../pages/admin/add/AddClass";
import ProgressStep from "../../../../../template-library/ProgressStep";
import TransferList, { IItem } from "../../../../../template-library/TransferList";

const StudentStep:FC<IAddClassStepProps> = (props) => {
    const { title, state, dispatch, ...rest } = props;
    const [search, setSearch] = useState<string>("");

    return (
        <ProgressStep title={title + " - students"} isStretched={true} {...rest}>
            <TransferList availableItems={state.studentOptions} chosenItems={state.classStudents} setChosenItems={(value: Array<IItem>) => dispatch({type: "SET_CLASS_STUDENTS", payload: value})} search={search} setSearch={setSearch}/>
        </ProgressStep>
    );
}

export default StudentStep;
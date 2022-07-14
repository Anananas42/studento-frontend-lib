import { FC, useState } from "react";
import { IAddClassStepProps } from "../../../../../pages/admin/add/AddClass";
import ProgressStep from "../../../../../template-library/ProgressStep";
import TransferList, { IItem } from "../../../../../template-library/TransferList";

const SubjectTypeStep:FC<IAddClassStepProps> = (props) => {
    const { title, state, dispatch, ...rest } = props;
    const [search, setSearch] = useState<string>("");

    const nextCallback = () => {
        dispatch({type: "ENTER_SUBJECTS_STEP"});
        return true;
    }

    return (
        <ProgressStep title={title + " - subject types"} isStretched={true} nextCallback={nextCallback} {...rest}>
            <TransferList availableItems={state.subjectTypeOptions} chosenItems={state.chosenSubjectTypes} setChosenItems={(value: Array<IItem>) => dispatch({type: "SET_CHOSEN_SUBJECT_TYPES", payload: value})} search={search} setSearch={setSearch}/>
        </ProgressStep>
    );
}

export default SubjectTypeStep;
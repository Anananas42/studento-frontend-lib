import { FC, useState } from "react";
import { IAddClassStepProps } from "../../../../pages/admin/add/AddClass";
import ProgressStep from "../../../../template-library/ProgressStep";
import TransferList, { IItem } from "../../../../template-library/TransferList";

const dummyItems = [
    {
        id: 42,
        name: "Mathematics",
    },
    {
        id: 43,
        name: "Czech Language",
    },
    {
        id: 45,
        name: "English Language",
    },
    {
        id: 85,
        name: "Physics",
    },
    {
        id: 48,
        name: "Biology",
    },
    {
        id: 25,
        name: "Chemistry",
    },
    {
        id: 35,
        name: "History",
    },
    {
        id: 12,
        name: "Geography",
    },
    {
        id: 13,
        name: "Informatics",
    },
    {
        id: 14,
        name: "PE",
    },
    {
        id: 19,
        name: "Philosophy",
    }
];

const SubjectTypeStep:FC<IAddClassStepProps> = (props) => {
    const { title, state, dispatch, ...rest } = props;
    const [chosenItems, setChosenItems] = useState<Array<IItem>>([]);
    const [search, setSearch] = useState<string>("");

    return (
        <ProgressStep title={title + " - subject types"} isStretched={true} {...rest}>
            <TransferList availableItems={dummyItems} chosenItems={chosenItems} setChosenItems={setChosenItems} search={search} setSearch={setSearch}/>
        </ProgressStep>
    );
}

export default SubjectTypeStep;
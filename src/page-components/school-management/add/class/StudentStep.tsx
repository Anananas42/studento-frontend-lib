import { FC, useState } from "react";
import ProgressStep, { IProgressStepProps } from "../../../../template-library/ProgressStep";
import TransferList, { IItem } from "../../../../template-library/TransferList";

const dummyItems = [
    {
        id: 42,
        name: "Christopher Nolan",
    },
    {
        id: 43,
        name: "Jonathan Nolan",
    },
    {
        id: 45,
        name: "Milos Forman",
    },
    {
        id: 85,
        name: "Ridley Scott",
    },
    {
        id: 48,
        name: "Bogdan Random",
    },
    {
        id: 25,
        name: "Your Name",
    },
    {
        id: 35,
        name: "What is",
    },
    {
        id: 12,
        name: "Wow Random",
    },
    {
        id: 13,
        name: "Incredible Name",
    },
    {
        id: 14,
        name: "Shrek Swamply",
    },
    {
        id: 19,
        name: "Wow Random",
    },
    {
        id: 2,
        name: "Incredible Very",
    },
    {
        id: 3,
        name: "Shrek Greene",
    },
    {
        id: 4,
        name: "Shrek Big",
    },
    {
        id: 100,
        name: "Name Name",
    },
    {
        id: 1001,
        name: "Swamply Swamply",
    },
    {
        id: 1002,
        name: "Wow Uga",
    },
    {
        id: 10002,
        name: "Incredible Incredible",
    },
    {
        id: 100003,
        name: "Shrek Shrek",
    },
    {
        id: 4300,
        name: "Jonathan Jonathan",
    },
    {
        id: 4500,
        name: "Milos Milos",
    },
    {
        id: 8500,
        name: "Ridley Ridley",
    },
    {
        id: 2243,
        name: "Nolan Nolan",
    },
    {
        id: 2245,
        name: "Forman Forman",
    },
    {
        id: 2285,
        name: "Scott Scott",
    },
    {
        id: 34444,
        name: "Shrek Scott",
    },
    {
        id: 4444,
        name: "Scott Big",
    },
    {
        id: 10440,
        name: "Name Forman",
    },
    {
        id: 10041,
        name: "Nolan Swamply",
    },
];

const StudentStep:FC<IProgressStepProps> = (props) => {
    const { title, ...rest } = props;
    const [chosenItems, setChosenItems] = useState<Array<IItem>>([]);
    const [search, setSearch] = useState<string>("");

    return (
        <ProgressStep title={title + " - students"} isStretched={true} {...rest}>
            <TransferList availableItems={dummyItems} chosenItems={chosenItems} setChosenItems={setChosenItems} search={search} setSearch={setSearch}/>
        </ProgressStep>
    );
}

export default StudentStep;
import { FC } from "react";
import { useThemeContext } from "../../ThemeProvider";
import { DropdownFormBase, SingleChoiceFormBase } from "../base-components";

interface IFormProps {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    isHorizontal?: boolean;
    defaultNote?: string;
    formId?: string;
    errorMessage?: string;
    isDisabled?: boolean;
    isCompact?: boolean;
}

const WeekDayForm:FC<IFormProps> = (props) => {
    const { languageMap } = useThemeContext();

    const weekdays = languageMap.Generic.Week;

    const choices = {0: weekdays.monday, 1: weekdays.tuesday, 2: weekdays.wednesday,
         3: weekdays.thursday, 4: weekdays.friday, 5: weekdays.saturday, 6: weekdays.sunday};

    return (
        <DropdownFormBase label={languageMap.Generic.weekday} options={choices} width={"200px"} {...props}/>
    );
}

export default WeekDayForm;
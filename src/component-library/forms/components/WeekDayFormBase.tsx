import { FC } from "react";
import { useThemeContext } from "../../ThemeProvider";
import { DropdownFormBase } from "../base-components";

interface IFormProps {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    isHorizontal?: boolean;
    defaultNote?: string;
    formId?: string;
    errorMessage?: string;
    isDisabled?: boolean;
    isCompact?: boolean;
    isWorkingWeekOnly?: boolean;
}

const WeekDayForm:FC<IFormProps> = (props) => {
    const { isWorkingWeekOnly, ...rest } = props;
    const { languageMap } = useThemeContext();

    const weekdays = languageMap.Generic.Week;

    let choices = {0: weekdays.monday, 1: weekdays.tuesday, 2: weekdays.wednesday,
         3: weekdays.thursday, 4: weekdays.friday, ...(!isWorkingWeekOnly && {5: weekdays.saturday, 6: weekdays.sunday})};

    return (
        <DropdownFormBase label={languageMap.Generic.weekday} options={choices} width={"220px"} {...rest}/>
    );
}

export default WeekDayForm;
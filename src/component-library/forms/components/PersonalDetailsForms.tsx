import { FC } from "react";
import { useThemeContext } from "../../ThemeProvider";
import { TextFormBase } from "../base-components";
import DateForm from "./DateForm";

interface IPersonalDetailsProps {
    value: string;
    setValue: (inputText:string) => void;
    isHorizontal?: boolean; // Place label to the left
    formId?: string; // To link label and input
    errorMessage?: string; // Trigger error state by setting errorMessage to a value
    isDisabled?: boolean;
    isOptional?: boolean;
    width?: string; // Set width manually. Else it's 100%
    onKeyDown?: React.KeyboardEventHandler<any>; // Detect pressed keys while focused on the input (for example confirm something on enter)
}

export const FirstNameForm:FC<IPersonalDetailsProps> = (props) => {
    const { languageMap } = useThemeContext();

    return (
        <TextFormBase label={languageMap.PersonalDetails.firstName} placeholder={""} {...props} />
    )
}

export const MiddleNameForm:FC<IPersonalDetailsProps> = (props) => {
    const { languageMap } = useThemeContext();

    return (
        <TextFormBase label={languageMap.PersonalDetails.middleName} placeholder={""} {...props} />
    )
}

export const LastNameForm:FC<IPersonalDetailsProps> = (props) => {
    const { languageMap } = useThemeContext();

    return (
        <TextFormBase label={languageMap.PersonalDetails.lastName} placeholder={""} {...props} />
    )
}

export const BirthdateForm:FC<IPersonalDetailsProps> = (props) => {
    const { languageMap } = useThemeContext();

    return (
        <DateForm label={languageMap.PersonalDetails.birthdate} {...props} />
    )
}

export const StartdateForm:FC<IPersonalDetailsProps> = (props) => {
    const { languageMap } = useThemeContext();

    return (
        <DateForm label={languageMap.PersonalDetails.startDate} {...props} />
    )
}

export const PersonalIDForm:FC<IPersonalDetailsProps> = (props) => {
    const { languageMap } = useThemeContext();

    return (
        <TextFormBase label={languageMap.PersonalDetails.personalIdentifNumber} placeholder={""} {...props} />
    )
}

export const PlaceOfBirthForm:FC<IPersonalDetailsProps> = (props) => {
    const { languageMap } = useThemeContext();

    return (
        <TextFormBase label={languageMap.PersonalDetails.placeOfBirth} placeholder={""} {...props} />
    )
}
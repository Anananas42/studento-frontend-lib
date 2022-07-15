import { FC } from "react";
import { useThemeContext } from "../../ThemeProvider";
import { TextFormBase } from "../base-components";

interface IAddressDetailsProps {
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

export const AddressForm:FC<IAddressDetailsProps> = (props) => {
    const { languageMap } = useThemeContext();

    return (
        <TextFormBase label={languageMap.Address.index} placeholder={"Evropská 123/1"} {...props} />
    )
}

export const StreetForm:FC<IAddressDetailsProps> = (props) => {
    const { languageMap } = useThemeContext();

    return (
        <TextFormBase label={languageMap.Address.street} placeholder={"Evropská"} {...props} />
    )
}

export const CityForm:FC<IAddressDetailsProps> = (props) => {
    const { languageMap } = useThemeContext();

    return (
        <TextFormBase label={languageMap.Address.city} placeholder={"Praha"} {...props} />
    )
}

export const ZipCodeForm:FC<IAddressDetailsProps> = (props) => {
    const { languageMap } = useThemeContext();

    return (
        <TextFormBase label={languageMap.Address.zip} placeholder={"12345"} {...props} />
    )
}
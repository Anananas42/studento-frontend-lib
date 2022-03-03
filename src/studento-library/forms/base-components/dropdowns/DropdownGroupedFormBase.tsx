import { FC, useEffect, useRef, useState } from "react";
import { useThemeContext } from "../../../ThemeProvider";
import { IconL } from "../../../utilities/Icon";
import FormBase from "../../shared/FormBase";
import FormColors from "../../shared/FormColors";
import StyledAccessibleSelect from "./styled/StyledAccessibleSelect";
import { StyledChevron, StyledCurrentSelection, StyledCustomDropdown, StyledGroupTitle, StyledList, StyledOption } from "./styled/StyledCustomDropdown";

interface IOptionGroups {
    [key: string]: {title: string, options: IOptions};
}

interface IOptions {
    [key: string]: string; // key in english, value in local language
};

interface IProps {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    optionGroups: IOptionGroups;
    label: string;
    formId?: string;
    isHorizontal?: boolean;
    isCompact?: boolean;
    defaultNote?: string;
    errorMessage?: string;
    isDisabled?: boolean;
    width?: string;
};

const DropdownGroupedFormBase:FC<IProps> = (props) => {
    const { value, setValue, optionGroups, formId, isDisabled, errorMessage, label, width, ...rest } = props;
    const { borderRadius, colors, languageMap } = useThemeContext();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [currOptionName, setCurrOptionName] = useState<string>();
    const customDropdownRef = useRef<any>();
    const dropdownWrapperRef = useRef<any>();

    const placeholderFill = !value ? FormColors.Default.placeholder : colors.fill;
    const styleProps = { borderRadius, errorMessage, fill: colors.fill, placeholderFill, isOpen, isDisabled, width };

    useEffect(() => {
        const checkClickOutside = (e: any) => {
            if (dropdownWrapperRef.current === null) {
                window.removeEventListener('click', checkClickOutside);
                return;
            }
    
            if (!dropdownWrapperRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        }

        dropdownWrapperRef && window.addEventListener('click', checkClickOutside);
        
        return () => {
            window.removeEventListener('click', checkClickOutside);
        }
    }, []);

    useEffect(() => {
        if (isDisabled){
            setIsOpen(false);
            setValue("");
        } 
    }, [isDisabled, setValue]);

    return (
        <FormBase formId={formId} label={label} isDisabled={isDisabled} errorMessage={errorMessage} {...rest}>
            <StyledAccessibleSelect aria-labelledby={label} value={value} onChange={(e) => {setValue(e.target.value)}} id={formId ? formId : label} disabled={isDisabled} {...styleProps}>
                {Object.values(optionGroups).map(group => {
                    return Object.keys(group.options).map(optKey => {
                        return <option key={optKey} value={optKey} onClick={() => setCurrOptionName(group.options[optKey])} disabled={isDisabled}>{group.options[optKey]}</option>
                    })
                })}
            </StyledAccessibleSelect>
            <div ref={dropdownWrapperRef}>
                <StyledCustomDropdown ref={customDropdownRef} aria-hidden={true} onClick={() => !isDisabled && setIsOpen(!isOpen)} {...styleProps}>
                    <StyledCurrentSelection>{isDisabled ? "" : (currOptionName ? currOptionName : languageMap.Generic.drpDwnPlaceholder)}</StyledCurrentSelection>
                    <StyledChevron {...styleProps}><IconL>expand_more</IconL></StyledChevron>
                </StyledCustomDropdown>
                <StyledList {...styleProps} isOpen={isOpen} >
                        {Object.values(optionGroups).map(group => {
                            return (
                                <div key={group.title + "div"}>
                                    <StyledGroupTitle key={group.title} {...styleProps}>{group.title}</StyledGroupTitle>
                                    {Object.keys(group.options).map(optKey => {
                                        return <StyledOption key={optKey} onClick={() => {if(!isDisabled) {setValue(optKey); setCurrOptionName(group.options[optKey]); setIsOpen(false)}}} {...styleProps}>{group.options[optKey]}</StyledOption>
                                    })}
                                </div>
                            )
                        })}
                </StyledList>
            </div>
        </FormBase>
    );
}

export default DropdownGroupedFormBase;
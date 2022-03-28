import { FC, useEffect, useRef, useState } from "react";
import { borderRadius, useThemeContext } from "../../../ThemeProvider";
import { IconL } from "../../../utilities/Icon";
import FormBase from "../../shared/FormBase";
import FormColors from "../../shared/FormColors";
import StyledAccessibleSelect from "./styled/StyledAccessibleSelect";
import { StyledChevron, StyledCurrentSelection, StyledCustomDropdown, StyledList, StyledOption } from "./styled/StyledCustomDropdown";

interface IOptions {
    [key: string]: string; // key in english, value in local language
};

interface IProps {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>> | ((value: string) => void);
    options: IOptions;
    label: string;
    placeholder?: string;
    formId?: string;
    isHorizontal?: boolean;
    isCompact?: boolean;
    defaultNote?: string;
    errorMessage?: string;
    isDisabled?: boolean;
    width?: string;
};

const DropdownFormBase:FC<IProps> = (props) => {
    const { value, setValue, options, formId, isDisabled, errorMessage, label, width, placeholder, ...rest } = props;
    const { colors, languageMap } = useThemeContext();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const customDropdownRef = useRef<any>();
    const dropdownWrapperRef = useRef<any>();

    const placeholderText = !value ? (placeholder ? placeholder : languageMap.Generic.drpDwnPlaceholder) : options[value];
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
        <FormBase formId={formId} label={label} isDisabled={isDisabled} errorMessage={errorMessage} width={width} {...rest}>
            <StyledAccessibleSelect disabled={isDisabled} aria-labelledby={label} value={value} onChange={(e) => {setValue(e.target.value)}} id={formId ? formId : label} {...styleProps}>
            {Object.keys(options).map(optKey => {
                    return <option key={optKey} value={optKey} disabled={isDisabled}>{options[optKey]}</option>
                })
            }
            </StyledAccessibleSelect>
            <div ref={dropdownWrapperRef}>
                <StyledCustomDropdown ref={customDropdownRef} aria-hidden={true} onClick={() => {!isDisabled && setIsOpen(!isOpen)}} {...styleProps}>
                    <StyledCurrentSelection>{isDisabled ? "" : placeholderText}</StyledCurrentSelection>
                    <StyledChevron {...styleProps}><IconL>expand_more</IconL></StyledChevron>
                </StyledCustomDropdown>
                <StyledList {...styleProps} isOpen={isOpen} >
                        {Object.keys(options).map(optKey => {
                            return <StyledOption key={optKey} onClick={() => {if (!isDisabled) {setValue(optKey); setIsOpen(false)}}} {...styleProps}>{options[optKey]}</StyledOption>
                        })}
                </StyledList>
            </div>
        </FormBase>
    );
}

export default DropdownFormBase;
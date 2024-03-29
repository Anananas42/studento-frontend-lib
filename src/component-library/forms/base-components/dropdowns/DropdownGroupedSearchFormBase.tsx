import { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { borderRadius, useThemeContext } from "../../../ThemeProvider";
import { IconL } from "../../../utilities/Icon";
import FormBase from "../../shared/FormBase";
import FormColors from "../../shared/FormColors";
import FormStyles from "../../shared/FormStyles";
import StyledAccessibleSelect, { IStyledSelect } from "./styled/StyledAccessibleSelect";
import { StyledChevron, StyledCustomDropdown, StyledGroupTitle, StyledList, StyledOption } from "./styled/StyledCustomDropdown";

const StyledCurrentInput = styled.input<IStyledSelect>`
    width: 100%;
    height: 100%;
    padding: 0;
    padding-right: 32px;
    font-size: ${FormStyles.fontSize};
    border: 0;
    border-radius: ${props => props.isOpen? `${props.borderRadius} ${props.borderRadius} 0 0` : props.borderRadius};
    outline: 0;
    background: transparent;
    color: ${props => props.placeholderFill};
    font-family: ${FormStyles.fontFamily};
    margin: 0;
    user-select: none;

    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
`;

interface IOptionGroups {
    [key: string]: {title: string, options: IOptions};
}

interface IOptions {
    [key: string]: string; // key in english, value in local language
};

interface IProps {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>> | ((value: string) => void);
    optionGroups: IOptionGroups;
    label: string;
    formId?: string;
    isHorizontal?: boolean;
    isCompact?: boolean;
    defaultNote?: string;
    errorMessage?: string;
    isDisabled?: boolean;
    isOptional?: boolean;
    width?: string;
};

const findClosestOption = (options: {[key: string]: string[][]}, input: string) => {
    if (!options || !input) return undefined;
    const len = options.insensitive.length;
    let i = 0;
    while (i < len && options.sensitive[i][1].substring(0, input.length) !== input) { i++; };
    if (i !== len) return options.sensitive[i][0];
    i = 0;
    while (i < len && options.insensitive[i][1].substring(0, input.length).toLowerCase() !== input.toLowerCase()) { i++; };
    return (i !== len) ? options.insensitive[i][0] : undefined;
}

const DropdownGroupedSearchFormBase:FC<IProps> = (props) => {
    const { value, setValue, optionGroups, formId, isDisabled, errorMessage, label, width, ...rest } = props;
    const { colors, languageMap } = useThemeContext();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [currOptionName, setCurrOptionName] = useState<string>();
    const [input, setInput] = useState<string>();
    const [guess, setGuess] = useState<string>();
    const inputRef = useRef<any>();
    const dropdownWrapperRef = useRef<any>();
    const listRef = useRef<any>();
    const allOptions = useRef<{[key: string]: string}>({});
    const allOptionsSorted = useRef<{[key: string]: string[][]}>({});

    const placeholderFill = !input && !value ? FormColors.Default.placeholder : colors.fill;
    const styleProps = { borderRadius, errorMessage, fill: colors.fill, placeholderFill, isOpen, isDisabled, width };

    useEffect(() => {
        const optionsUnsorted = Object.values(optionGroups).flatMap(group => {
            return Object.keys(group.options).map(optKey => [optKey, group.options[optKey]]);
        });

        allOptions.current = Object.fromEntries(optionsUnsorted);

        allOptionsSorted.current = {sensitive: optionsUnsorted.sort((a, b) => a[1] <= b[1] ? -1 : 1),
             insensitive: optionsUnsorted.sort((a, b) => a[1].toLowerCase() <= b[1].toLowerCase() ? -1 : 1)};
        
        const checkClickOutside = (e: any) => {
            if (dropdownWrapperRef.current === null) {
                window.removeEventListener('click', checkClickOutside);
                return;
            }
    
            if (!dropdownWrapperRef.current.contains(e.target)) {
                setIsOpen(false);
                setGuess(undefined);
                setInput(undefined);
            }
        }

        dropdownWrapperRef && window.addEventListener('click', checkClickOutside);
        
        return () => {
            window.removeEventListener('click', checkClickOutside);
        }
    }, [optionGroups]);

    useEffect(() => {
        setInput(allOptions.current[value]);
        setCurrOptionName(allOptions.current[value]);
    }, [value, setInput, setCurrOptionName]);

    const processInput = (input: string) => {
        if (allOptionsSorted.current && input) {
            setGuess(findClosestOption(allOptionsSorted.current, input));
        }
        setInput(input);
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (isDisabled) {
            return;
        }

        if (e.key === "Enter") {
            if (guess) {
                setValue(guess);
                setInput(allOptions.current[guess]);
                setCurrOptionName(allOptions.current[guess]);
                setIsOpen(false);
                setGuess(undefined);
                inputRef.current.blur();
            }else{
                if (!input) {
                    setValue("");
                    setInput("");
                    setCurrOptionName("");
                }else{
                    setInput(allOptions.current[value]);
                }
                setIsOpen(false);
                inputRef.current.blur();
            }
        }

        if (e.key === "Escape") {
            setInput(allOptions.current[value]);
            setIsOpen(false);
            setGuess(undefined);
            inputRef.current.blur();
        }
    }

    return (
        <FormBase formId={formId} label={label} isDisabled={isDisabled} errorMessage={errorMessage} width={width} {...rest}>
            <StyledAccessibleSelect aria-labelledby={label} value={value} onChange={(e) => {setValue(e.target.value)}} id={formId ? formId : label} disabled={isDisabled} {...styleProps}>
                {Object.values(optionGroups).map(group => {
                    return Object.keys(group.options).map(optKey => {
                        return <option key={optKey} value={optKey} onClick={() => setCurrOptionName(group.options[optKey])} disabled={isDisabled}>{group.options[optKey]}</option>
                    })
                })}
            </StyledAccessibleSelect>
            <div ref={dropdownWrapperRef}>
                <StyledCustomDropdown aria-hidden={true} onClick={() => {if (!isDisabled) {setInput(""); setIsOpen(!isOpen); setGuess(undefined);}}} {...styleProps}>
                    <StyledCurrentInput ref={inputRef} value={isDisabled ? "" : (isOpen ? input : (currOptionName ? currOptionName : languageMap.Generic.drpDwnPlaceholder))}
                     onClick={() => {if (!isDisabled) {setIsOpen(!isOpen); isOpen && inputRef.current.blur()}}}
                     onChange={e => processInput(e.target.value)} onKeyDown={onKeyDown} {...styleProps} disabled={isDisabled} />
                    <StyledChevron {...styleProps}><IconL>expand_more</IconL></StyledChevron>
                </StyledCustomDropdown>
                <StyledList ref={listRef} {...styleProps} isOpen={isOpen} >
                        {Object.values(optionGroups).map(group => {
                            return (
                                <div key={group.title + "div"}>
                                    <StyledGroupTitle key={group.title} {...styleProps}>{group.title}</StyledGroupTitle>
                                    {Object.keys(group.options).map(optKey => {
                                        return (
                                        <OptionFocusable key={optKey} guess={guess} value={optKey} listRef={listRef} className={optKey === guess ? "guessed" : ""}
                                         onClick={() => {if (!isDisabled) {setValue(optKey); setCurrOptionName(group.options[optKey]); setIsOpen(false)}}} {...styleProps}>
                                             {group.options[optKey]}
                                        </OptionFocusable>
                                            )
                                    })}
                                </div>
                            )
                        })}
                </StyledList>
            </div>
        </FormBase>
    );
}

const OptionFocusable:FC<any> = (props) => {
    const { guess, value, listRef, children, ...rest } = props;
    const optionRef = useRef<any>();

    useEffect(() => {
        if (guess && guess === value) {
            optionRef.current.focus();
            listRef.current.scrollTo(0, optionRef.current.offsetTop);
        }
    }, [guess, listRef, value]);

    return (
        <StyledOption ref={optionRef} {...rest} >
            {children}
        </StyledOption>
    )
}

export default DropdownGroupedSearchFormBase;
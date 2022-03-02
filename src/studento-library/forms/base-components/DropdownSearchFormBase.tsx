import { createRef, FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useThemeContext } from "../../ThemeProvider";
import { IconL } from "../../utilities/Icon";
import FormBase from "../shared/FormBase";
import FormColors from "../shared/FormColors";

interface IStyledSelect {
    errorMessage?: string;
    borderRadius: string;
    fill: string;
    placeholderFill: string;
    isOpen?: boolean;
}

const StyledAccessibleSelect = styled.select<IStyledSelect>`
    position: relative;
    width: 100%;
    font-size: 20px;
    line-height: 20px;
    height: 42px;
    padding: 8px;
    border: 1px solid ${props => props.errorMessage ? FormColors.Error.border : FormColors.Default.border};
    border-radius: ${props => props.borderRadius};
    outline: 0;
    box-shadow: inset 0 4px 8px ${FormColors.Default.innerShadow};
    background-color: white;
    color: ${props => props.placeholderFill};
    font-family: 'Varela Round', sans-serif;
    margin: 0;

    -moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;

    option {
        color: ${props => props.fill};
    }

    :focus {
        box-shadow: inset 0 4px 8px ${FormColors.Active.innerShadow};
        border-color: ${FormColors.Active.border};
        outline: ${FormColors.Active.border} solid 1px;
        transition: box-shadow 0.2s ease-in-out;
    }

    @media (hover: hover) {
        :focus + div {
            display: none;
        }
    }
`;

const StyledCustomDropdown = styled.div<IStyledSelect>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    font-size: 20px;
    line-height: 20px;
    height: 42px;
    padding: 0;
    border: 1px solid ${props => props.errorMessage ? FormColors.Error.border : (props.isOpen ? FormColors.Active.border : FormColors.Default.border)};
    border-radius: ${props => props.isOpen? `${props.borderRadius} ${props.borderRadius} 0 0` : props.borderRadius};
    outline: ${props => props.isOpen ? `${FormColors.Active.border} solid 1px` : 0};
    box-shadow: inset 0 4px 8px ${props => props.isOpen ? FormColors.Active.innerShadow : FormColors.Default.innerShadow};
    background-color: white;
    color: ${props => props.placeholderFill};
    font-family: 'Varela Round', sans-serif;
    margin: 0;
    user-select: none;
    transition: ${props => props.isOpen ? "box-shadow 0.2s ease-in-out" : ""};

    -moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;


    @media (hover: hover) {
        display: block;
    }

`;

const StyledList = styled.div<IStyledSelect>`
    position: absolute;
    margin: 1px 0 0 0;
    padding: 0;
    width: 100%;
    background-color: white;
    color: ${props => props.fill};
    border: 1px solid ${FormColors.Default.border};
    border-top: 0;
    outline: 1px solid ${FormColors.Default.border};
    border-radius: 0 0 ${props => props.borderRadius} ${props => props.borderRadius};
    box-shadow: 2px 8px 16px -2px ${FormColors.Default.dropdownShadow};
    user-select: none;
    overflow-y: auto;
    max-height: 400px;
    z-index: 5;

    display: ${props => props.isOpen? "block" : "none"};
`;

const StyledOption = styled.div<IStyledSelect>`
    font-size: 20px;
    line-height: 20px;
    padding: 12px 16px;
    border-bottom: 1px solid ${FormColors.Default.border};

    :hover {
        background: linear-gradient(45deg, ${FormColors.Default.hoverBg1}, ${FormColors.Default.hoverBg2});
    }

    &:last-child {
        border: 0;
    }

    &.guessed {
        background: linear-gradient(45deg, ${FormColors.Default.hoverBg1}, ${FormColors.Default.hoverBg2});
    }
`;

const StyledGroupTitle = styled.div<IStyledSelect>`
    font-size: 17px;
    line-height: 17px;
    font-weight: bold;
    color: ${FormColors.Default.placeholder};
    padding: 8px 16px;
    background-color: ${FormColors.Default.innerShadow};

`;

const StyledCurrentInput = styled.input<IStyledSelect>`
    width: 88%;
    height: 100%;
    padding: 0;
    line-height: 20px;
    font-size: 20px;
    border: 0;
    border-radius: ${props => props.isOpen? `${props.borderRadius} ${props.borderRadius} 0 0` : props.borderRadius};
    outline: 0;
    background: transparent;
    color: ${props => props.placeholderFill};
    font-family: 'Varela Round', sans-serif;
    margin: 0 0 0 16px;
    user-select: none;

    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
`;

const StyledChevron = styled.div<IStyledSelect>`
    position: absolute;
    color: ${props => props.fill};
    top: -4px;
    right: 0;
    user-select: none;
    transform: ${props => props.isOpen ? "rotate(180deg)" : "rotate(0deg)"};
    transition: transform 0.25s ease-in-out;
    pointer-events: none;
`;

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

const DropdownSearchFormBase:FC<IProps> = (props) => {
    const { value, setValue, optionGroups, formId, isDisabled, errorMessage, label, ...rest } = props;
    const { borderRadius, colors, languageMap } = useThemeContext();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [currOptionName, setCurrOptionName] = useState<string>();
    const [input, setInput] = useState<string>();
    const [guess, setGuess] = useState<string>();
    const inputRef = useRef<any>();
    const dropdownWrapperRef = useRef<any>();
    const listRef = useRef<any>();
    const allOptions = useRef<{[key: string]: string}>({});
    const allOptionsSorted = useRef<{[key: string]: string[][]}>({});

    const placeholderFill = !input && value === "default" ? FormColors.Default.placeholder : colors.fill;
    const styleProps = { borderRadius, errorMessage, fill: colors.fill, placeholderFill, isOpen };

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
    }, []);

    const processInput = (input: string) => {
        if (allOptionsSorted.current && input) {
            setGuess(findClosestOption(allOptionsSorted.current, input));
        }
        setInput(input);
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if (guess) {
                setValue(guess);
                setInput(allOptions.current[guess]);
                setCurrOptionName(allOptions.current[guess]);
                setIsOpen(false);
                setGuess(undefined);
                inputRef.current.blur();
            }else{
                setInput(allOptions.current[value]);
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
        <FormBase formId={formId} label={label} isDisabled={isDisabled} errorMessage={errorMessage} {...rest}>
            <StyledAccessibleSelect aria-labelledby={label} value={value} onChange={(e) => {setValue(e.target.value)}} id={formId ? formId : label} {...styleProps}>
                {Object.values(optionGroups).map(group => {
                    return Object.keys(group.options).map(optKey => {
                        return <option key={optKey} value={optKey} onClick={() => setCurrOptionName(group.options[optKey])}>{group.options[optKey]}</option>
                    })
                })}
            </StyledAccessibleSelect>
            <div ref={dropdownWrapperRef}>
                <StyledCustomDropdown aria-hidden={true} onClick={() => {setInput(""); setIsOpen(!isOpen); setGuess(undefined);}} {...styleProps}>
                    <StyledCurrentInput ref={inputRef} value={isOpen ? input : (currOptionName ? currOptionName : languageMap.Generic.drpDwnPlaceholder)}
                     onClick={() => {setIsOpen(!isOpen); isOpen && inputRef.current.blur()}}
                     onChange={e => processInput(e.target.value)} onKeyDown={onKeyDown} {...styleProps} />
                </StyledCustomDropdown>
                <StyledList ref={listRef} {...styleProps} isOpen={isOpen} >
                        {Object.values(optionGroups).map(group => {
                            return (
                                <div key={group.title + "div"}>
                                    <StyledGroupTitle key={group.title} {...styleProps}>{group.title}</StyledGroupTitle>
                                    {Object.keys(group.options).map(optKey => {
                                        return (
                                        <OptionFocusable key={optKey} guess={guess} value={optKey} listRef={listRef} className={optKey === guess ? "guessed" : ""}
                                         onClick={() => {setValue(optKey); setCurrOptionName(group.options[optKey]); setIsOpen(false)}} {...styleProps}>
                                             {group.options[optKey]}
                                        </OptionFocusable>
                                            )
                                    })}
                                </div>
                            )
                        })}
                    </StyledList>
                <StyledChevron {...styleProps}><IconL>expand_more</IconL></StyledChevron>
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
    }, [guess]);

    return (
        <StyledOption ref={optionRef} {...rest} >
            {children}
        </StyledOption>
    )
}

export default DropdownSearchFormBase;
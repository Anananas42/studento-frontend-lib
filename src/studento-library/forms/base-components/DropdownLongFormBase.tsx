import { FC, useEffect, useRef, useState } from "react";
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
    margin: 0;
    padding: 0;
    width: 100%;
    background-color: white;
    color: ${props => props.fill};
    border: 1px solid ${FormColors.Default.border};
    outline: 1px solid ${FormColors.Default.border};
    border-radius: 0 0 ${props => props.borderRadius} ${props => props.borderRadius};
    user-select: none;
    overflow-y: auto;
    max-height: 400px;

    display: ${props => props.isOpen? "block" : "none"};
`;

const StyledOption = styled.div<IStyledSelect>`
    font-size: 20px;
    line-height: 20px;
    padding: 16px;
    border-bottom: 1px solid ${FormColors.Default.border};

    :hover {
        background: linear-gradient(45deg, ${FormColors.Default.hoverBg1}, ${FormColors.Default.hoverBg2});
    }

    &:last-child {
        border: 0;
    }
`;

const StyledGroupTitle = styled.div<IStyledSelect>`
    font-size: 17px;
    line-height: 17px;
    font-weight: bold;
    color: ${FormColors.Default.placeholder};
    padding: 8px 16px;
    border-bottom: 1px solid ${FormColors.Default.border};
    border-top: 1px solid ${FormColors.Default.border};
    background-color: ${FormColors.Default.innerShadow};
`;

const StyledCurrentSelection = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px 0 0 16px;
    line-height: 20px;
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

const DropdownLongFormBase:FC<IProps> = (props) => {
    const { value, setValue, optionGroups, formId, isDisabled, errorMessage, label, ...rest } = props;
    const { borderRadius, colors } = useThemeContext();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [currOptionName, setCurrOptionName] = useState<string>("Choose one");
    const customDropdownRef = useRef<any>();

    const placeholderFill = value === "default" ? FormColors.Default.placeholder : colors.fill;
    const styleProps = { borderRadius, errorMessage, fill: colors.fill, placeholderFill, isOpen };

    useEffect(() => {
        const close = () => setIsOpen(false);
        window.addEventListener('click', close);

        return () => {
            window.removeEventListener('click', close);
        }
    }, []);

    const restrictEvent = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();
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
            <StyledCustomDropdown ref={customDropdownRef} aria-hidden={true} onClick={(e) => {restrictEvent(e); setIsOpen(!isOpen)}} {...styleProps}>
                <StyledCurrentSelection>{currOptionName}</StyledCurrentSelection>
            </StyledCustomDropdown>
            <StyledList {...styleProps} isOpen={isOpen} className={isOpen ? "open" : "closed"}>
                    {Object.values(optionGroups).map(group => {
                        return (
                            <div key={group.title + "div"}>
                                <StyledGroupTitle key={group.title} onClick={e => restrictEvent(e)} {...styleProps}>{group.title}</StyledGroupTitle>
                                {Object.keys(group.options).map(optKey => {
                                    return <StyledOption key={optKey} onClick={() => {setValue(optKey); setCurrOptionName(group.options[optKey])}} {...styleProps}>{group.options[optKey]}</StyledOption>
                                })}
                            </div>
                        )
                    })}
                </StyledList>
            <StyledChevron {...styleProps}><IconL>expand_more</IconL></StyledChevron>
        </FormBase>
    );
}

export default DropdownLongFormBase;
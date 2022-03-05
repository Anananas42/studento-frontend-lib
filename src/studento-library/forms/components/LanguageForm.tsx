import { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CloseColors from "../../buttons/colors/CloseColors";
import { useThemeContext } from "../../ThemeProvider";
import { Language } from "../../themes/ThemeLanguage";
import { IconL, IconM } from "../../utilities/Icon";
import { StyledOption } from "../base-components/dropdowns/styled/StyledCustomDropdown";
import FormColors from "../shared/FormColors";

interface IStyledProps {
    borderRadius: string;
    fill: string;
    isOpen?: boolean;
    width?: string;
};

const StyledLanguageForm = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
`;

const StyledDropdown = styled.div<IStyledProps>`
    border-radius: ${props => props.borderRadius};
    color: ${CloseColors.Default.txt};
    background-color: ${CloseColors.Default.bg};
    font-size: 20px;
    line-height: 20px;
    padding: 17px 0 15px 16px;
    width: fit-content;
    height: 40px;
    display: flex;
    flex-flow: row;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    border: none;

    :hover {
        background-color: ${CloseColors.Hover.bg};
    }

    :active {
        background-color: ${CloseColors.Active.bg};
    }

    div {
        user-select: none;
        padding-bottom: 1px;
    }
`;

const StyledList = styled.div<IStyledProps>`
    position: absolute;
    margin: 0;
    top: 42px;
    padding: 0;
    width: ${props => props.width ? props.width : "100%"};
    background-color: white;
    color: ${props => props.fill};
    border: 1px solid ${FormColors.Default.border};
    border-top: 0;
    outline: 1px solid ${FormColors.Default.border};
    border-radius: ${props => props.borderRadius} ${props => props.borderRadius};
    box-shadow: 2px 8px 16px -2px ${FormColors.Default.dropdownShadow};
    user-select: none;
    overflow-y: auto;
    max-height: 400px;
    z-index: 5;

    display: ${props => props.isOpen? "block" : "none"};
`;

type IOption = {
    [key in Language]: string;
};

const LanguageForm:FC = () => {
    const { borderRadius, colors, language, setLanguage } = useThemeContext();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownWrapperRef = useRef<any>();

    const options:IOption = {en: "English", cz: "Čeština"};

    const styleProps = { borderRadius, fill: colors.fill, placeholderFill: FormColors.Default.placeholder };

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

    return (
        <StyledLanguageForm ref={dropdownWrapperRef}>
            <StyledDropdown aria-hidden={true} onClick={() => setIsOpen(!isOpen)} {...styleProps}>
                <div>{language.toUpperCase()}</div>
                <IconL>expand_more</IconL>
            </StyledDropdown>
            <StyledList {...styleProps} isOpen={isOpen} width={"120px"}>
                    {(Object.keys(options) as Language[]).map(optKey => {
                        return <StyledOption key={optKey} onClick={() => {setLanguage(optKey); setIsOpen(false)}} {...styleProps}>{options[optKey]}</StyledOption>
                    })}
            </StyledList>
        </StyledLanguageForm>
    )
}

export default LanguageForm;
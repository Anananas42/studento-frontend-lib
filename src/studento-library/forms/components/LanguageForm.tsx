import { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useThemeContext } from "../../ThemeProvider";
import { Language } from "../../themes/ThemeLanguage";
import { IconL } from "../../utilities/Icon";
import { StyledChevron, StyledList, StyledOption } from "../base-components/dropdowns/styled/StyledCustomDropdown";
import FormColors from "../shared/FormColors";

const StyledLanguageForm = styled.div`
    

`;

const StyledLanguageDropdown = styled.select`
    
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
        <StyledLanguageForm>
            <div ref={dropdownWrapperRef}>
                <StyledLanguageDropdown aria-hidden={true} onClick={() => setIsOpen(!isOpen)} {...styleProps}>
                    <div>{language}</div>
                    <StyledChevron {...styleProps}><IconL>expand_more</IconL></StyledChevron>
                </StyledLanguageDropdown>
                <StyledList {...styleProps} isOpen={isOpen} >
                        {(Object.keys(options) as Language[]).map(optKey => {
                            return <StyledOption key={optKey} onClick={() => {setLanguage(optKey); setIsOpen(false)}} {...styleProps}>{options[optKey]}</StyledOption>
                        })}
                </StyledList>
            </div>
        </StyledLanguageForm>
    )
}

export default LanguageForm;
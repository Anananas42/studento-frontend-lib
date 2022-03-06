import { FC, useState } from "react";
import styled from "styled-components";
import TextColors from "../../buttons/colors/TextColors";
import { useThemeContext } from "../../ThemeProvider";
import { Language } from "../../themes/ThemeLanguage";
import { IconL } from "../../utilities/Icon";
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
    position: relative;
    border-radius: ${props => props.borderRadius};
    color: ${TextColors.Default.txt};
    background-color: ${TextColors.Default.bg};
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
    user-select: none;

    :hover {
        background-color: ${TextColors.Hover.bg};
    }

    :active {
        background-color: ${TextColors.Active.bg};
    }

    > div:nth-child(2) {
        padding-bottom: 1px;
    }
`;

const StyledList = styled.div<IStyledProps>`
    position: absolute;
    display: none;
    margin: 0;
    left: 0;
    top: 100%;
    width: ${props => props.width ? props.width : "100%"};
    background-color: white;
    color: ${props => props.fill};
    border: 1px solid ${TextColors.Hover.bg};
    border-top: 0;
    outline: 1px solid ${TextColors.Hover.bg};
    border-radius: ${props => props.borderRadius};
    box-shadow: 2px 8px 16px -2px ${FormColors.Default.dropdownShadow};
    user-select: none;
    overflow-y: auto;
    max-height: 400px;
    z-index: 5;

    &.open {
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        padding: 8px;
    }

    > div {
        padding: 12px 32px 12px 16px;
        border-radius: ${props => props.borderRadius};

        :hover {
            background-color: ${TextColors.Hover.bg};
        }

        :active {
            background-color: ${TextColors.Active.bg};
        }

    }

`;

type IOption = {
    [key in Language]: string;
};

const LanguageForm:FC = () => {
    const { borderRadius, colors, language, setLanguage } = useThemeContext();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const options:IOption = {en: "English", cz: "Česky"};

    const styleProps = { borderRadius, fill: colors.fill, placeholderFill: FormColors.Default.placeholder };

    return (
        <StyledLanguageForm>
            <StyledDropdown aria-hidden={true} {...styleProps} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                <div>{language.toUpperCase()}</div>
                <IconL>expand_more</IconL>
                <StyledList {...styleProps} width={"fit-content"} className={isOpen ? "open" : "closed"}>
                    {(Object.keys(options) as Language[]).map(optKey => {
                        return <div key={optKey} onClick={() => {setLanguage(optKey); setIsOpen(false)}}>{options[optKey]}</div>
                    })}
                </StyledList>
            </StyledDropdown>
        </StyledLanguageForm>
    )
}

export default LanguageForm;
import { FC } from "react";
import styled from "styled-components";
import TextColors from "../component-library/buttons/colors/TextColors";
import { BtnOutlineS } from "../component-library/buttons/components";
import FormColors from "../component-library/forms/shared/FormColors";
import { borderRadius, useThemeContext } from "../component-library/ThemeProvider";
import { Icon, IconL, IconM, IconXL } from "../component-library/utilities/Icon";

interface IStyleProps {
    fill: string;
    borderRadius: string;
    sectionShadow: string;
    primary: string;
    primaryAlt: string;
    isChosenEmpty: boolean;
    height?: string;
}

const StyledTransferList = styled.div<IStyleProps>`
    color: ${props => props.fill};
    display: flex;
    align-items: stretch;
    height: ${props => props.height ? props.height : "calc(100% - 126px)"};
    gap: 24px;

    > div:nth-child(2) {
        align-self: center;
        user-select: none;
    }
`;

const StyledMiddle = styled.div<IStyleProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2rem;
    gap: 8px;

    button {
        visibility: ${props => props.isChosenEmpty ? "hidden" : "visible"};
    }
`;

const StyledList = styled.div<IStyleProps>`
    position: relative;
    border: 2px solid ${props => props.primary};
    border-radius: ${props => props.borderRadius};
    display: flex;
    flex-direction: column;
    width: 40ch;
    overflow-y: auto;
    overflow-x: hidden;

    > .icon {
        position: absolute;
        color: ${FormColors.Default.icon};
        user-select: none;
    }

    > .icon:nth-of-type(1) {
        top: -6px;
        left: -6px;
        pointer-events: none;
    }

    > .icon:nth-of-type(2) {
        visibility: hidden;
        top: -2px;
        right: -2px;

        :hover {
            color: ${FormColors.Active.icon};
            cursor: pointer;
        }

        &.visible {
            visibility: visible;
        }
    }
`;

const StyledListSearch = styled.input.attrs({ type: 'text'})<IStyleProps>`
    border: 2px solid ${FormColors.Default.border};
    outline: 0;
    box-shadow: inset 0 4px 8px ${FormColors.Default.innerShadow};
    margin: -2px -2px 8px -2px;
    padding: 8px 36px;
    font-size: 1.8rem;

    :focus {
        box-shadow: inset 0 4px 8px ${FormColors.Active.innerShadow};
        border-color: ${FormColors.Active.border};
        outline: none;
        transition: box-shadow 0.2s ease-in-out;
    }
`;

const StyledItem = styled.div<IStyleProps>`
    color: ${props => props.fill};
    border-radius: ${props => props.borderRadius};
    padding: 8px;
    margin: 0 8px;
    font-size: 1.6rem;
    user-select: none;
    display: flex;
    justify-content: space-between;

    > span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        > span:first-child {
            display: inline-block;
            min-width: 3ch;
        }
    }

    &:first-child {
        margin-top: 8px;
    }

    :hover {
        background-color: ${TextColors.Hover.bg};

        > div {
            visibility: visible;
        }
    }

    :active {
        background-color: ${TextColors.Active.bg};
    }

    > div {
        visibility: hidden;
        color: ${props => props.fill};
    }
`;

const StyledItemRemove = styled(StyledItem)`
    > div {
        visibility: visible;
    }
`;

export interface IItem {
    id: number,
    name: string,
    [key: string]: any,
}

interface IProps {
    availableItems: Array<IItem>;
    chosenItems: Array<IItem>;
    setChosenItems: React.Dispatch<React.SetStateAction<IItem[]>>;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    height?: string;
}

const TransferList:FC<IProps> = (props) => {
    const { availableItems, chosenItems, setChosenItems, search, setSearch, height } = props;
    const { colors } = useThemeContext();
    const styleProps = { fill: colors.fill, borderRadius, sectionShadow: colors.sectionShadow, primary: colors.primary, primaryAlt: colors.primaryAlt, isChosenEmpty: chosenItems.length === 0, height };

    return (
        <>
            <StyledTransferList {...styleProps}>
                <StyledList {...styleProps}>
                    <IconL>search</IconL>
                    <IconM className={search.length > 0 ? "visible" : ""} onClick={() => setSearch("")}>cancel</IconM>
                    <StyledListSearch {...styleProps} value={search} onChange={e => setSearch(e.target.value)}/>
                    {availableItems.filter(d => !chosenItems.includes(d)).map(i => {
                        return (
                            <StyledItem key={i.id} {...styleProps} onClick={() => setChosenItems([...chosenItems, i])}>
                                <span>{i.name}</span>
                                <Icon fontSize={"2rem"} height={"2rem"}>add</Icon>
                            </StyledItem>
                        )
                    })}
                </StyledList>
                <StyledMiddle {...styleProps}>
                    <span>{chosenItems.length}</span>
                    <IconXL>arrow_forward</IconXL>
                    <BtnOutlineS icon={"close"} onClick={() => setChosenItems([])}>Clear All</BtnOutlineS>
                </StyledMiddle>
                <StyledList {...styleProps}>
                    {chosenItems.sort((a, b) => {return a.name < b.name ? -1 : 1}).map((i, id) => {
                        return (
                            <StyledItemRemove key={i.id} {...styleProps} onClick={() => setChosenItems(chosenItems.filter(ch => ch.id !== i.id))}>
                                <span>
                                    <span>{id+1}.</span>
                                    <span>{i.name}</span>
                                </span>
                                <Icon fontSize={"2rem"} height={"2rem"}>close</Icon>
                            </StyledItemRemove>
                        )
                    })}
                </StyledList>
            </StyledTransferList>
        </>
    )
};

export default TransferList;
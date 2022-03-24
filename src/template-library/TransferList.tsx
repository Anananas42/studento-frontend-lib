import { FC, useState } from "react";
import styled from "styled-components";
import TextColors from "../component-library/buttons/colors/TextColors";
import { borderRadius, useThemeContext } from "../component-library/ThemeProvider";
import { Icon, IconXL } from "../component-library/utilities/Icon";

interface IStyleProps {
    fill: string;
    borderRadius: string;
    sectionShadow: string;
    primary: string;
    primaryAlt: string;
}

const StyledTransferList = styled.div<IStyleProps>`
    padding: 8px;
    color: ${props => props.fill};
    display: flex;
    align-items: stretch;
    height: calc(100% - 126px);
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
`;

const StyledList = styled.div<IStyleProps>`
    border: 2px solid ${props => props.primary};
    border-radius: ${props => props.borderRadius};
    display: flex;
    flex-direction: column;
    width: 50ch;
    padding: 8px;
    overflow-y: auto;
    overflow-x: hidden;
`;

const StyledItem = styled.div<IStyleProps>`
    color: ${props => props.fill};
    border-radius: ${props => props.borderRadius};
    padding: 8px;
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

    :hover {
        background-color: ${TextColors.Hover.bg};

        > div {
            visibility: visible;
        }
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

const dummyItems = [
    {
        id: 42,
        name: "Christopher Nolan",
    },
    {
        id: 43,
        name: "Jonathan Nolan",
    },
    {
        id: 45,
        name: "Milos Forman",
    },
    {
        id: 85,
        name: "Ridley Scott",
    },
    {
        id: 48,
        name: "Bogdan Random",
    },
    {
        id: 25,
        name: "Your Name",
    },
    {
        id: 35,
        name: "What is",
    },
    {
        id: 12,
        name: "Wow Random",
    },
    {
        id: 13,
        name: "Incredible Name",
    },
    {
        id: 14,
        name: "Shrek Swamply",
    },
    {
        id: 19,
        name: "Wow Random",
    },
    {
        id: 2,
        name: "Incredible Very",
    },
    {
        id: 3,
        name: "Shrek Greene",
    },
    {
        id: 4,
        name: "Shrek Big",
    },
    {
        id: 100,
        name: "Name Name",
    },
    {
        id: 1001,
        name: "Swamply Swamply",
    },
    {
        id: 1002,
        name: "Wow Uga",
    },
    {
        id: 10002,
        name: "Incredible Incredible",
    },
    {
        id: 100003,
        name: "Shrek Shrek",
    },
    {
        id: 4300,
        name: "Jonathan Jonathan",
    },
    {
        id: 4500,
        name: "Milos Milos",
    },
    {
        id: 8500,
        name: "Ridley Ridley",
    },
    {
        id: 2243,
        name: "Nolan Nolan",
    },
    {
        id: 2245,
        name: "Forman Forman",
    },
    {
        id: 2285,
        name: "Scott Scott",
    },
    {
        id: 34444,
        name: "Shrek Scott",
    },
    {
        id: 4444,
        name: "Scott Big",
    },
    {
        id: 10440,
        name: "Name Forman",
    },
    {
        id: 10041,
        name: "Nolan Swamply",
    },
];

interface IItem {
    id: number,
    name: string,
    [key: string]: any,
}

const TransferList:FC = (props) => {
    const { colors } = useThemeContext();
    const styleProps = { fill: colors.fill, borderRadius, sectionShadow: colors.sectionShadow, primary: colors.primary, primaryAlt: colors.primaryAlt };

    const [chosenItems, setChosenItems] = useState<Array<IItem>>([]); // Will be managed by parent

    return (
        <StyledTransferList {...styleProps}>
            <StyledList {...styleProps}>
                {dummyItems.filter(d => !chosenItems.includes(d)).map(i => {
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
    )
};

export default TransferList;
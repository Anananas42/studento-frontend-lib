import { FC } from "react";
import styled from "styled-components";
import TextColors from "../../buttons/colors/TextColors";
import { useThemeContext } from "../../ThemeProvider";
import { Icon } from "../../utilities/Icon";
import StyledLink from "../../utilities/StyledLink";

interface IStyleProps {
    fill: string;
    fillSecondary: string;
    borderRadius: string;
    sectionShadow: string;
    primary: string;
}

const StyledDropdown = styled.div<IStyleProps>`
    display: flex;
    align-items: center;
    position: relative;
    color: ${props => props.fill};
    border-radius: ${props => props.borderRadius} ${props => props.borderRadius} 0 0;
    padding: 8px 16px;
    user-select: none;
    cursor: pointer;

    :hover > :last-child {
        display: grid;
        grid-template-rows: repeat(4, 1fr);
        grid-auto-flow: column;
    }
`;

const StyledDropdownHighlight = styled.div<IStyleProps>`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: ${props => props.borderRadius} ${props => props.borderRadius} 0 0;

    :hover {
        background-color: ${TextColors.Hover.bg};
    }

`;

const StyledList = styled.div<IStyleProps>`
    position: absolute;
    display: none;
    top: 100%;
    left: 0;
    background-color: #fff;
    width: fit-content;
    height: fit-content;
    padding: 16px;
    border-radius: 0 16px 16px 16px;
    box-shadow: 2px 2px 16px -2px ${props => props.sectionShadow};
    cursor: default;
`;

const StyledTile = styled.div<IStyleProps>`
    display: flex;
    align-items: center;
    width: 480px;
    height: 98px;
    border-radius: ${props => props.borderRadius};
    padding: 24px;

    > div:first-child {
        width: fit-content;
        height: fit-content;
        padding: 0 16px 0 0;
    }

    > div:last-child {
        margin-left: auto;
        opacity: 0;
        color: ${props => props.fill};
        transform: translateX(-15px);
        transition: all 0.2s ease-in-out;
    }

    :hover {
        background-color: ${TextColors.Hover.bg};

        > div:last-child {
            opacity: 1;
            color: ${props => props.primary};
            transform: translateX(0);
        }
    }

    :active {
        background-color: ${TextColors.Active.bg};
    }
`;

const StyledInformation = styled.div<IStyleProps>`
    display: flex;
    flex-direction: column;

    > div:first-child {
        font-size: 20px;
    }

    > div:last-child {
        font-size: 16px;
        font-weight: 100;
        color: ${props => props.fillSecondary};
    }
`;

export interface IFeatureTiles {
    [key: string]: {
        title: string;
        description?: string;
        url: string;
        icon: string;
    };
}

interface IProps {
    featureTiles: IFeatureTiles;
}

const NavFeatureTiles:FC<IProps> = (props) => {
    const { featureTiles } = props;
    const { colors, borderRadius } = useThemeContext();
    const IstyleProps = { fill: colors.fill, fillSecondary: colors.fillSecondary, borderRadius, sectionShadow: colors.sectionShadow, primary: colors.primary };

    return (
        <StyledDropdown {...IstyleProps}>
            <StyledDropdownHighlight {...IstyleProps} />
            <Icon fontSize={"32px"} width={'32px'} height={'32px'}>apps</Icon>
            <Icon fontSize={"27px"} width={'27px'} height={'27px'}>expand_more</Icon>
            <StyledList {...IstyleProps}>
                {Object.keys(featureTiles).map(key => {
                    const tile = featureTiles[key];
                    return (
                        <StyledLink to={tile.url} key={key}>
                            <StyledTile {...IstyleProps}>
                                <Icon fontSize={"32px"} width={'32px'} height={'32px'}>{tile.icon}</Icon>
                                <StyledInformation {...IstyleProps}>
                                    <div>{tile.title}</div>
                                    <div>{tile.description}</div>
                                </StyledInformation>
                                <Icon fontSize={"32px"} width={'32px'} height={'32px'}>arrow_forward</Icon>
                            </StyledTile>
                        </StyledLink>
                    )
                })}
            </StyledList>
        </StyledDropdown>
    )
};

export default NavFeatureTiles;
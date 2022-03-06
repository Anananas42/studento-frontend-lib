import { FC } from "react";
import styled from "styled-components";
import TextColors from "../../buttons/colors/TextColors";
import { useThemeContext } from "../../ThemeProvider";
import { Icon } from "../../utilities/Icon";

interface StyleProps {
    fill: string;
    fillSecondary: string;
    borderRadius: string;
    sectionShadow: string;
    primary: string;
}

const StyledDropdown = styled.div<StyleProps>`
    display: flex;
    align-items: center;
    position: relative;
    color: ${props => props.fill};
    border-radius: ${props => props.borderRadius} ${props => props.borderRadius} 0 0;
    padding: 8px 16px;
    user-select: none;
    cursor: pointer;

    :hover > :last-child {
        display: block;
    }
`;

const StyledDropdownHighlight = styled.div<StyleProps>`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: ${props => props.borderRadius} ${props => props.borderRadius} 0 0;

    :hover {
        background-color: ${TextColors.Hover.bg};
    }

    :active {
        background-color: ${TextColors.Active.bg};
    }
`

const StyledList = styled.div<StyleProps>`
    position: absolute;
    display: none;
    top: 100%;
    left: 0;
    background-color: #fff;
    width: 500px;
    height: fit-content;
    padding: 16px;
    border-radius: 0 16px 16px 16px;
    box-shadow: 2px 2px 8px -2px ${props => props.sectionShadow};
`;

const StyledTile = styled.div<StyleProps>`
    display: flex;
    align-items: center;
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

const StyledInformation = styled.div<StyleProps>`
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
    const styleProps = { fill: colors.fill, fillSecondary: colors.fillSecondary, borderRadius, sectionShadow: colors.sectionShadow, primary: colors.primary };

    return (
        <StyledDropdown {...styleProps}>
            <StyledDropdownHighlight {...styleProps} />
            <Icon fontSize={"32px"} width={'32px'} height={'32px'}>apps</Icon>
            <Icon fontSize={"27px"} width={'27px'} height={'27px'}>expand_more</Icon>
            <StyledList {...styleProps}>
                {Object.keys(featureTiles).map(key => {
                    const tile = featureTiles[key];
                    return (
                        <StyledTile key={key} {...styleProps}>
                            <Icon fontSize={"32px"} width={'32px'} height={'32px'}>school</Icon>
                            <StyledInformation {...styleProps}>
                                <div>{tile.title}</div>
                                <div>{tile.description}</div>
                            </StyledInformation>
                            <Icon fontSize={"32px"} width={'32px'} height={'32px'}>arrow_forward</Icon>
                        </StyledTile>
                    )
                })}
            </StyledList>
        </StyledDropdown>
    )
};

export default NavFeatureTiles;
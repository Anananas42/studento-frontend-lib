import { FC } from 'react';
import styled from 'styled-components';
import { useThemeContext } from '../ThemeProvider';

interface IconSizedProps {
    children: string;
    isDisabled?: boolean;
    isWhite?: boolean;
}

interface IconProps {
    children: string;
    fontSize: string;
    isDisabled?: boolean;
    isWhite?: boolean;
    width?: string;
    height?: string;
}

interface IStyledIcon {
    fill: string;
    fontSize: string;
}

interface IStyledWrapper {
    width?: string;
    height?: string;
}

const StyledIcon = styled.div<IStyledIcon>`
    color: ${props => props.fill};
    font-size: ${props => props.fontSize} !important;
`;

const StyledWrapper = styled.div<IStyledWrapper>`
    ${props => (props.width || props.height) && `
        display: inline-grid;
        place-items: center;
    `}
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
`;

const Icon:FC<IconProps> = (props) => {
    const { colors } = useThemeContext();

    let fill: string;

    if (props.isWhite || props.isDisabled) {
        if (props.isDisabled){
            fill = props.isWhite ? "rgba(255, 255, 255, 0.3)" : colors.fillDisabled;
        }else {
            fill = props.isWhite ? "#fff" : colors.fill;
        }
    }else {
        fill = "inherit";
    }

    return (
        <StyledWrapper width={props.width} height={props.height}>
            <StyledIcon className={"material-icons-round"} fill={fill} fontSize={props.fontSize}>
                {props.children}
            </StyledIcon>
        </StyledWrapper>
    )
}

export const IconXL:FC<IconSizedProps> = (props) => {
    return (
        <Icon {...props} fontSize={'48px'} width={'48px'} height={'48px'}>
            {props.children}
        </Icon>
    )
}

export const IconL:FC<IconSizedProps> = (props) => {
    return (
        <Icon {...props} fontSize={'27px'} width={'50px'} height={'50px'}>
            {props.children}
        </Icon>
    )
}

export const IconM:FC<IconSizedProps> = (props) => {
    return (
        <Icon {...props} fontSize={'23px'} width={'43px'} height={'43px'}>
            {props.children}
        </Icon>
    )
}

export const IconS:FC<IconSizedProps> = (props) => {
    return (
        <Icon {...props} fontSize={'21px'} width={'40px'} height={'40px'}>
            {props.children}
        </Icon>
    )
}
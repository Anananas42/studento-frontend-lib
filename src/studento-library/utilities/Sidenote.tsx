import { FC } from 'react';
import { IColorSet } from '../themes/ThemeColor';
import { useThemeContext } from '../ThemeProvider';
import styled from 'styled-components';

interface ISidenote {
    colors: IColorSet;
    borderRadius: string;
}

const StyledSidenote = styled.div<ISidenote>`
    border-radius: ${props => props.borderRadius};
    color: ${props => props.colors.descTxt};
    background-color: ${props => props.colors.descBg};
    width: 100%;
    max-width: 100%;
    height: fit-content;
    font-size: 17px;
    padding: 14px 28px;
    box-shadow: 2px 2px 8px -2px #3841473B;
`;

const Sidenote:FC = (props) => {
    const { colors, borderRadius } = useThemeContext();

    return (
        <StyledSidenote colors={colors} borderRadius={borderRadius}>
            { props.children }
        </StyledSidenote>
    )
}

export default Sidenote;
import { FC } from 'react';
import { IColorSet } from '../themes/ThemeColor';
import { useThemeContext } from '../ThemeProvider';
import styled from 'styled-components';

interface IDescription {
    colors: IColorSet;
    borderRadius: string;
}

const StyledDescription = styled.div<IDescription>`
    border-radius: ${props => props.borderRadius};
    color: ${props => props.colors.descTxt};
    background-color: ${props => props.colors.descBg};
    font-size: 17px;
    padding: 14px 28px;
    box-shadow: 2px 2px 8px -2px #3841473B;
`;

const Description:FC = (props) => {
    const { colors, borderRadius } = useThemeContext();

    return (
        <StyledDescription colors={colors} borderRadius={borderRadius}>
            { props.children }
        </StyledDescription>
    )
}

export default Description;
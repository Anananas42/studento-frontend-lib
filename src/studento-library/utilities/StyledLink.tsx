import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledLink = styled(Link)<any>`
    text-decoration: none;
    color: inherit;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: inherit;
    }
`;

export default (props:any) => <StyledLink {...props} />;
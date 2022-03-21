import { FC } from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    bottom: 0;
    width: 100%;
    margin-top: auto;
    height: 128px;
    max-height: 128px;
    padding: 32px;
    border-top: 2px solid rgba(69, 60, 48, 0.08);
    font-size: 2rem;
    color: rgba(69, 60, 48, 0.57);
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

const Footer:FC = (props) => {

    return (
        <StyledFooter>
            Studento © 2022
        </StyledFooter>
    )
};

export default Footer;
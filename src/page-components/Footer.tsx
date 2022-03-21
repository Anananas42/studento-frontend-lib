import { FC } from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
    bottom: 0;
    width: 100%;
    margin-top: auto;
    height: fit-content;
    max-height: fit-content;
    padding: 24px 0 40px 0;
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
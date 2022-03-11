import { FC } from "react";
import styled from "styled-components";

const StyledAdminFindMenu = styled.div`
    display: flex;
    gap: 64px;
    padding-top: 64px;
`

const AdminFindMenu:FC = () => {

    return (
        <StyledAdminFindMenu>
            admin find menu
        </StyledAdminFindMenu>
    );
}

export default AdminFindMenu;
import { FC } from "react";
import styled from "styled-components";
import AddMenu from "../../../page-components/school-management/add/AddMenu";
import RecentlyAdded from "../../../page-components/school-management/add/RecentlyAdded";

const StyledAdminAdd = styled.div`
    display: flex;
    gap: 64px;
    padding-top: 64px;
`

export const StyledAdminAddContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 1400px;
`;

const AdminAdd:FC = () => {

    return (
        <StyledAdminAdd>
            <RecentlyAdded />
            <AddMenu />
        </StyledAdminAdd>
    );
}

export default AdminAdd;
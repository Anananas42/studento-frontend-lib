import { FC } from "react";
import styled from "styled-components";
import AddMenu from "../../../template-library/school-management/AddMenu";
import RecentlyAdded from "../../../template-library/school-management/RecentlyAdded";

const StyledAdminAdd = styled.div`
    display: flex;
    gap: 64px;
    padding-top: 64px;
`

const AdminAdd:FC = () => {

    return (
        <StyledAdminAdd>
            <RecentlyAdded />
            <AddMenu />
        </StyledAdminAdd>
    );
}

export default AdminAdd;
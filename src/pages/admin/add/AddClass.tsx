import { FC } from "react";
import styled from "styled-components";
import ProgressLine from "../../../template-library/school-management/add/ProgressLine";

const StyledAdminAddClass = styled.div`
    display: flex;
    flex-direction: column;
    width: 1400px;
`;

const AdminAddClass:FC = () => {

    return ( 
        <StyledAdminAddClass>
            <ProgressLine />    
        </StyledAdminAddClass>
    );
}

export default AdminAddClass;
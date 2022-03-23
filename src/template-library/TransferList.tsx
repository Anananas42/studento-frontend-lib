import { FC } from "react";
import styled from "styled-components";
import FormColors from "../component-library/forms/shared/FormColors";
import { borderRadius } from "../component-library/ThemeProvider";

interface IStyleProps {
    
}

const StyledTransferList = styled.div<IStyleProps>`
    padding: 8px;
    border-radius: ${borderRadius};
    border: 2px solid ${FormColors.Default.border};
`;

const TransferList:FC = (props) => {

    return (
        <StyledTransferList>
            uga
        </StyledTransferList>
    )
};

export default TransferList;
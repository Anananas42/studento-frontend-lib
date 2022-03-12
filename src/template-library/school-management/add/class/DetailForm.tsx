import { FC, useState } from "react";
import styled from "styled-components";
import { TextFormBase } from "../../../../component-library/forms/base-components";

const StyledDetailForm = styled.div`
    width: 480px;
`;

const DetailForm:FC = () => {
    const [className, setClassName] = useState<string>("");
    

    return (
        <StyledDetailForm>
            <TextFormBase label={"Class name"} value={className} setValue={setClassName} placeholder={""} />
            
        </StyledDetailForm>
    );
}

export default DetailForm;
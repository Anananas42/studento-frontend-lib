import { ChangeEventHandler, FC } from "react";
import { useThemeContext } from "../../ThemeProvider";
import FormBase from "../shared/FormBase";
import FormColors from "../shared/FormColors";

interface IProps {
    value: string;
    onChange: ChangeEventHandler<any>;
    label: string;
    formId?: string;
    isHorizontal?: boolean;
    isCompact?: boolean;
    defaultNote?: string;
    errorMessage?: string;
    isDisabled?: boolean;
}

const SingleChoiceFormBase:FC<IProps> = (props) => {
    const { value, onChange, formId, isDisabled, errorMessage, label, ...rest } = props;
    const { borderRadius, colors } = useThemeContext();
    const styleProps = { borderRadius, errorMessage, fill: colors.fill, placeholderFill: value === "default" ? FormColors.Default.placeholder : colors.fill, primaryColor: colors.primary };

    return (
        <FormBase formId={formId} label={label} isDisabled={isDisabled} errorMessage={errorMessage} {...rest}>
            
        </FormBase>
    );
}

export default SingleChoiceFormBase;
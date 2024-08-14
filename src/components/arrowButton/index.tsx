import { ArrowBtn } from "./styles";

interface ArrowButtonProps {
    previousProject?: () => void;
    onClick?: () => void;
    isDisabled?: boolean;
    children: JSX.Element;
}

export const ArrowButton = (props: ArrowButtonProps) => {
    const { previousProject, onClick, isDisabled, children } = props;

    return (
        <ArrowBtn
            onClick={previousProject ?? onClick}
            isDisabled={isDisabled}
            disabled={isDisabled}
        >
            {children}
        </ArrowBtn>
    );
}

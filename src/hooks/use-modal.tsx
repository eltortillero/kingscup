import { useState } from "react"

type useModalType = {
    visibility: boolean;
    toggleVisibility: () => void;
}

export const useModal = (): useModalType => {
    const [visibility, setVisibility] = useState<boolean>(false);
    const toggleVisibility = (): void => setVisibility((currentVisibilityState) => !currentVisibilityState);
    return {
        visibility,
        toggleVisibility
    }
}
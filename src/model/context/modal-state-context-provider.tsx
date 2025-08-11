import { useState } from "react";
import { ModalStateContext } from "./modal-state-context";

export default function ModalStateContentProvider ({children} : {children : React.ReactNode}) {
    
    const modalState = useState<boolean>(false)

    return (
        <ModalStateContext.Provider value={modalState}>
            {children}
        </ModalStateContext.Provider>
    )

}
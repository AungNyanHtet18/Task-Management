import { useEffect, useRef } from "react"

export default function ModalDialog({title, show, children} : ModalProps) {
    
    const dialog = useRef<HTMLElement | null >(null)

    useEffect(()=>{
        
        if(dialog) {
           const current =  dialog.current 

           if(current) {
             
           }
        }

    },[show, dialog])
    
    return (
        <section className="modal fade" ref={dialog} >
            <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title">{title}</h3>
                </div>
            </div>

            <div className="modal-body">
                {children}
            </div>
        </section>
     )
}

type ModalProps = {
 title : string
 show : boolean
 children : React.ReactNode     
}

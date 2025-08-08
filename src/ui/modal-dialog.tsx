import { useEffect, useRef } from "react"

type Modal = {
     show: () => void
     hide: () => void
}

declare const bootstrap: { // interface type
     Modal: new(element: HTMLElement)=> Modal
}

export default function ModalDialog({title, show, children} : ModalProps) {
    
    const dialogRef = useRef<HTMLElement | null >(null)
    const modalRef = useRef<Modal | null >(null)

    useEffect(()=>{
        
        const current =  dialogRef.current //it refrence  <section className="modal fade" ref={dialogRef} > </section>

        if(current && !modalRef.current) {
            modalRef.current = new bootstrap.Modal(current)  //calling Bootstrap’s real constructor, which returns a real instance that has show() and hide() implemented.
        }

        if(show) {
             modalRef.current?.show()
        }else {
             modalRef.current?.hide()
        } 

    },[show, dialogRef, modalRef])
    
    return (
        <section className="modal fade" ref={dialogRef} >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title">{title}</h3>
                    </div>
                </div>

                <div className="modal-body">
                    {children}
                </div>
            </div>
        </section>
     )
}

type ModalProps = {
 title : string
 show : boolean
 children : React.ReactNode     
}

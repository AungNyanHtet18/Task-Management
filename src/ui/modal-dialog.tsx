import { useEffect, useRef } from "react"

type Modal = {
     show: () => void
     hide: () => void
}

//declare mean this variable exist at runtime and it will be provided from somewhere like CDM or script tag 
declare const bootstrap: { // interface type 
     Modal: new(element: HTMLElement, props : {backdrop? : 'static'})=> Modal //modal is the construtor function return modal instance
}

export default function ModalDialog({title, show, children, onHide, onSave} : ModalProps) {
    
    const dialogRef = useRef<HTMLElement | null >(null)
    const modalRef = useRef<Modal | null >(null)

    useEffect(()=>{
        
        const current =  dialogRef.current //it refrence  <section className="modal fade" ref={dialogRef} > </section>

        if(current && !modalRef.current) {
            modalRef.current = new bootstrap.Modal(current, {
                               backdrop : 'static'})  //calling Bootstrap’s real constructor, which returns a real instance that has show() and hide() implemented.
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

                    <div className="modal-body">
                        {children}
                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-secondary" onClick={onHide}>
                            <i className="bi-x"></i>Close
                        </button>

                        <button className="btn btn-primary" onClick={onSave}>
                            <i className="bi-check"></i>Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </section>
     )
}

type ModalProps = {
 title : string
 show : boolean
 onHide? : () => void
 onSave? : () => void
 children : React.ReactNode     
}

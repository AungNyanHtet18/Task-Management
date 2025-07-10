import { useForm } from "react-hook-form";
import { FormGroup } from "../../ui/form-group";
import Page from "../../ui/page";
import type { MemberEditForm } from "../../model/input/member-edit-form";
import { useSearchParams } from "react-router";
import { useEffect } from "react";
import { findMemberEditForm } from "../../model/client/member-client";

export default function MemberEdit() {

    const [queryParams] = useSearchParams() //to get variable from request
    const {register,handleSubmit,reset} = useForm<MemberEditForm>() // adding reset

    useEffect(()=> {
        async function load(id: string) {
            console.log(`Member ID is ${id}`)

            const result = await findMemberEditForm(id)
             reset(result)// when returning member information, it must add to the register: MemberEditForm  and reset 

        }

        if(queryParams) {
        const id = queryParams.get('id')

            if(id) {
                load(id)
            }
        }

    }, [queryParams,reset])  //adding reset


    function saveMember(form: MemberEditForm) {
         console.log(form)
    }

     return (
         <Page title= "Member Edit" icon="bi-pencil">
            <form onSubmit={handleSubmit(saveMember)}>
                <div className="row mb-3">
                    <div className="col-3">
                        <FormGroup label="Name">
                             <input type="text"placeholder="Enter Member name" className="form-control" 
                                {...register('name')}
                             />
                        </FormGroup>
                    </div>
                    <div className="col-3">
                        <FormGroup label="Positon">
                            <select className="form-select" {...register('position')}>
                                <option value="">Select Position</option>
                                 <option value="developer">Developer</option>
                            </select>
                         </FormGroup>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-3">
                        <FormGroup label="Phone">
                             <input type="tel"placeholder="Enter Phone Number" className="form-control" {...register('phone')}/>
                        </FormGroup>
                    </div>
                    <div className="col-3">
                        <FormGroup label="Email">
                             <input type="email"placeholder="Enter Email Address" className="form-control" {...register('email')} />
                        </FormGroup>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-3">
                        <FormGroup label="Entry At">
                             <input type="date" className="form-control" {...register('entryAt')} />
                        </FormGroup>
                    </div>
                    <div className="col-3">
                        <FormGroup label="Retired At">
                             <input type="date" className="form-control" {...register('retiredAt')}/>
                        </FormGroup>
                    </div>
                </div>
                <button type="submit" className="btn btn-outline-dark">
                    <i className="bi-save"></i>
                    Save Member
                </button>
            </form>
         </Page>
     )
}
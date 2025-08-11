import { useForm } from "react-hook-form";
import { FormGroup } from "../../../ui/form-group";
import type { CategorySearch } from "../../../model/input/category-search";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import type { CategoryListItem } from "../../../model/input/category-list-item";
import NoData from "../../../ui/no-data";
import { searchCategory } from "../../../model/client/category-client";
import ModalDialog from "../../../ui/modal-dialog";

export default function ProjectCategoryList() {

    const params = useParams()
    const projectId = params.id
    
    const {register, reset, handleSubmit} = useForm<CategorySearch>();
    const [list, setList] = useState<CategoryListItem[]>([])

    const [showModal, setShowModal] = useState(false)

    useEffect(()=> {
         if(projectId){  
            reset({projectId: projectId}) // when returning category information, it must add to the register: CategorySearch  and reset 
         }

    }, [projectId, reset])

    
      async function search(form:CategorySearch) {
            console.log(form)
            const response = await searchCategory(form)
            setList(response)
      }

     return(
         <>
           <form onSubmit={handleSubmit(search)} className="row">
               <FormGroup label="Name" className="col-auto">
                  <input {...register('name')} type="text" className="form-control" placeholder="Search Name" />
               </FormGroup>

               <div className="col btn-wrapper">
                   <button className="btn btn-dark">
                     <i className="bi-search"></i>Search
                   </button>

                   <button type="button" className="btn btn-outline-dark ms-2">
                      <i className="bi-plus"></i>Add New
                   </button>
               </div>
           </form>

           <section className="my-4">
               {list.length ?
                <table className="table table-striped table-bordered table-hover"> 
                   <thead>
                      <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th className="text-end">Pending</th>
                          <th className="text-end">Progress</th>
                          <th className="text-end">Behind</th>
                          <th className="text-end">Pause</th>
                          <th className="text-end">Finished</th>
                      </tr>
                    </thead>

                    <tbody>
                        {list.map(item => 
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td className="text-end">{item.pending}</td>
                            <td className="text-end">{item.progress}</td>
                            <td className="text-end">{item.behind}</td>
                            <td className="text-end">{item.paused}</td>
                            <td className="text-end">{item.finished}</td>
                        </tr>
                        )}
                    </tbody>

                </table>  : 
                
                <NoData dataName="Category"/>     
               } 
           </section>

           <CategoryEditDialog />
         </>
     )
}


function CategoryEditDialog({show = false}) {

    const [showDialog, setShowDialog] = useState(show)

     return (  
           <ModalDialog title="Add New Category" show={showDialog} onHide={()=> {} } onSave={()=> {}}>
               <form >
                 {/*Form fieds for editing category */}
                
               </form>
           </ModalDialog>
     )
}
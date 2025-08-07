import { useForm } from "react-hook-form";
import { FormGroup } from "../../../ui/form-group";
import type { CategorySearch } from "../../../model/input/category-search";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import type { CategoryListItem } from "../../../model/input/category-list-item";
import NoData from "../../../ui/no-data";

export default function ProjectCategoryList() {

    const params = useParams()
    const projectId = params.id
    
    const {register, reset, handleSubmit} = useForm<CategorySearch>();
    const [list, setList] = useState<CategoryListItem[]>([])


    useEffect(()=> {
         if(projectId){  
            reset({projectId: projectId}) // when returning category information, it must add to the register: CategorySearch  and reset 
         }

    }, [projectId, reset])

    
      async function search(form:CategorySearch) {
            console.log(form)
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
                          <th>Pending</th>
                          <th>Progress</th>
                          <th>Behind</th>
                          <th>Pause</th>
                          <th>Finished</th>
                      </tr>
                   </thead>

                </table>  : 
                
                <NoData dataName="Categor"/>     
               } 
           </section>
         </>
     )
}
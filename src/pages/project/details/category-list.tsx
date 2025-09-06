import { useForm } from "react-hook-form";
import { FormGroup } from "../../../ui/form-group";
import type { CategorySearch } from "../../../model/input/category-search";
import {useParams } from "react-router";
import { useEffect, useRef, useState } from "react";
import type { CategoryListItem } from "../../../model/input/category-list-item";
import NoData from "../../../ui/no-data";
import { createCategory, searchCategory, updateCategory } from "../../../model/client/category-client";
import ModalDialog from "../../../ui/modal-dialog";
import ModalStateContentProvider from "../../../model/provider/modal-state-context-provider";
import { useModalStateContext } from "../../../model/context/modal-state-context";
import type { CategoryForm } from "../../../model/input/category-form";
import ErrorMessage from "../../../ui/error-message";
import { useEditCategoryContext, type EditCategory } from "../../../model/context/edit-category-context";
import CategoryEditContextProvider from "../../../model/provider/category-edit-context-provider";

export default function ProjectCategoryList() {
        return (
            <ModalStateContentProvider>
                <CategoryEditContextProvider>
                    <CategoryList/>
                    <CategoryEditDialog />
                </CategoryEditContextProvider>
            </ModalStateContentProvider>
        )
}

function CategoryList() {
     
    const params = useParams()
    const projectId = params.id
    
    const {register, reset, handleSubmit} = useForm<CategorySearch>();
    const [list, setList] = useState<CategoryListItem[]>([])

    const [_1, setShowDialog] = useModalStateContext()
    const [_2, setEditCategory] = useEditCategoryContext()

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

    function addNew() {
        setEditCategory(undefined)
        setShowDialog(true)
    }

    function edit(item : EditCategory) {
        setEditCategory(item)
        setShowDialog(true)
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

                   <button type="button" onClick={()=> addNew()} className="btn btn-outline-dark ms-2">
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
                          <th></th>
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
                            <td className="text-center">
                                <a type="button" className="icon-btn"
                                     onClick={()=> edit({id: item.id,name :item.name})}>
                                     <i className="bi-pencil"></i>
                                </a>
                            </td>
                        </tr>
                        )}
                    </tbody>

                </table>  : 
                
                <NoData dataName="Category"/>     
               } 
           </section>
         </>
     )
}


function CategoryEditDialog() {

    const formRef = useRef<HTMLFormElement | null>(null)
    const {register, handleSubmit, reset, formState : {errors}} = useForm<CategoryForm>()
    const [showDialog, setShowDialog] = useModalStateContext()
    const [editCategory, setEditCategory] = useEditCategoryContext()


    useEffect(()=> {
         if(editCategory) {
             reset(editCategory)
         }else {
             reset({name: ''})
         }
    }, [editCategory,reset])  //need to add reset in useEffect You’re calling reset(...) inside the effect. That’s a function from props/hooks. So the linter says: “Hey, you’re using reset, add it as a dependency!”reset is stable, meaning it doesn’t change between renders.

    async function onSave(form: CategoryForm) {
        console.log(form) 
        if(editCategory) {
            await updateCategory(editCategory.id, form)
            setEditCategory(undefined)
            
         }else {
            await createCategory(form)
         }
        setShowDialog(false)
    }


     return (  
           <ModalDialog title= {editCategory ?  "Edit Category" : "Add New Category"} 
                        show={showDialog} 
                        onHide={()=> setShowDialog(false) }
                        onSave={()=> formRef.current?.requestSubmit()} > {/* Showing error message when form saves  */}

                <form ref={formRef} onSubmit={handleSubmit(onSave)} className="row">
                    <FormGroup label="Name" className="col" >
                        <input {...register('name',{required : true})} type="text" className="form-control" placeholder="Enter Category Name" />
                        {errors.name && <ErrorMessage message="Please enter category name"/>}
                    </FormGroup>


                </form>
           </ModalDialog>
     )
}
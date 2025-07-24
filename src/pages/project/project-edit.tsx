import { useNavigate, useSearchParams } from "react-router";
import Page from "../../ui/page";
import { FormGroup } from "../../ui/form-group";
import { useForm } from "react-hook-form";
import type { ProjectEditForm } from "../../model/input/project-edit-form";
import ErrorMessage from "../../ui/error-message";
import { useEffect } from "react";
import { createProject, findProjectForEdit, updateProject } from "../../model/client/prject-client";

export default function ProjectEditComponent() {

   const [queryParams] = useSearchParams()
   const id = queryParams.get('id')
   const navigate = useNavigate()

   const {register, handleSubmit, reset, formState: {errors}} = useForm<ProjectEditForm>()

   useEffect(() => {
      async function load(id: unknown) {
         const response = await findProjectForEdit(id)
         reset(response) //adding returning info of project edit form to the useForm
      }

      if(id) {
          load(id)
      }

   },[id, reset])

   async function save(form: ProjectEditForm) { 
      const result = id ? await updateProject(id, form) : await createProject(form)
      console.log(result)

      navigate(`/project/details/${result.id}`)
   }

   return (
        <Page icon="bi-pencil" title={id ? 'Edit Project' : 'Create New Project'}>
            <form onSubmit={handleSubmit(save)} action="" className="w-50">
                <FormGroup label="Project Name" >
                    <input type="text" className="form-control" placeholder="Enter Project Name" {...register('name',{required: "Please Enter  Project Name"})} />
                    {errors.name && 
                     <ErrorMessage message = {errors.name.message} />
                    }
                </FormGroup>
                
                <div className="row mt-3">
                  <FormGroup className="col" label="Start Date">
                     <input type="date" className="form-control" {...register('startDate',{required: "Please enter start date"})}/>
                     {errors.startDate &&
                     <ErrorMessage message = {errors.startDate.message} />}
                  </FormGroup>
                   
                   <FormGroup className="col" label="Mile Stone">
                      <input type="date" className="form-control" {...register('mileStone',{required: "Please enter milestone date"})}/>
                      {errors.mileStone && 
                       <ErrorMessage message = {errors.mileStone.message} />}
                   </FormGroup>
                </div>

                 <FormGroup label="Description" className="mt-3">
                     <textarea className="form-control" {...register('description',{required: "Please enter description"})}></textarea>
                     {errors.description &&
                      <ErrorMessage message = {errors.description.message} />}
                 </FormGroup>

                  <div className="mt-3">
                     <button type="submit" className="btn btn-outline-dark">
                        <i className="bi-save"></i>Save Project
                     </button>
                  </div>
            </form>

        </Page>
     )
}
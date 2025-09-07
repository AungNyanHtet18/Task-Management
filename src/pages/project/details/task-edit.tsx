import { useForm } from "react-hook-form";
import { FormGroup } from "../../../ui/form-group";
import type { TaskForm } from "../../../model/input/task-form";
import ErrorMessage from "../../../ui/error-message";
import { useSearchParams } from "react-router";
import { useEffect } from "react";

export default function ProjectTaskEdit() {

   const [search] = useSearchParams()
   const taskId = search.get("id")

   const {register, handleSubmit, formState : {errors}} = useForm<TaskForm>()

   useEffect(() => {
       if(taskId) {
          console.log("Fetching task details for ID:",taskId)

       }
   },[taskId])

   async function saveTask(data: TaskForm) {
       console.log("Task saved:", data)
   }

     return (
        <form onSubmit={handleSubmit(saveTask)} >
            <div className="row mb-3">
               <FormGroup className="col-6" label="Task Name" >
                     <input {...register('name',{required: true})} type="text" className="form-control" placeholder="Enter Task Name"/>
                     {errors.name && <ErrorMessage message="Task Name is required" />}
               </FormGroup>
            </div>
            
            <div className="row mb-3">
                  <FormGroup className="col-3" label="Category">
                    <select {...register('category',{required : true})}  className="form-select">
                      <option value="">Select Category</option>
                      <option value="1">Analysis</option>
                      <option value="2">Development</option>
                      <option value="3">Testing</option>
                    </select>
                    {errors.category && <ErrorMessage message="Category is required" />}
                  </FormGroup>

                  <FormGroup className="col-3" label="Assignee">
                     <select {...register('assignee',{required : true})} className="form-select">
                        <option value="">Select Assignee</option>
                        <option value="1">John Doe</option>
                        <option value="2">Jane Smith</option>
                     </select>
                     {errors.assignee && <ErrorMessage message="Assignee is required" />}
                  </FormGroup>

                  <FormGroup className="col-3" label="Position">
                     <span className="form-control">Undefined</span>
                  </FormGroup>
            </div>

            <div className="row mb-3">

               <FormGroup className="col-3" label="Due Date">
                   <input {...register('dueDate',{required : true})} type="date" className="form-control" />
                  {errors.dueDate && <ErrorMessage message="Due Date is required " />}
               </FormGroup>

               <FormGroup className="col-3" label="Start Date">
                  <input {...register('startDate',{required : true})}  type="date" className="form-control"/>
               </FormGroup>

               <FormGroup className="col-3" label="End Date">
                   <input {...register('endDate', {required : true})} type="date" className="form-control" />
               </FormGroup>

               <FormGroup className="col-3" label="Status">
                   <select {...register('status',{required : true})} className="form-select">
                        <option value="">Select Status</option>
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                   </select>
                   {errors.status && <ErrorMessage message="Status is required "/>}
               </FormGroup> 
            </div>

            <FormGroup className="col-6 mb-3" label="Description">
                  <textarea className="form-control" rows={5} placeholder="Enter Description"></textarea>
            </FormGroup>

            <button type="submit" className="btn btn-primary mb-2">
                <i className="bi-save"></i> Save Task
            </button>
        </form>
     )
}
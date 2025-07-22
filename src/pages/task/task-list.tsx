import { useForm } from "react-hook-form";
import { FormGroup } from "../../ui/form-group";
import SearchPage from "../../ui/search-page";

import { useSearchResultList, useSearchResultSetter } from "../../model/context/search-result-context";
import type { TaskSearch } from "../../model/input/task-search";
import { searchTask } from "../../model/client/task-client";
import NoData from "../../ui/no-data";
import type { TaskListItem } from "../../model/output/task-list-item";
import { Link } from "react-router";
import ShowDetails from "../../ui/showdetails";

export default function TaskListComponent() {
     return (
          <SearchPage title="Task Management" icon="bi-stack" searchForm={<SearchForm/>}> 
               <SearchResult/>
          </SearchPage>
     )
}


function SearchForm() {

     const {register, handleSubmit} = useForm<TaskSearch>()
     const setResult  = useSearchResultSetter()

     async function search(form: TaskSearch) {
           const result = await searchTask(form)
           setResult(result)
     }

      return  (
         <form action="#" className="row" onSubmit={handleSubmit(search)}>
               <FormGroup className="col-auto" label="Status">
                    <select className="form-select" {...register('status')}>
                         <option value="">All Status</option>
                    </select>
               </FormGroup>

               <FormGroup className="col-auto" label="Start From" {...register('startFrom')}>
                    <input type="date" className="form-control" />
               </FormGroup>

               <FormGroup className="col-auto" label="Start To" {...register('startTo')}>
                    <input type="date" className="form-control" />
               </FormGroup>   

               <FormGroup className="col-auto" label="Keyword" {...register('keyword')}>
                    <input type="text" placeholder="Search Keyword" className="form-control" />
               </FormGroup> 

               <div className="col btn-wrapper">
                    <button type="submit" className="btn btn-dark">
                         <i className="bi-search"></i>Search
                    </button>
               </div>
          </form>
      )
}

function SearchResult() {

     const list = useSearchResultList<TaskListItem>()

     if(!list.length) {
           return <NoData dataName="task" />
     }

      return (
          <table className="table table-bordered table-striped mt-4">
               <thead >
                    <tr>
                       <th>ID</th>
                       <th>Projects</th>
                       <th>Category</th>
                       <th>Task Name</th>
                       <th>Member</th>
                       <th>Start At</th>
                       <th>Mile Stone</th>
                       <th>Status</th>
                       <th></th>
                    </tr>
               </thead>
               <tbody>
                    {list.map(item=> 
                         <tr key={item.id}>
                              <td>{item.id}</td>
                              <td>{item.projectName}</td>
                              <td>{item.categoryName}</td>
                              <td>{item.taskName}</td>
                              <td>{item.memberName}</td>
                              <td>{item.startAt}</td>
                              <td>{item.mileStone}</td>
                              <td>{item.status}</td>
                              <td>
                                  <ShowDetails to = {`/task/details/${item.id}`}/>
                              </td>
                         </tr>
                    )}
               </tbody>
          </table>
      )
}
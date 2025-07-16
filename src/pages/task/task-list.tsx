import { FormGroup } from "../../ui/form-group";
import SearchPage from "../../ui/search-page";

export default function TaskListComponent() {
     return (
          <SearchPage title="Task Management" icon="bi-stack" searchForm={<SearchForm/>}> 
               <SearchResult/>

          </SearchPage>
     )
}


function SearchForm() {
      return  (
         <form action="#" className="row">
               <FormGroup className="col-auto" label="Status">
                    <select name="" className="form-select">
                         <option value="">All Status</option>
                    </select>
               </FormGroup>

               <FormGroup className="col-auto" label="Start From">
                    <input type="date" className="form-control" />
               </FormGroup>

               <FormGroup className="col-auto" label="Start To">
                    <input type="date" className="form-control" />
               </FormGroup>   

               <FormGroup className="col-auto" label="Keyword">
                    <input type="text" placeholder="Search Keyword" className="form-control" />
               </FormGroup> 

               <div className="col btn-wrapper">
                    <button type="submit" className="btn btn-dark">
                         <i className="bi-search"></i>
                         Search
                    </button>
               </div>
          </form>
      )
}

function SearchResult() {
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
                    </tr>
               </thead>
          </table>
      )
}
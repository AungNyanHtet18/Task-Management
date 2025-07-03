import { FormGroup } from "../../ui/form-group";
import Page from "../../ui/page";
import Pagination from "../../ui/pagination";

export default function MemberList() {
     return (
        <Page title="Member Management" icon="bi-people" >

            <form className="row">
               <FormGroup label="Position" className="col-auto">
                     <select className="form-select" >
                        <option value="">All Position</option>
                     </select>
               </FormGroup>

               <FormGroup label="Project Name" className="col-auto">
                  <input type="text" className="form-control" placeholder="Search Project Name" />
               </FormGroup>

               <FormGroup label="Name" className="col-auto">
                  <input type="text" className="form-control" placeholder="Search Name" />
               </FormGroup>

               <div className="col btn-wrapper">
                  <button type="submit" className="btn btn-dark me-2">
                     <i className="bi-search"></i>Search
                  </button>

                  <button type="button" className="btn btn-outline-dark">
                     <i className="bi-plus"></i>Add New Member
                  </button>

               </div>
            </form>

            <table className="table table-bordered table-striped table-hover mt-3">
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>Name</th>
                     <th>Position</th>
                     <th>Entry At</th>
                     <th>Projects</th>
                     <th>Tasks</th>
                  </tr>
               </thead>

            </table>

             <Pagination />
        </Page>
     )
}
import { Link } from "react-router";
import { FormGroup } from "../../ui/form-group";

export default function ProjectListComponent() {
     return (
      <>
         <form action="#" className="row">
               <FormGroup className="col-auto" label="Status">
                    <select className="form-select">
                         <option value="">All Status</option>
                    </select>
               </FormGroup>

               <FormGroup className="col-auto" label="Start From" >
                    <input className="form-control" type="date" />
               </FormGroup>

               <FormGroup className="col-auto" label="Start To" >
                    <input className="form-control" type="date" />
               </FormGroup>

                <FormGroup className="col-auto" label="Keyword" >
                    <input className="form-control" type="text" placeholder="Search KeyWord"/>
               </FormGroup>

               <div className="col btn-wrapper">
                    <button type="submit" className="btn btn-dark">
                         <i className="bi-search"></i>
                         Search
                    </button>

                    <Link to='' className="btn btn-outline-dark me-2">
                         <i className="bi-plus"></i>Creat Project
                    </Link>

               </div>
         </form>
      </>  
     )
}
import { Link } from "react-router";
import { FormGroup } from "../../../ui/form-group";

export default function ProjectTaskList() {
     return (
        <>
            <form className="row" action="">
                <FormGroup className="col-auto" label="Status">
                   <select className="form-select">
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
                    <input placeholder="Search Keyword" className="form-control" />
                </FormGroup>

                <div className="col btn-wrapper">
                   <button className="btn btn-dark">
                      <i className="bi-search"></i>Search
                   </button>

                   <Link to="edit" className="btn btn-outline-dark ms-2">
                       <i className="bi-plus"></i>New Task
                   </Link>
                </div>
            </form>
        </>
     )
}
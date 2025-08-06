import { NavLink, Outlet } from "react-router";
import Page from "../../../ui/page";

export default function ProjectDetails() {
     return (
        <Page icon="bi-rocket" title="Project Details">
            <div className="row">
                <div className="col-3">
                    <ProjectInfo/>
                </div>

                <div className="col">
                    <Navigation/>
                    <Outlet/>
                </div>
            </div>
        </Page>
     )
}

function Navigation() {
     return (
        <ul className="nav nav-underline">
            <li className="nav-item">
                <NavLink to="task" className="nav-link">Tasks</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="member" className="nav-link">Members</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="category" className="nav-link">Category</NavLink>
            </li>
        </ul>
     )
}

function ProjectInfo() {
     return (
        <div className="card">
            <div className="card-body">
                <h5 className="mb-2">Project Name</h5>
                <Information name="Start Date" value="2025-04-07"/>
                <Information name="Mile Stone" value="2025-05-29"/>
                <Information name="Members" value="5"/>
                <Information name="Category" value="4"/>
                <Information name="Pending" value="4"/>
                <Information name="Progress" value="4"/>
                <Information name="Finished" value="4"/>
                <Information name="Cancel" value="4"/>
            </div>
        </div>
    )
}

function Information({name, value} : {name:string, value: string}) {
     return (
        <div className="d-flex justify-content-between mb-2">
            <span className="text-secondary">{name}</span>
            <span>{value}</span>
        </div>
     )
}
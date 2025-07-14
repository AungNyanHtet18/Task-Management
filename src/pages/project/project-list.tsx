import { Link } from "react-router";
import { FormGroup } from "../../ui/form-group";
import Page from "../../ui/page";
import { useForm } from "react-hook-form";
import type { ProjectSearch } from "../../model/input/project-search";
import { useState } from "react";
import type { ProjectSearchResult } from "../../model/output/project-list-item";
import { searchProject } from "../../model/client/prject-client";
import NoData from "../../ui/no-data";

export default function ProjectListComponent() {

     const {register, handleSubmit} = useForm<ProjectSearch>();
     const [result,setResult] = useState<ProjectSearchResult | undefined>(undefined);


     async function search(form:ProjectSearch) {
          const response = await searchProject(form)
          setResult(response)
     }

     return (
      <Page title="Project Management" icon="bi-rocket">
           
         <form onSubmit={handleSubmit(search)} className="row">
               <FormGroup className="col-auto" label="Status">
                    <select className="form-select" {...register('status')}>
                         <option value="">All Status</option>
                    </select>
               </FormGroup>

               <FormGroup className="col-auto" label="Start From" {...register('startFrom')}>
                    <input className="form-control" type="date" />
               </FormGroup>

               <FormGroup className="col-auto" label="Start To" {...register('startTo')}>
                    <input className="form-control" type="date" />
               </FormGroup>

                <FormGroup className="col-auto" label="Keyword" {...register('keyWord')}>
                    <input className="form-control" type="text" placeholder="Search KeyWord"/>
               </FormGroup>

     
               <div className="col btn-wrapper">
                    <button type="submit" className="btn btn-dark me-2">
                         <i className="bi-search"></i>
                         Search
                    </button>

                    <Link to='' className="btn btn-outline-dark">
                         <i className="bi-plus-lg"></i>Create Project
                    </Link>
               </div>
         </form>

          <section className="mt-4">
               <ProjectSearchResult result={result}/>
          </section>

       </Page>
     )
}

function ProjectSearchResult({result} : {result? : ProjectSearchResult}) { 
     
     if(!result) {
       return <NoData dataName="project"/>
     }

     return (
          <></>
     )
}
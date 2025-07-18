import { useForm } from "react-hook-form";
import type { MemberSearch } from "../../model/input/member-search";
import { FormGroup } from "../../ui/form-group";
import { Link, useNavigate } from "react-router";
import type { MemberListItem} from "../../model/output/member-list-item";
import { searchMember } from "../../model/client/member-client";
import { useSearchResultList, useSearchResultSetter } from "../../model/context/search-result-context";
import SearchPage from "../../ui/search-page";
import NoData from "../../ui/no-data";

export default function MemberLisComponent() {

     return (
         <SearchPage title="Member Management" icon="bi-people" searchForm={<SearchForm/>}>
            <MemberSearchResult />
         </SearchPage>
     )
}


function SearchForm() { 

      const {register, handleSubmit} = useForm<MemberSearch>()
      const setResult = useSearchResultSetter()

      async function search(form:MemberSearch) {
         console.log(form)
         const searchResult = await searchMember(form)
         setResult(searchResult)
      }

   return (
         <form onSubmit={handleSubmit(search)} className="row">
            <FormGroup label="Position" className="col-auto">
                  <select  className="form-select" {...register('position')}>
                     <option>All Position</option>
                  </select>
            </FormGroup>

            <FormGroup label="Name" className="col-auto">
               <input type="text" className="form-control" placeholder="Search Name" 
               {...register('name')}/>
            </FormGroup>

               <FormGroup label="Entry From" className="col-auto">
               <input type="date" className="form-control"
               {...register('entryForm')}/>
            </FormGroup>

               <FormGroup label="Entry To" className="col-auto">
               <input type="date" className="form-control" 
               {...register('entryTo')}/>
            </FormGroup>

            <div className="col btn-wrapper">
               <button type="submit" className="btn btn-dark me-2">
                  <i className="bi-search"></i>Search
               </button>

               <Link to= "/member/edit"  type="button" className="btn btn-outline-dark">
                  <i className="bi-plus-lg"></i>Create New Member
               </Link>
            </div>
         </form>
   )
}


function MemberSearchResult() {

     const list = useSearchResultList<MemberListItem>()
     const navigate = useNavigate()

      if(!list.length) { 
       return <NoData  dataName="member"/>
     }


     function showDetails(id: number) {
       navigate(`/member/details/${id}`)
      }

      return (
          <>
            <table className="table table-bordered table-striped table-hover mt-3">
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>Name</th>
                     <th>Position</th>
                     <th>Entry At</th>
                     <th className="text-center">Projects</th>
                     <th className="text-end">To Do</th>
                     <th className="text-end">Behind</th>
                     <th className="text-end">Complete</th>
                  </tr>
               </thead>

               <tbody>
                  {list.map(member => 
                     <tr key={member.id}>
                        <td>{member.id}</td>
                        <td>{member.name}</td>
                        <td>{member.position}</td>
                        <td>{member.entryAt}</td>
                        <td className="text-center">{member.projects}</td>
                        <td className="text-end">{member.created + member.onSchedule}</td>
                        <td className="text-end">{member.behind}</td>
                        <td className="text-end">{member.completed}</td>
                        <td className="text-center">
                           <a href="#" onClick={e => {
                              e.preventDefault()
                              showDetails(member.id)
                           }} className="icon-link">
                              <i className="bi bi-arrow-right"></i>
                           </a>
                        </td>
                     </tr>
                  )}
               </tbody>
            </table>

          </>
       )
}
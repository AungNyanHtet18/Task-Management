import { Link, useParams } from "react-router";
import Page from "../../ui/page";
import { useEffect } from "react";
import Card from "../../ui/card";
import { FormGroup } from "../../ui/form-group";

export default function MemberDetails() {

    const params = useParams()

    useEffect(()=> { 
        console.log(`Member ID : ${params.id}`);
    },[params])

     return (
        <Page title="Member Details" icon="bi-person">
            <div className="row">

                <div className="col-4">
                    <Card title="Profile" action = {
                         <Link to={`/member/edit?id=${params.id}`}>
                               <i className="bi-pencil"></i>
                         </Link>
                     }>
                       
                       <Profile/>

                    </Card>
                </div>
                
                <div className="col">
                    <Card title="Projects" action= {
                        <Link to={''} >
                            <i className="bi-plus-lg"></i>
                        </Link>
                    }>
                        <Projects/>
                    </Card>
                </div>
            </div>
        </Page>
     )
}

function Profile() {
     return (
        <section>
            <FormGroup label="Name" className="mb-3">
                <span className="form-control">Member Name</span>
            </FormGroup>

            <FormGroup label="Position" className="mb-3">
                <span className="form-control">Position</span>
            </FormGroup>

            <FormGroup label="Phone" className="mb-3">
                <span className="form-control">Phone Number</span>
            </FormGroup>

            <FormGroup label="Email" className="mb-3">
                <span className="form-control">Email</span>
            </FormGroup>

            <FormGroup label="Entry At" className="mb-3">
                <span className="form-control">Entry At</span>
            </FormGroup>

            <FormGroup label="Retired At" className="mb-3">
                <span className="form-control">Retired At</span>
            </FormGroup>
        </section>
     )
}

function Projects() { 
    return (
        <section>

        </section>
    )
}
import { FormGroup } from "../../ui/form-group";
import Page from "../../ui/page";

export default function MemberEdit() {
     return (
         <Page title= "Member Edit" icon="bi-pencil">
            <form action="#">
                <div className="row mb-3">
                    <div className="col-3">
                        <FormGroup label="Name">
                             <input type="text"placeholder="Enter Member name" className="form-control" />
                        </FormGroup>
                    </div>
                    <div className="col-3">
                        <FormGroup label="Pisiton">
                             <input type="text"placeholder="Enter Position" className="form-control" />
                        </FormGroup>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-3">
                        <FormGroup label="Phone">
                             <input type="text"placeholder="Enter Phone Number" className="form-control" />
                        </FormGroup>
                    </div>
                    <div className="col-3">
                        <FormGroup label="Email">
                             <input type="text"placeholder="Enter Email" className="form-control" />
                        </FormGroup>
                    </div>
                </div>
            </form>
         </Page>
     )
}
import React, {useContext, useState} from "react";
import { Context } from "../store/appContext.js"
//import "../../styles/listItem.css";


export const editContact = () => {
	
	const {store, actions} = useContext(Context)

	const [editName, setEditName] = useState();

	return(
        <>
			{store.contactsInfo.map((item, index)=>
				<div key={index} className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="exampleModalLabel">Edit your contact</h1>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div className="modal-body">
								<div className="mb-3">
									<label htmlFor="recipient-name" className="col-form-label">Full Name</label>
									<input type="text" className="form-control" id="recipient-name" defaultValue={item.full_name} onChange={(event)=> setEditName(event.target.value)} required/>
								</div>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
								<button type="button" className="btn btn-primary" onClick={()=>actions.contactPut(item.id, editName )}>Save changes</button>
							</div>
						</div>
					</div>
				</div>
			)}
        </>
    )
};

        export default editContact;
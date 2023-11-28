import React, {useContext, useState} from "react";
import { Context } from "../store/appContext.js"
import "../../styles/listItem.css";


export const listItem = () => {
	
	const {store, actions} = useContext(Context)


	return(
		<div>
			{store.contactsInfo.map((contacto)=>
				<li key={contacto.id} className="list-group-item">
					<div className="img d-flex">
						<img scr={require("../../img/perro.jpeg")} alt="Esto es un perro"/>
					</div>

					<h2>{contacto.id}</h2>
					
				

					<div className="container-fluid d-flex flex-column">
						<h3>{contacto.full_name}</h3> 
						<div className="d-flex">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16"><path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/></svg>
							<p>{contacto.address}</p>
						</div> 
						<div className="d-flex"> 				 
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">					<path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/><path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/></svg>
							<p>{contacto.phone}</p> 
						</div>
							<div className="d-flex">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">  				<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>				</svg> 
							<p>{contacto.email}</p>
						</div>
						<button data={contacto.id} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
								Launch demo modal
						</button>
						<button
							onClick={()=>actions.deleteThisContact(contacto.id)}
							type="button" 
							className="btn btn-danger">
							Delete
						</button>
					</div>
				</li>
			)}

			
			<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<div className="mb-3">
								<label htmlFor="recipient-name" className="col-form-label">Full Name</label>
								<input type="text" className="form-control" id="recipient-name"/>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
							<button type="button" className="btn btn-primary" onClick={(contacto)=>actions.contactPut(contacto.id)}>Save changes</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default listItem;
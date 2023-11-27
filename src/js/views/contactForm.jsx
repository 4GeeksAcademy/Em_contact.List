import React, {useContext, useState} from "react";
import { Context } from "../store/appContext.js"
// import "../../styles/contactForm.css";

export const contactForm = () => {
	// Variables that save contact information 	
	const [name, setName] = useState();
	const [address, setAddress] = useState();
	const [phone, setPhone] = useState();
	const [email, setEmail] = useState();
	// function that runs when "save contact" button is clicked.
	function allActions(){
		addContact()
		setTimeout(() => {
			setName('')
			setAddress('')
			setPhone('')
			setEmail('')
		}, 100);
	}	
	function addContact () {				 
		fetch('https://playground.4geeks.com/apis/fake/contact/', {
			  method: 'POST',
			  headers: {
				  "Content-Type": "application/json"
			  },
			  body: JSON.stringify({
				"full_name": name,
				"email": email,
				"agenda_slug": "DOM_Emilio",
				"address": address,
				"phone": phone
			}),
		  })
		  alert("Your contact has been succesfully created, go back home to see all your contacts")
	  }
	return(
		<div className="text-center">
			<ul>
				<li>
					<div className="input-group flex-nowrap">
						<span className="input-group-text" id="addon-wrapping">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
								<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
								<path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
							</svg>
						</span>
						<input type="text" 
						className="form-control" placeholder="Full Name" 
						onChange={(e) =>setName(e.target.value)} 
						value={name} 
						aria-label="Username"
						aria-describedby="addon-wrapping"/>
					</div>
				</li>
				<li>
					<div className="input-group flex-nowrap">
						<span className="input-group-text" id="addon-wrapping">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
								<path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
							</svg>
						</span>
						<input type="text" 
						className="form-control" 
						placeholder="Address" 
						aria-label="Username" 
						aria-describedby="addon-wrapping"
						onChange={(e) =>setAddress(e.target.value)} 
						value={address} 
						/>
					</div>
				</li>
				<li>
					<div className="input-group flex-nowrap">
						<span className="input-group-text" id="addon-wrapping">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
							<path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
							<path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
							</svg>
						</span>
						<input type="number" 
						className="form-control" 
						placeholder="Phone number" 
						aria-label="Username" 
						aria-describedby="addon-wrapping"
						onChange={(e) =>setPhone(e.target.value)} 
						value={phone}
						/>
					</div>
				</li>
				<li>
					<div className="input-group flex-nowrap">
						<span className="input-group-text" id="addon-wrapping">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
								<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
							</svg>
						</span>
						<input type="text" 
						className="form-control" 
						placeholder="Email" 
						aria-label="Username" 
						aria-describedby="addon-wrapping"
						onChange={(e) =>setEmail(e.target.value)} 
						value={email}
						/>

					</div>
				</li>
			</ul>
			<br></br>
			<button
				onClick={()=>allActions()}
				type="button" 
				className="btn btn-primary">
				Save contact
			</button>
			<br />
		</div>
		)
	};

    export default contactForm;
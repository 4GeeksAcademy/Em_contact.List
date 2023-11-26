const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},
				{
					title: "THIRD",
					background: "white",
					initial: "white"
				},
				{
					title: "LUIS",
					background: "white",
					initial: "white"					
				}								
			],
			contactsInfo:[],
			newContact:[{}]
		},
		actions: {
			myGet: () =>{
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/DOM_Emilio",)
				.then( (response)=> response.json())
				.then( (data)=> setStore({ contactsInfo: data })
				)
			},
			
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ contactsInfo: data });
			},
			  userGenerator: ()=> {
				 
				  fetch('https://playground.4geeks.com/apis/fake/contact/', {
						method: 'POST',
						headers: {
							"Content-Type": "application/json"
						},
						body: {
							"address": "47568 NW 34ST, 33434 FL, USA",
							"agenda_slug": "DOM_Emilio",
							"email": "RamonsitoSantitos@gmail.com",
							"full_name": "Ramon Santos",
							"phone": "7864445566"
						}
					})
					      
				},
				addContact: ()=> {
				 
					fetch('https://playground.4geeks.com/apis/fake/contact/', {
						  method: 'POST',
						  headers: {
							  "Content-Type": "application/json"
						  },
						  body: JSON.stringify(newContact),
					  })
							
				  }
			}
		};
	};

export default getState;

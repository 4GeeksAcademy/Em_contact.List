const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {			
			demo: [],
			contactsInfo:[],
		},
		actions: {
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
			myGet: () =>{
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/DOM_Emilio",)
				.then( (response)=> response.json())
				.then( (data)=> setStore({ contactsInfo: data }))
			},
			userGenerator: ()=> {						
				if(getStore.contactsInfo === undefined){
					fetch('https://playground.4geeks.com/apis/fake/contact/', {
						method: 'POST',
						headers: {"Content-Type": "application/json"},
						redirect: 'follow',
						body: JSON.stringify({
							"address": "47568 NW 34ST, 33434 FL, USA",
							"agenda_slug": "DOM_Emilio",
							"email": "RamonsitoSantitos@gmail.com",
							"full_name": "Ramon Santos",
							"phone": "7864445566"
						})
					})												      
				}
			},
			deleteThisContact: (index)=> {	
			const store = getStore();		 
			fetch('https://playground.4geeks.com/apis/fake/contact/' + index,{
			method: 'DELETE',
			body: ""})
			.then(data => setStore({ contactsInfo: store.contactsInfo.filter((item)=>item.id!==indexToDelete) }))
			
			alert(contacto.full_name + " has been deleted")
			},
			addContact: (name,email,address,phone)=> {		
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
			}
		};
	};

export default getState;

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
			contactsInfo:[]
		},
		actions: {
			myGet: () =>{
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/DOM Emilio",)
				.then( (response)=> response.json())
				.then( (data)=> setStore({ contactsInfo: data })
				// .then( (data)=> console.log(data))   				
				)

			},
			
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				console.log("its working!")
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
			}
		}
		
	};
};

export default getState;

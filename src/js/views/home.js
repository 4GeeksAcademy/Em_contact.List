import React, {useContext, useState} from "react";
import { Context } from "../store/appContext.js"
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import ListItem from "../views/listItem.jsx"

export const Home = () => {
	
	const [myInfo, setMyInfo] = useState([])
	const {store, actions} = useContext(Context)

	actions.myGet()
	actions.loadSomeData()
	
	return(
		<div className="Luigi text-center">
			<h1>Add a new contact</h1>
			<ul className="list-group">
				<ListItem name="Luis"/>
				
			</ul>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
		</div>
		)
	};

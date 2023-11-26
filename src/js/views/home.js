import React, {useContext, useState} from "react";
import { Context } from "../store/appContext.js"
import "../../styles/home.css";
import ListItem from "../views/listItem.jsx"

export const Home = () => {
	
	const [myInfo, setMyInfo] = useState([])
	const {store, actions} = useContext(Context)

	actions.myGet()
	
	return(
		<div className="Luigi text-center">
			<h1>Add a new contact</h1>
			<ul className="list-group">
				<ListItem />			
			</ul>
		</div>
		)
	};

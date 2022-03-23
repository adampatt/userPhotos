import { Switch, Route } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import UsersPage from "./Components/Users";
import { USERS_STORAGE_KEY, formatResponse } from "../src/Utils";
import UserDetailsPage from "../src/Components/UsersDetails";
import UserAlbumPage from "./Components/UserAlbum";
import ModalHome from "./Components/ModalHome";

function App() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((data) =>
				formatResponse(data, localStorage.getItem(USERS_STORAGE_KEY))
			)
			.then((users) => setUsers(users));
	}, []);

	return (
		<>
			<div className="site-contain">
				<div>
					<Switch>
						<Route exact path="/">
							<UsersPage users={users} onSetUsers={setUsers} />
						</Route>
						<Route path="/users/:userId">
							<UserDetailsPage />
						</Route>
						<Route path="/albums/:albumId/photos/:userId">
							<UserAlbumPage />
						</Route>
						<Route path="/modal">
							<ModalHome />
						</Route>
					</Switch>
				</div>
			</div>
		</>
	);
}

export default App;

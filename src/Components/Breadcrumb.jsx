import React from "react";
import { Link } from "react-router-dom";
import { BreadCrumbContainer } from "../Styles/BreadCrumbStyles";

const Breadcrumb = ({ userName, userId, albumTitle }) => {
	return (
		<BreadCrumbContainer role="banner">
			{!userName && !albumTitle && <h3>Users</h3>}
			{userName && !albumTitle && (
				<>
					<Link to="/">
						<h3>Users</h3>
					</Link>
					<h3 className="spacer"> /</h3>
					<h3>{userName}</h3>
				</>
			)}
			{userName && albumTitle && (
				<>
					<Link to="/">
						<h3>Users</h3>
					</Link>
					<h3 className="spacer"> /</h3>
					<Link to={`/users/${userId}`}>
						<h3>{userName}</h3>
					</Link>
					<h3 className="spacer"> / </h3>
					<h3>{albumTitle}</h3>
				</>
			)}
		</BreadCrumbContainer>
	);
};

export default Breadcrumb;

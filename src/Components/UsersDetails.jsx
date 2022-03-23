import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Card from "./Card";
import SubHeading from "./SubHeading";
import Breadcrumb from "./Breadcrumb";
import { CardSection } from "../Styles/UsersStyles";

const UserDetailsPage = () => {
	const [user, setUser] = useState([]);
	const [albums, setAlbums] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isLoadingAlbums, setIsLoadingAlbums] = useState(true);
	const { userId } = useParams();

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
			.then((response) => response.json())
			.then((data) => setUser(data))
			.then(() => setIsLoading(false));
	}, [userId]);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
			.then((response) => response.json())
			.then((data) => setAlbums(data))
			.then(() => setIsLoadingAlbums(false));
	}, [userId]);

	const userName = user.name;

	return (
		<div>
			<Breadcrumb userName={userName} />
			{isLoading && "loading..."}
			{!isLoading && JSON.stringify(user) && (
				<SubHeading
					title={user.name}
					subtitle={{
						company: user.company.name,
						email: user.email,
						address: [
							{ street: user.address.street },
							{ zipcode: user.address.zipcode },
							{ city: user.address.city },
						],
					}}
				/>
			)}
			{!isLoading && !isLoadingAlbums && (
				<section className="section">
					<h2>Albums</h2>
					<CardSection>
						{albums.map((a) => {
							return (
								<>
									<Link
										style={{ textDecoration: "none" }}
										className="usersCard"
										to={{
											pathname: `/albums/${a.id}/photos/${userId}`,
										}}
									>
										<Card
											subtitle={[a?.title]}
											path={`/albums/${a.id}/photos/${userId}`}
											widthStyle="100%"
										></Card>
									</Link>
								</>
							);
						})}
					</CardSection>
				</section>
			)}
		</div>
	);
};

export default UserDetailsPage;

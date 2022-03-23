import React from "react";
import {
	getFavouritedUsers,
	EmailAsLink,
	USERS_STORAGE_KEY,
} from "../Utils";
import Card from "../Components/Card";
import Breadcrumb from "../Components/Breadcrumb";
import { CardSection } from "../Styles/UsersStyles";

const UsersPage = ({ users = [], onSetUsers }) => {
	const handleOnCardPress = (id) => {
		onSetUsers((users) => {
			const updatedUsers = users.map((u) => {
				if (u.id === id) {
					return {
						...u,
						isFavourite: !u.isFavourite,
					};
				}
				return u;
			});

			localStorage.setItem(
				USERS_STORAGE_KEY,
				getFavouritedUsers(updatedUsers).map((u) => u?.id)
			);

			return updatedUsers;
		});
	};

	return (
		<>
			<section className="section">
				<Breadcrumb />
				<div className="section-title">
					<h2>Favourites</h2>
					<hr />
				</div>
				<CardSection>
					{getFavouritedUsers(users).map(
						({
							key,
							name,
							email,
							isFavourite,
							id,
							company: { name: companyName },
						}) => (
							<Card
								primary
								key={key}
								title={name}
								subtitle={[companyName, <EmailAsLink email={email} />]}
								id={id}
								isFavourite={isFavourite}
								handleOnCardPress={handleOnCardPress}
							/>
						)
					)}
				</CardSection>
			</section>

			<section className="section">
				<div className="section-title">
					<h2>Users</h2>
					<hr />
				</div>
				<CardSection>
					{users
						.filter((u) => !u.isFavourite)
						.map(
							({
								key,
								name,
								isFavourite,
								email,
								id,
								company: { name: companyName },
							}) => (
								<Card
									key={key}
									title={name}
									subtitle={[companyName, email]}
									id={id}
									isFavourite={isFavourite}
									handleOnCardPress={handleOnCardPress}
									widthStyle="30%"
								/>
							)
						)}
				</CardSection>
			</section>
		</>
	);
};

export default UsersPage;

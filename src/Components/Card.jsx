import React from "react";
import { Link } from "react-router-dom";
import {
	CardContainer,
	CardContent,
	CardTitle,
	CardSubtitle,
} from "../Styles/CardStyles";
import { ImStarEmpty, ImStarFull } from "react-icons/im";

function Card({
	id,
	title,
	subtitle,
	isFavourite,
	handleOnCardPress,
	widthStyle,
}) {
	return (
		<CardContainer widthStyle={widthStyle}>
			<CardContent>
				<CardTitle>
					{title ? (
						<h3>
							<Link
								to={{
									pathname: `/users/${id}`,
									state: { UserId: id },
								}}
							>
								{title}
							</Link>
						</h3>
					) : null}
					{isFavourite === false && (
						<ImStarEmpty onClick={() => handleOnCardPress(id)} />
					)}
					{isFavourite === true && (
						<ImStarFull onClick={() => handleOnCardPress(id)} />
					)}
				</CardTitle>
				<CardSubtitle>
					{subtitle.map((s) => (
						<>
							<div>{s}</div>
						</>
					))}
				</CardSubtitle>
			</CardContent>
		</CardContainer>
	);
}

export default Card;

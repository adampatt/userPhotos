import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PhotoContainer from "./PhotoContainer";
import SubHeading from "./SubHeading";
import { photoSubtitle, getAlbumTitle } from "../Utils";
import Breadcrumb from "./Breadcrumb";
import Modal from "./Modal";

import {
	AlbumsContainer,
	ModalHomeContainer,
} from "../Styles/UserAlbumStyles";

function UserAlbumPage() {
	const [photos, setPhotos] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [currImg, setCurrImg] = useState("");
	const [currImgTitle, setCurrImgTitle] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [albums, setAlbums] = useState([]);
	const [isLoadingPhotos, setIsLoadingPhotos] = useState(true);
	const [user, setUser] = useState([]);
	const [isLoadingUser, setIsLoadingUser] = useState(true);
	const { albumId, userId } = useParams();

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
			.then((response) => response.json())
			.then((data) => setAlbums(data))
			.then(() => setIsLoading(false));
	}, [userId]);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
			.then((response) => response.json())
			.then((data) => setPhotos(data))
			.then(() => setIsLoadingPhotos(false));
	}, [albumId]);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
			.then((response) => response.json())
			.then((data) => setUser(data))
			.then(() => setIsLoadingUser(false));
	}, [userId]);

	const userName = user.name;
	const albumTitle = getAlbumTitle(albums, albumId);

	return (
		<>
			<Breadcrumb
				albumTitle={albumTitle}
				userName={userName}
				userId={userId}
			/>
			{isLoading && "loading..."}
			{!isLoading && !isLoadingUser && (
				<>
					<SubHeading
						title={albumTitle}
						subtitle={{
							albumTitle: photoSubtitle(photos),
						}}
					/>
				</>
			)}
			{!isLoading && !isLoadingPhotos && (
				<ModalHomeContainer>
					<Modal
						showModal={showModal}
						setShowModal={setShowModal}
						currImg={currImg}
						currImgTitle={currImgTitle}
					/>
					<AlbumsContainer>
						{photos.map(({ id, url, title }) => (
							<PhotoContainer
								key={id}
								url={url}
								alt={title}
								userId={id}
								setShowModal={setShowModal}
								setCurrImg={setCurrImg}
								setCurrImgTitle={setCurrImgTitle}
							/>
						))}
					</AlbumsContainer>
				</ModalHomeContainer>
			)}
		</>
	);
}

export default UserAlbumPage;

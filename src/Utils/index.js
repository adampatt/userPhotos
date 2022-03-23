import React from "react";

export const getFavouritedUsers = (users) =>
	users.filter((u) => u.isFavourite);

export const EmailAsLink = ({ email }) => (
	<a href={`mailto:${email}`}>{email}</a>
);

export const USERS_STORAGE_KEY = "fav_users";
export const MODAL_PHOTO_KEY = "modal_photo";

export const formatResponse = (users = [], persistedUsers = []) => {
	return users?.map((u) => ({
		...u,
		isFavourite: persistedUsers?.includes(u.id),
	}));
};

export const photoSubtitle = (photos) =>
	photos?.length > 0 ? `${photos.length} photos` : "No photos";

export const getAlbumTitle = (albumObject, id) => {
	for (let a of albumObject) {
		if (parseInt(a.id) === parseInt(id)) {
			return a.title;
		}
	}
};

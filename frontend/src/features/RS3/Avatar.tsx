import React, { FunctionComponent, useState } from 'react';
import { avatarUrlPre, avatarUrlPost, defaultAvatarUrl } from 'utils/constants';
import { ProgressBar } from 'primereact/progressbar';
import 'features/RS3/rs3.scss';

type props = {
	username: string;
};

export const Avatar: FunctionComponent<props> = ({ username }) => {
	const [avatarLoading, updateAvatarLoading] = useState(true);
	const [avatarError, updateAvatarError] = useState(false);

	const avatarSrc = avatarError
		? defaultAvatarUrl
		: `${avatarUrlPre}${username.split(' ').join('+')}${avatarUrlPost}`;

	const handleError = () => {
		updateAvatarLoading(false);
		updateAvatarError(true);
	};

	return (
		<div className="container--avatar">
			<img
				className="img--avatar"
				src={avatarSrc}
				alt={'player avatar'}
				onLoad={() => updateAvatarLoading(false)}
				onError={() => handleError()}
			/>
			{avatarLoading ? (
				<ProgressBar className="progressbar--avatar" mode="indeterminate" />
			) : (
				<div />
			)}
		</div>
	);
};

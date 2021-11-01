import React from 'react';
import 'features/RS3/rs3.scss';
import { useAppSelector } from 'app/hooks';
import { selectUsername, selectTotalXp } from 'features/OSRS/osrsSlice';

import TrackingButton from 'features/RS3/Player/Details/TrackingButton';
import { FollowButton } from 'features/Common/FollowButton';

import TotalXpIcon from 'assets/skillIcons/1_overall.png';

export default function OsrsPlayerInfo() {
	const username = useAppSelector(selectUsername);
	const totalXp = useAppSelector(selectTotalXp);
	const showFollowButton = false;

	return (
		<div className="container--player-info p-d-flex p-ai-center p-flex-wrap p-jc-between">
			<div className="p-d-flex p-ai-center p-flex-wrap p-jc-start">
				<h1 className="p-mr-2 p-my-0">{username}</h1>
				<div className="container--totalxp p-ml-5">
					<img
						className="icon--player-info p-mr-2"
						src={TotalXpIcon}
						alt="total xp"
					/>
					<span>{totalXp.toLocaleString()}</span>
				</div>
			</div>
			<div className="p-d-flex p-ai-center p-flex-wrap">
				<TrackingButton />
				{showFollowButton ? (
					<FollowButton playerToFollow={username} />
				) : (
					<div />
				)}
			</div>
		</div>
	);
}

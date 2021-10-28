import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'features/RS3/rs3.scss';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
	getXpGains,
	selectPlayerSuccess,
	selectStatus,
} from 'features/OSRS/osrsSlice';
import { TabMenu } from 'primereact/tabmenu';
import LoadingIcon from 'features/Common/LoadingIcon';
import { userNotFoundText } from 'utils/constants';
import OsrsPlayerInfo from 'features/OSRS/Player/OsrsPlayerInfo';
import OsrsPlayerStatTable from 'features/OSRS/Player/OsrsPlayerStatTable';
import OsrsPlayerMinigameTable from 'features/OSRS/Player/OsrsPlayerMinigameTable';
interface RouteParams {
	username: string;
}

export default function OSrsPlayerLandingPage() {
	const [tabIndex, updateTabIndex] = useState(0);
	const dispatch = useAppDispatch();
	const status = useAppSelector(selectStatus);
	const playerSuccess = useAppSelector(selectPlayerSuccess);
	const { username } = useParams<RouteParams>();

	const tabs = [
		{ label: 'Stats', icon: 'tab--skills-icon' },
		{ label: 'Minigames', icon: 'tab--quest-icon' },
	];

	useEffect(() => {
		if (username.trim() !== '') {
			const formattedUsername = username.split('+').join(' ');
			dispatch(getXpGains(formattedUsername));
		}
	}, [username, dispatch]);

	if (status === 'loading') {
		return <LoadingIcon fullScreen={true} />;
	}

	if (!playerSuccess) {
		return <h1 className="p-text-center">{userNotFoundText}</h1>;
	}

	let content;
	switch (tabIndex) {
		case 0:
			content = <OsrsPlayerStatTable />;
			break;
		case 1:
			content = <OsrsPlayerMinigameTable />;
			break;
		default:
			break;
	}

	const updateTab = (index: number) => {
		updateTabIndex(index);
	};

	return (
		<div className="p-p-2 p-mt-4">
			<div className="p-mb-4">
				<OsrsPlayerInfo />
			</div>
			<TabMenu
				model={tabs}
				activeIndex={tabIndex}
				onTabChange={(e) => updateTab(e.index)}
			/>
			{content}
		</div>
	);
}

import React from 'react';
import { Button } from 'primereact/button';
import 'features/RS3/rs3.scss';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import {
	selectIsTracking,
	selectUsername,
	startTrackingForUser,
} from 'features/RS3/rs3Slice';
import {
	trackingButtonTextDisabled,
	trackingButtonTextEnabled,
} from 'utils/constants';
import { isOsrs } from 'utils/helperFunctions';
import {
	selectOsrsIsTracking,
	selectOsrsUsername,
	startTrackingForUserOsrs,
} from 'features/OSRS/osrsSlice';

export default function TrackingButton() {
	const dispatch = useAppDispatch();

	const isTrackingRs3 = useAppSelector(selectIsTracking);
	const isTrackingOsrs = useAppSelector(selectOsrsIsTracking);
	const isTracking = isOsrs() ? isTrackingOsrs : isTrackingRs3;

	const usernameRs3 = useAppSelector(selectUsername);
	const usernameOsrs = useAppSelector(selectOsrsUsername);
	const username = isOsrs() ? usernameOsrs : usernameRs3;

	const trackingButtonText = isTracking
		? trackingButtonTextEnabled
		: `${trackingButtonTextDisabled} ${username}`;
	const trackingButtonClassName = isTracking
		? 'p-button-success'
		: 'p-button-warning';

	const handleButtonClick = () => {
		if (!isTracking) {
			if (isOsrs()) {
				dispatch(startTrackingForUserOsrs());
			} else {
				dispatch(startTrackingForUser());
			}
		}
	};

	return (
		<Button
			label={trackingButtonText}
			className={`${trackingButtonClassName} btn--tracking`}
			onClick={() => handleButtonClick()}
			disabled={isTracking}
		/>
	);
}

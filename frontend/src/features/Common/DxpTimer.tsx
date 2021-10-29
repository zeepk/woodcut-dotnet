import React from 'react';
import 'features/Common/common.scss';
import { DateTime } from 'luxon';
import {
	isDxpOver,
	isDxpClose,
	isDxpUpcoming,
	dxpStart,
	dxpEnd,
	dxpTimerText,
} from 'utils/constants';

export function DxpTimer() {
	if (isDxpOver || !isDxpClose) {
		return <div />;
	}

	const timeUntilStart = Math.floor(dxpStart.diff(DateTime.now()).as('days'));
	const timeUntilEnd = Math.floor(dxpEnd.diff(DateTime.now()).as('days'));
	const daysUntil = isDxpUpcoming ? timeUntilStart : timeUntilEnd;

	const dateToShow = isDxpUpcoming ? dxpStart : dxpEnd;
	const formattedDate = dateToShow.toLocaleString(DateTime.DATETIME_SHORT);

	const timerText = `${dxpTimerText} ${daysUntil} ${
		daysUntil === 1 ? 'day' : 'days'
	} (${formattedDate})`;

	return <div className="container--dxp-timer">{timerText}</div>;
}

import React, { useState } from 'react';
import 'features/Common/common.scss';
import { DateTime, Duration } from 'luxon';
import { dailyResetText, gainsResetText } from 'utils/constants';
import { setInterval } from 'timers';

export function Timers() {
	const defaultDiff = Duration.fromObject({
		hours: 0,
		minutes: 0,
		seconds: 0,
	}).toObject();
	const [timeTilReset, setTimeTilReset] = useState(defaultDiff);
	const [timeTilGainsReset, setTimeTilGainsReset] = useState(defaultDiff);
	const [timer, setTimer] = useState(false);
	let nextReset = DateTime.utc().endOf('day').set({ hour: 23 });
	let nextGainsReset = DateTime.utc().endOf('day').set({ hour: 5 });

	const timerHasNotUpdated = defaultDiff === timeTilReset;

	const updateTime = () => {
		let now = DateTime.now();
		setTimeTilReset(
			nextReset.diff(now, ['hours', 'minutes', 'seconds']).toObject()
		);
		setTimeTilGainsReset(
			nextGainsReset.diff(now, ['hours', 'minutes', 'seconds']).toObject()
		);
	};

	const formattedSeconds = (seconds: number | undefined) => {
		if (!seconds) {
			return '0';
		}
		const roundedSeconds = Math.floor(seconds);
		return roundedSeconds < 10 ? `0${roundedSeconds}` : `${roundedSeconds}`;
	};

	const formattedMinutes = (minutes: number | undefined) => {
		if (!minutes) {
			return '0';
		}
		const roundedMinutes = Math.floor(minutes);
		return roundedMinutes < 10 ? `0${roundedMinutes}` : `${roundedMinutes}`;
	};

	const formattedHours = (hours: number | undefined) => {
		if (!hours) {
			return '0';
		}
		return hours % 24;
	};

	if (!timer) {
		setTimer(true);
		setInterval(updateTime, 1000);
	}

	return (
		<div className="container--vos p-py-2">
			<div className="p-d-flex p-jc-between p-py-1">
				<div>{dailyResetText}</div>
				<div>
					{`${formattedHours(timeTilReset.hours)}:${formattedMinutes(
						timeTilReset.minutes
					)}:${formattedSeconds(timeTilReset.seconds)}`}
				</div>
			</div>
			<div className="p-d-flex p-jc-between p-py-1">
				<div>{gainsResetText}</div>
				<div>
					{`${formattedHours(timeTilGainsReset.hours)}:${formattedMinutes(
						timeTilGainsReset.minutes
					)}:${formattedSeconds(timeTilGainsReset.seconds)}`}
				</div>
			</div>
		</div>
	);
}

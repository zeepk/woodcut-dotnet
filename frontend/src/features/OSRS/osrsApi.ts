import requestWrapper from 'utils/requestWrapper';
import { osrsGainsUrl, osrsStartTrackingUrl } from 'utils/constants';

export async function getStats(username: string) {
	const requestOptions = {
		url: `${osrsGainsUrl}/${username}`,
		method: 'GET',
	};
	return await requestWrapper(requestOptions);
}

export async function startTrackingUser(username: string) {
	const requestOptions = {
		url: `${osrsStartTrackingUrl}/${username}`,
		method: 'PUT',
	};
	return await requestWrapper(requestOptions);
}

import requestWrapper from 'utils/requestWrapper';
import { osrsGainsUrl } from 'utils/constants';

export async function getStats(username: string) {
	const requestOptions = {
		url: `${osrsGainsUrl}/${username}`,
		method: 'GET',
	};
	return await requestWrapper(requestOptions);
}

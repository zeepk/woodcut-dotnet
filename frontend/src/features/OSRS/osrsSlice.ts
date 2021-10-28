import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { getStats } from './osrsApi';
import { Skill, Minigame } from 'utils/customTypes';
import { accountTypes } from 'utils/constants';

export interface OsrsState {
	player: {
		username: string;
		isTracking: boolean;
		success: boolean;
		skills: Array<Skill>;
		minigames: Array<Minigame>;
		playerLoading: number;
		ironmanStatus: accountTypes;
	};
	status: 'idle' | 'loading' | 'failed';
}

const initialState: OsrsState = {
	status: 'idle',
	player: {
		username: '',
		success: true,
		isTracking: false,
		skills: [],
		minigames: [],
		playerLoading: 0,
		ironmanStatus: accountTypes.MAIN,
	},
};

export const getXpGains = createAsyncThunk(
	'osrs/totalXp',
	async (username: string) => {
		const response = await getStats(username);
		return response;
	},
);

const incrementPlayerLoading = (state: OsrsState) => {
	state.player.playerLoading = state.player.playerLoading + 1;
};

const decrementPlayerLoading = (state: OsrsState) => {
	state.player.playerLoading = Math.max(state.player.playerLoading - 1, 0);
};

export const osrsSlice = createSlice({
	name: 'osrs',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getXpGains.pending, (state) => {
				state.status = 'loading';
				incrementPlayerLoading(state);
			})
			.addCase(getXpGains.fulfilled, (state, action) => {
				state.status = 'idle';
				decrementPlayerLoading(state);
				state.player.success = action.payload.data.success;
				if (state.player.success) {
					state.player.skills = action.payload.data.data.skillGains;
					state.player.minigames = action.payload.data.data.minigameGains;
					state.player.username = action.payload.data.data.displayName;
					state.player.isTracking = action.payload.data.data.isTracking;
				}
			});
	},
});

export const selectPlayerLoading = (state: RootState) =>
	state.osrs.player.playerLoading > 0;
export const selectPlayerSuccess = (state: RootState) =>
	state.osrs.player.success;
export const selectSkills = (state: RootState) => state.osrs.player.skills;
export const selectMinigames = (state: RootState) =>
	state.osrs.player.minigames;
export const selectTotalXp = (state: RootState) =>
	state.osrs.player.skills?.length > 0 ? state.osrs.player.skills[0].xp : 0;
export const selectStatus = (state: RootState) => state.osrs.status;
export const selectUsername = (state: RootState) => state.osrs.player.username;

export default osrsSlice.reducer;

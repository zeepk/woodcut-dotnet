import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import rs3Reducer from 'features/RS3/rs3Slice';
import osrsReducer from 'features/OSRS/osrsSlice';
import commonReducer from 'features/Common/commonSlice';

export const store = configureStore({
	reducer: {
		rs3: rs3Reducer,
		osrs: osrsReducer,
		common: commonReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;

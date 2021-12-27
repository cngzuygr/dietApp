import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	genderData: null,
	heightData: null,
	weightData: null,
	birthdayData: null,
	activityData: null,
};

export const navSlice = createSlice({
	name: "nav",
	initialState,
	reducers: {
		setGenderData: (state, action) => {
			state.genderData = action.payload;
		},
		setHeightData: (state, action) => {
			state.heightData = action.payload;
		},
		setWeightData: (state, action) => {
			state.weightData = action.payload;
		},
		setBirthdayData: (state, action) => {
			state.birthdayData = action.payload;
		},
		setActivityData: (state, action) => {
			state.activityData = action.payload;
		},
	},
});

export const {
	setGenderData,
	setHeightData,
	setWeightData,
	setBirthdayData,
	setActivityData,
} = navSlice.actions;

//Selectors
export const selectGenderData = (state) => state.nav.genderData;
export const selectHeightData = (state) => state.nav.heightData;
export const selectWeightData = (state) => state.nav.weightData;
export const selectBirthdayData = (state) => state.nav.birthdayData;
export const selectActivityData = (state) => state.nav.activityData;

export default navSlice.reducer;

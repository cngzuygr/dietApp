import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	genderData: null,
	heightData: null,
	weightData: null,
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
	},
});

export const { setGenderData, setHeightData, setWeightData } = navSlice.actions;

//Selectors
export const selectGenderData = (state) => state.nav.genderData;
export const selectHeightData = (state) => state.nav.heightData;
export const selectWeightData = (state) => state.nav.weightData;

export default navSlice.reducer;

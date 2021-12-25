import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	gender: null,
	destination: null,
	travelTimeInformation: null,
};

export const navSlice = createSlice({
	name: "nav",
	initialState,
	reducer: {
		setGender: (state, action) => {
			state.gender = action.payload;
		},
		setDestination: (state, action) => {
			state.destination = action.payload;
		},
		setTravelTimeInformation: (state, action) => {
			state.travelTimeInformation = action.payload;
		},
	},
});

export const { setGender, setDestination, setTravelTimeInformation } =
	navSlice.actions;

//Selectors
export const selectGender = (state) => state.nav.gender;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
	state.nav.travelTimeInformation;

export default navSlice.reducer;

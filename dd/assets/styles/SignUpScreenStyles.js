import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const classicFontSize = windowWidth / 22;
export default StyleSheet.create({
	view: {
		backgroundColor: "purple",
		flexDirection: "column",
		flex: 1,
	},
	viewDiyet: { height: windowHeight / 2.1 },
	textDiyet: {
		fontFamily: "Yellowtail",
		fontSize: windowWidth / 4,
		marginTop: windowHeight / 8,
		color: "yellow",
		alignSelf: "center",
		justifyContent: "center",
		width: windowWidth / 2,
		textAlign: "center",
	},
	componentsView: { height: "100%" },
	inputViewName: {
		height: windowHeight / 13,
		width: (windowWidth * 3) / 4,
		backgroundColor: "yellow",
		borderRadius: 20,
		alignSelf: "center",
		marginTop: (windowHeight * -2) / 100,
	},
	inputViewOthers: {
		height: windowHeight / 13,
		width: (windowWidth * 3) / 4,
		backgroundColor: "yellow",
		borderRadius: 20,
		alignSelf: "center",
		marginTop: (windowHeight * 2.5) / 100,
	},
	inputEmail: {
		fontFamily: "Poppins",
		color: "purple",
		fontSize: classicFontSize,
		alignSelf: "center",
		height: "100%",
		width: (windowWidth * 72) / 100,
		alignItems: "center",
		flexDirection: "row",
	},
	inputPassword: {
		fontFamily: "Poppins",
		color: "purple",
		fontSize: classicFontSize,
		alignSelf: "center",
		height: "100%",
		width: (windowWidth * 72) / 100,
		alignItems: "center",
		flexDirection: "row",
	},
	inputPhotoURL: {
		fontFamily: "Poppins",
		color: "purple",
		fontSize: classicFontSize,
		alignSelf: "center",
		height: "100%",
		width: (windowWidth * 72) / 100,
		alignItems: "center",
		flexDirection: "row",
	},
	registerButton: {
		width: (windowWidth * 55) / 100,
		height: windowHeight / 10,
		backgroundColor: "yellow",
		borderRadius: 7,
		alignSelf: "center",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		marginTop: (windowHeight * 2) / 100,
	},
	textRegisterButton: {
		fontFamily: "Poppins",
		fontSize: classicFontSize,
		color: "purple",
	},
});

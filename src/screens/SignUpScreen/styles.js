import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	progressBar: {
		alignSelf: "center",
		marginTop: 40,
	},
	createAccountText: {
		alignSelf: "center",
		marginTop: 50,
		marginBottom: 20,
		fontSize: 24,
		fontWeight: "bold",
		color: "black",
	},
	linearGradient: {
		flex: 1,
		paddingLeft: 15,
		paddingRight: 15,
	},
	textInput: {
		width: "100%",
		height: 50,
		marginLeft: 20,
		alignSelf: "center",
		fontSize: 16,
	},
	inputContainer: {
		alignSelf: "center",
		width: "90%",
		borderWidth: 0.7,
		borderRadius: 7,
		borderColor: "gray",
		height: 50,
	},
	infoText: {
		marginLeft: "5%",
		color: "gray",
		fontWeight: "200",
		fontSize: 16,
		marginTop: 15,
		marginBottom: 5,
	},
});

export default styles;

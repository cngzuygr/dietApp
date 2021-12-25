import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
	loginAccountText: {
		alignSelf: "center",
		fontSize: 24,
		fontWeight: "bold",
		color: "black",
		position: "absolute",
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

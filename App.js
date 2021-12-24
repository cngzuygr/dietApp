import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
	return (
		<Provider store={store}>
			<View style={{ flex: 1 }}>
				<Text>Open up App.js to start working on your app!</Text>
				<StatusBar translucent={false} backgroundColor="#FFFF00BB" />
			</View>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

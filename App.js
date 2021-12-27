import * as React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SignUpScreen from "./src/screens/SignUpScreen/SignUpScreen";
import SignInScreen from "./src/screens/SignInScreen/SignInScreen";
import SignUpInfoScreen from "./src/screens/SignUpInfoScreen/SignUpInfoScreen";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";

export default function App() {
	const Stack = createNativeStackNavigator();

	return (
		<Provider store={store}>
			<NavigationContainer>
				<SafeAreaProvider>
					<Stack.Navigator initialRouteName="SignUpScreen">
						<Stack.Screen
							name="SignUpScreen"
							component={SignUpScreen}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="SignInScreen"
							component={SignInScreen}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="SignUpInfoScreen"
							component={SignUpInfoScreen}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="HomeScreen"
							component={HomeScreen}
							options={{ headerShown: false }}
						/>
					</Stack.Navigator>
				</SafeAreaProvider>
			</NavigationContainer>
		</Provider>
	);
}

import React, { useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Provider } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "../../../store";
import GenderCard from "../../components/GenderCard";
import HeightCard from "../../components/HeightCard";

const SignUpInfoScreen = () => {
	const Stack = createNativeStackNavigator();

	return (
		<Provider store={store}>
			<NavigationContainer independent={true}>
				<SafeAreaProvider style={{ justifyContent: "center", flex: 1 }}>
					<Stack.Navigator>
						<Stack.Screen
							name="GenderCard"
							component={GenderCard}
							options={{ headerShown: false }}
							key={1}
						/>
						<Stack.Screen
							name="HeightCard"
							component={HeightCard}
							options={{ headerShown: false }}
							key={2}
						/>
					</Stack.Navigator>
				</SafeAreaProvider>
			</NavigationContainer>
		</Provider>
	);
};

export default SignUpInfoScreen;

const styles = StyleSheet.create({});

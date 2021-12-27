import React, { useEffect, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Provider } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from "../../../store";
import GenderCard from "../../components/GenderCard";
import HeightCard from "../../components/HeightCard";
import AgeCard from "../../components/AgeCard";
import ActivityCard from "../../components/ActivityCard";
import HomeScreen from "../HomeScreen/HomeScreen";

const SignUpInfoScreen = () => {
	const Stack = createNativeStackNavigator();

	const navigation = useNavigation();

	const goToHomeScreen = () => {
		navigation.navigate("HomeScreen");
	};

	return (
		<Provider store={store}>
			<NavigationContainer independent={true}>
				<SafeAreaProvider style={{ justifyContent: "center", flex: 1 }}>
					<Stack.Navigator initialRouteName="GenderCard">
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
						<Stack.Screen
							name="AgeCard"
							component={AgeCard}
							options={{ headerShown: false }}
							key={3}
						/>
						<Stack.Screen
							name="ActivityCard"
							component={ActivityCard}
							options={{ headerShown: false }}
							key={4}
						/>
						<Stack.Screen
							name="HomeScreen"
							component={HomeScreen}
							options={{ headerShown: false }}
							key={4}
						/>
					</Stack.Navigator>
				</SafeAreaProvider>
			</NavigationContainer>
		</Provider>
	);
};

export default SignUpInfoScreen;

const styles = StyleSheet.create({});

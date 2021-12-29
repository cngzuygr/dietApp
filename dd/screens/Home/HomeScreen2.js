import React, { useEffect, useLayoutEffect, useState } from "react";
import {
	ActivityIndicator,
	RefreshControlBase,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { auth, db } from "../../firebase";
import { useFonts } from "expo-font";
import { Avatar } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import Calories from "./Calories";

const HomeScreen2 = ({ navigation }) => {
	let [fontsLoaded] = useFonts({
		Yellowtail: require("../../assets/fonts/Yellowtail-Regular.ttf"),
		Poppins: require("../../assets/fonts/Poppins-Regular.ttf"),
		PoppinsMedium: require("../../assets/fonts/Poppins-Medium.ttf"),
	});

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: () => (
				<View
					style={{
						flex: 1,
						justifyContent: "center",
					}}
				>
					<TouchableOpacity>
						<Text style={{ fontFamily: "Yellowtail", fontSize: 24 }}>
							DiyetApp
						</Text>
					</TouchableOpacity>
				</View>
			),
			headerLeft: () => null,
			headerRight: () => (
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<TouchableOpacity style={{ marginRight: 10 }}>
						<Avatar
							rounded
							size={40}
							source={{
								uri: auth?.currentUser?.photoURL,
							}}
						/>
					</TouchableOpacity>
					<TouchableOpacity onPress={signOutUser}>
						<Ionicons name="exit-outline" size={32} color="black" />
					</TouchableOpacity>
				</View>
			),
		});
	});

	const [user, setUser] = useState({ calorieNeed: null });
	const [lose, setLose] = useState({ bgColor: "white", elevation: 2 });
	const [maintain, setMaintain] = useState({
		bgColor: "#D3D3D3",
		elevation: 5,
	});
	const [gain, setGain] = useState({ bgColor: "white", elevation: 2 });

	const [mealType, setMealType] = useState("");
	const [ingredient, setIngredient] = useState("");
	const [health, setHealth] = useState("");
	const signOutUser = () => {
		auth.signOut().then(() => {
			navigation.navigate("WelcomeScreen");
		});
	};
	useEffect(() => {
		const subscriber = db
			.collection("users")
			.doc(auth?.currentUser?.uid)
			.onSnapshot((documentSnapshot) => {
				setUser(documentSnapshot.data());
			});
		// Stop listening for updates when no longer required 		<FoodSuggestions user={user} />
		return () => subscriber();
	}, [user]);

	const goToFoodSuggestions = () => {
		navigation.navigate("FoodSuggestions", {
			user,
			mealType,
			ingredient,
			health,
		});
	};

	return (
		<>
			{user.calorieNeed != null ? (
				<View>
					<Calories
						user={user}
						goToFoodSuggestions={goToFoodSuggestions}
						mealType={mealType}
						setMealType={setMealType}
						ingredient={ingredient}
						setIngredient={setIngredient}
						health={health}
						setHealth={setHealth}
					/>
					<StatusBar />
				</View>
			) : (
				<View style={{ flex: 1, justifyContent: "center" }}>
					<ActivityIndicator color={"black"} />
				</View>
			)}
		</>
	);
};

export default HomeScreen2;

const styles = StyleSheet.create({});

import React, { useEffect, useState } from "react";
import {
	ActivityIndicator,
	ScrollView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	Modal,
} from "react-native";
import { auth, db } from "../../firebase";
import { Divider } from "react-native-elements";

const Calories = ({
	user,
	goToFoodSuggestions,
	mealType,
	setMealType,
	ingredient,
	setIngredient,
	health,
	setHealth,
}) => {
	const [lose, setLose] = useState({ bgColor: "white", elevation: 2 });
	const [maintain, setMaintain] = useState({
		bgColor: "#D3D3D3",
		elevation: 5,
	});
	const [gain, setGain] = useState({ bgColor: "white", elevation: 2 });
	const [calorieTake, setCalorieTake] = useState(
		`${parseInt(user.calorieNeed)}`
	);

	const [calorieSit, setCalorieSit] = useState("maintain your");
	const [modalSit, setModalSit] = useState(false);
	//const [mealType, setMealType] = useState("");

	//console.log(loseBg);
	//#D3D3D3

	const setLoseFun = () => {
		setLose({ bgColor: "#D3D3D3", elevation: 10 });
		setMaintain({ bgColor: "white", elevation: 2 });
		setGain({ bgColor: "white", elevation: 2 });
		setCalorieSit("lose");
		setCalorieTake(
			`${parseInt(user.calorieNeed) - 1000}-${parseInt(user.calorieNeed) - 500}`
		);
	};
	const setMaintainFun = () => {
		setMaintain({ bgColor: "#D3D3D3", elevation: 10 });
		setLose({ bgColor: "white", elevation: 2 });
		setGain({ bgColor: "white", elevation: 2 });
		setCalorieSit("maintain your");
		setCalorieTake(`${parseInt(user.calorieNeed)}`);
	};
	const setGainFun = () => {
		setGain({ bgColor: "#D3D3D3", elevation: 10 });
		setMaintain({ bgColor: "white", elevation: 2 });
		setLose({ bgColor: "white", elevation: 2 });
		setCalorieSit("gain");
		setCalorieTake(
			`${parseInt(user.calorieNeed) + 500}-${parseInt(user.calorieNeed) + 1000}`
		);
	};

	return (
		<>
			{user != null ? (
				<View
					style={{
						justifyContent: "center",
						alignItems: "center",
						alignContent: "center",
					}}
				>
					<ScrollView
						style={styles.container}
						showsVerticalScrollIndicator={false}
					>
						<View style={styles.innerContainer}>
							<Text style={styles.innerText}>
								{user.displayName} {user.displayLastname}
							</Text>
							<View style={{ flexDirection: "row" }}>
								<View style={{ flex: 1 }}>
									<Text style={styles.innerText}>Height</Text>
									<Text style={styles.innerText}>{user.height}</Text>
								</View>
								<Divider
									orientation="vertical"
									width={0.5}
									color={"black"}
									style={{ alignSelf: "center" }}
								/>
								<View style={{ flex: 1 }}>
									<Text style={styles.innerText}>Weight</Text>
									<Text style={styles.innerText}>{user.weight}</Text>
								</View>
								<Divider
									orientation="vertical"
									width={0.5}
									color={"black"}
									style={{ alignSelf: "center" }}
								/>
								<View style={{ flex: 1 }}>
									<Text style={styles.innerText}>Age</Text>
									<Text style={styles.innerText}>{user.age}</Text>
								</View>
							</View>
						</View>
						<View style={styles.innerContainer}>
							<Text style={styles.innerText}>Your body mass index rate</Text>
							<Text style={styles.innerText}>{parseInt(user.bmi)}</Text>
						</View>
						<View style={styles.innerContainer}>
							<Text style={styles.innerText}>
								Your suggested healthy weight
							</Text>
							{user.gender != "erkek" ? (
								<Text style={styles.innerText}>
									{parseInt(50 + 0.91 * (user.height - 152.4))} kg.
								</Text>
							) : (
								<Text style={styles.innerText}>
									{parseInt(45.5 + 0.91 * (user.height - 152.4))} kg.
								</Text>
							)}
						</View>
						<View style={styles.innerContainer}>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "center",
									marginTop: 10,
								}}
							>
								<TouchableOpacity
									style={{
										width: "30%",
										height: 40,
										justifyContent: "center",
										borderTopLeftRadius: 5,
										borderBottomLeftRadius: 5,
										borderColor: "gray",
										borderLeftWidth: 0.7,
										borderTopWidth: 0.7,
										borderBottomWidth: 0.7,
										backgroundColor: `${lose.bgColor}`,
										elevation: lose.elevation,
									}}
									onPress={setLoseFun}
								>
									<Text style={styles.loseText}>Lose</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={{
										width: "30%",
										height: 40,
										justifyContent: "center",
										borderColor: "gray",
										borderTopWidth: 0.7,
										borderBottomWidth: 0.7,
										borderLeftWidth: 0.7,
										borderRightWidth: 0.7,
										backgroundColor: `${maintain.bgColor}`,
										elevation: maintain.elevation,
									}}
									onPress={setMaintainFun}
								>
									<Text style={styles.maintainText}>Maintain</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={{
										width: "30%",
										height: 40,
										justifyContent: "center",
										borderTopRightRadius: 5,
										borderBottomRightRadius: 5,
										borderColor: "gray",
										borderTopWidth: 0.7,
										borderBottomWidth: 0.7,
										borderRightWidth: 0.7,
										backgroundColor: `${gain.bgColor}`,
										elevation: gain.elevation,
									}}
									onPress={setGainFun}
								>
									<Text style={styles.gainText}>Gain</Text>
								</TouchableOpacity>
							</View>
							<Text style={styles.innerText}>
								To {calorieSit} weight, you should eat
							</Text>
							<Text style={styles.innerText}>{calorieTake}</Text>
						</View>
						<View style={styles.innerContainer}>
							<Text style={styles.innerText}>
								Make a choice to see our recipe suggestions for you
							</Text>
							<TouchableOpacity
								style={styles.coursesButton}
								onPress={() => {
									setModalSit(true), setMealType("&mealType=breakfast");
								}}
							>
								<Image
									style={styles.coursesImage}
									blurRadius={5}
									source={require("../../assets/icons/breakfast.jpg")}
									resizeMode="stretch"
								/>
								<Text style={styles.coursesText}>Breakfast</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.coursesButton}
								onPress={() => {
									setModalSit(true), setMealType("&mealType=lunch");
								}}
							>
								<Image
									style={styles.coursesImage}
									blurRadius={5}
									source={require("../../assets/icons/lunch.jpg")}
									resizeMode="stretch"
								/>
								<Text style={styles.coursesText}>Lunch</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.coursesButton}
								onPress={() => {
									setModalSit(true), setMealType("&mealType=dinner");
								}}
							>
								<Image
									style={styles.coursesImage}
									blurRadius={5}
									source={require("../../assets/icons/dinner.jpg")}
									resizeMode="stretch"
								/>
								<Text style={styles.coursesText}>Dinner</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.coursesButton}
								onPress={() => {
									setMealType("&mealType=snack");
								}}
								onPressOut={() => {
									goToFoodSuggestions(mealType);
								}}
							>
								<Image
									style={styles.coursesImage}
									blurRadius={5}
									source={require("../../assets/icons/snacks.jpg")}
									resizeMode="stretch"
								/>
								<Text style={styles.coursesText}>Snacks</Text>
							</TouchableOpacity>
						</View>
					</ScrollView>
					<Modal transparent={true} visible={modalSit}>
						<ScrollView style={{ backgroundColor: "#000000BB" }}>
							<View
								style={{
									width: "80%",
									backgroundColor: "lightblue",
									height: 300,
									alignSelf: "center",
									borderRadius: 10,
									marginTop: "50%",
									flexDirection: "column",
									height: 400,
								}}
							>
								<Text
									style={{
										alignSelf: "center",
										fontFamily: "Poppins",
										marginTop: 10,
									}}
								>
									Choose a main ingredient for your recipe
								</Text>
								<ScrollView
									style={{
										flexDirection: "column",
									}}
								>
									<TouchableOpacity
										style={{
											flexDirection: "column",
											borderRadius: 10,
											justifyContent: "center",
											width: "90%",
											height: 100,
											marginLeft: 20,
											marginBottom: 10,
											backgroundColor: "#8c953c",
										}}
										onPress={() => {
											setHealth("&health=vegetarian");
										}}
									>
										<Image
											style={styles.ingImage}
											source={require("../../assets/icons/vegetable.jpg")}
										/>
										<Text style={styles.ingText}>Veggies</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={{
											flexDirection: "column",
											borderRadius: 10,
											justifyContent: "center",
											width: "90%",
											height: 100,
											marginLeft: 20,
											marginBottom: 10,
											backgroundColor: "#deae12",
										}}
										onPress={() => {
											setIngredient("fish");
										}}
									>
										<Image
											style={styles.ingImage}
											source={require("../../assets/icons/fish.jpg")}
										/>
										<Text style={styles.ingText}>Fish</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={{
											flexDirection: "column",
											borderRadius: 10,
											justifyContent: "center",
											width: "90%",
											height: 100,
											marginLeft: 20,
											marginBottom: 10,
											backgroundColor: "#b07c64",
										}}
										onPress={() => {
											setIngredient("meat");
										}}
									>
										<Image
											style={styles.ingImage}
											source={require("../../assets/icons/meat.jpg")}
										/>
										<Text style={styles.ingText}>Meat</Text>
									</TouchableOpacity>
									<TouchableOpacity
										style={{
											flexDirection: "column",
											borderRadius: 10,
											justifyContent: "center",
											width: "90%",
											height: 100,
											marginLeft: 20,
											marginBottom: 10,
											backgroundColor: "#c99036",
										}}
										onPress={() => {
											setIngredient("chicken");
										}}
									>
										<Image
											style={styles.ingImage}
											source={require("../../assets/icons/chicken.jpg")}
										/>
										<Text style={styles.ingText}>Chicken</Text>
									</TouchableOpacity>
								</ScrollView>
								<View
									style={{
										height: 50,
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<TouchableOpacity onPress={() => setModalSit(false)}>
										<Text style={{ fontFamily: "Poppins", color: "red" }}>
											BACK
										</Text>
									</TouchableOpacity>
								</View>
							</View>
						</ScrollView>
					</Modal>
				</View>
			) : (
				<View>
					<ActivityIndicator />
				</View>
			)}
		</>
	);
};

export default Calories;

const styles = StyleSheet.create({
	container: { height: "100%" },
	innerContainer: {
		backgroundColor: "white",
		marginHorizontal: 10,
		marginTop: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.51,
		shadowRadius: 13.16,

		elevation: 20,
	},
	innerText: {
		fontFamily: "Poppins",
		fontSize: 16,
		padding: 10,
		textAlign: "center",
	},
	loseText: {
		fontFamily: "Poppins",
		fontSize: 16,
		padding: 10,
		textAlign: "center",
	},
	maintainText: {
		fontFamily: "Poppins",
		fontSize: 16,
		padding: 10,
		textAlign: "center",
	},
	gainText: {
		fontFamily: "Poppins",
		fontSize: 16,
		padding: 10,
		textAlign: "center",
	},
	coursesButton: {
		alignSelf: "center",
		borderRadius: 50,
		width: "100%",
		marginBottom: 20,
		justifyContent: "center",
	},
	coursesImage: {
		width: "100%",
		height: 200,
		borderRadius: 50,
	},
	coursesText: {
		position: "absolute",
		alignSelf: "center",
		color: "white",
		fontSize: 36,
		textShadowRadius: 10,
		textShadowOffset: { width: 1, height: 5 },
	},
	ingButton: {
		flexDirection: "column",
		borderRadius: 10,
		justifyContent: "center",
		width: "90%",
		height: 100,
		marginLeft: 20,
		marginBottom: 10,
		backgroundColor: "#8c953c",
	},
	ingText: {
		position: "absolute",
		alignSelf: "center",
		color: "white",
		fontFamily: "Yellowtail",
		fontSize: 24,
		width: 70,
	},
	ingImage: { width: 100, height: 100, borderRadius: 10 },
});

//deae12

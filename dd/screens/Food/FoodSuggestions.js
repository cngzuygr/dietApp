import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	ActivityIndicator,
} from "react-native";
import Recipe from "./Recipe";

const FoodSuggestions = ({ route }) => {
	const APP_ID = "1ab711f0";
	const APP_KEY = "e0c301971d5440cc2e3535f15ebb573e";

	console.log(route?.params?.mealType);
	console.log(route?.params?.ingredient);

	const [recipes, setRecipes] = useState([]);

	/*const calorieMeal =
		parseInt(parseInt(user.calorieNeed) * (30 / 100)) +
		"-" +
		parseInt(parseInt(user.calorieNeed) * (30 / 100) + 100);

	useEffect(() => {
		getRecipes();
	}, []);*/

	const getRecipes = async () => {
		setRecipes(null);
		const response = await fetch(
			`https://api.edamam.com/search?q=rosemary garlic foccacia&app_id=${APP_ID}&app_key=${APP_KEY}`
		);
		const data = await response.json();
		console.log(data.hits);
		setRecipes(data.hits);
	};

	return (
		<View>
			<View style={styles.mealType}>
				<Text>{route.params.mealType}</Text>
				<TouchableOpacity
					onPress={() => setmealType("breakfast")}
					style={styles.meals}
				>
					<Text style={styles.mealsText}>Kahvaltı</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => setmealType("lunch")}
					style={styles.meals}
				>
					<Text style={styles.mealsText}>Öğle Yemeği</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => setmealType("dinner")}
					style={styles.meals}
				>
					<Text style={styles.mealsText}>Akşam Yemeği</Text>
				</TouchableOpacity>
			</View>
			{recipes != null ? (
				<ScrollView
					style={{
						borderTopLeftRadius: 15,
						borderTopRightRadius: 15,
					}}
				>
					{recipes.map((recipe) => (
						<Recipe
							key={recipe.recipe.image}
							title={recipe.recipe.label}
							calories={recipe.recipe.calories}
							image={recipe.recipe.image}
							serving={recipe.recipe.yield}
						/>
					))}
				</ScrollView>
			) : (
				<View
					style={{
						height: "100%",
						justifyContent: "center",
					}}
				>
					<ActivityIndicator color={"green"} />
				</View>
			)}
		</View>
	);
};

export default FoodSuggestions;

const styles = StyleSheet.create({
	mealType: {
		flexDirection: "row",
		justifyContent: "center",
	},
	meals: {
		marginHorizontal: 10,
		width: 100,
		height: 45,
		backgroundColor: "lightgreen",
		justifyContent: "center",
		borderRadius: 10,
	},
	mealsText: {
		textAlign: "center",
		fontFamily: "Yellowtail",
		fontSize: 16,
	},
});

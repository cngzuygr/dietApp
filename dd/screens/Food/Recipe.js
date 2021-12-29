import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const Recipe = ({ title, calories, image, serving }) => {
	const caloriesPerServing = calories / serving;

	return (
		<View
			style={{
				height: 200,
				marginBottom: 15,
				flexDirection: "row",
				flexWrap: "wrap",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Image
				style={{
					width: "90%",
					height: 200,
					position: "absolute",
					borderRadius: 40,
				}}
				source={{ uri: `${image}` }}
			/>
			<View
				style={{
					width: "90%",
					height: 200,
					borderRadius: 40,
				}}
			>
				<View style={{ flex: 1, justifyContent: "center" }}>
					<Text
						style={{
							position: "absolute",
							fontWeight: "bold",
							color: "white",
							fontSize: 16,
							alignSelf: "center",
						}}
					>
						{title}
					</Text>
				</View>
				<Text>Kalori Miktarı(Porsiyon):{parseInt(caloriesPerServing)}</Text>
				<Text>Kalori Miktarı:{calories}</Text>
				<Text>{caloriesPerServing}</Text>
			</View>
		</View>
	);
};

export default Recipe;

const styles = StyleSheet.create({});

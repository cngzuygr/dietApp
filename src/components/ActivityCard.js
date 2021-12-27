import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Progress from "react-native-progress";
import { StatusBar } from "expo-status-bar";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setActivityData } from "../../slices/navSlice";

const ActivityCard = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const [selected, setSelected] = useState(false);
	const [activitySelected, setActivitySelected] = useState(null);

	const activity = [
		{
			key: 1,
			title: "Sedentary Lifestyle",
			subTitle: "Little or no exercise",
			exerciseMultiplier: 1.2,
		},
		{
			key: 2,
			title: "Slightly Active",
			subTitle: "Exercise 1-3 times a week",
			exerciseMultiplier: 1.375,
		},
		{
			key: 3,
			title: "Moderately Active",
			subTitle: "Exercise 4-5 times a week",
			exerciseMultiplier: 1.55,
		},
		{
			key: 4,
			title: "Active Lifestyle",
			subTitle: "Exercise 6-7 times a week",
			exerciseMultiplier: 1.725,
		},
		{
			key: 5,
			title: "Very Active Lifestyle",
			subTitle: "Very intense exercise daily or physical job",
			exerciseMultiplier: 1.9,
		},
	];

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
			<ScrollView>
				<Progress.Bar
					style={{ alignSelf: "center", marginTop: 50 }}
					progress={1}
					width={250}
					color="#8883f0"
					borderWidth={0.7}
				/>
				<View
					style={{
						flex: 10,
						justifyContent: "center",
						marginBottom: 50,
						marginTop: 50,
					}}
				>
					<Text style={{ fontSize: 24, color: "#a4a2ac", alignSelf: "center" }}>
						Activity Information:
					</Text>

					{activity.map(({ title, subTitle, key, exerciseMultiplier }) => (
						<TouchableOpacity
							style={{
								alignItems: "center",
								width: "80%",
								alignSelf: "center",
								borderWidth: 0.5,
								borderRadius: 10,
								marginTop: 10,
								height: 60,
								justifyContent: "center",
								borderColor: "#8883f0",
								backgroundColor: `${
									activitySelected?.key == key ? "#8883f0" : "white"
								}`,
							}}
							onPress={() =>
								setActivitySelected({
									key: key,
									title: title,
									subTitle: subTitle,
									exerciseMultiplier: exerciseMultiplier,
								})
							}
							key={key}
						>
							<Text
								style={{
									fontWeight: "bold",
									color: `${
										activitySelected?.key == key ? "white" : "#8883f0"
									}`,
								}}
							>
								{title.toUpperCase()}
							</Text>
							<Text
								style={{
									color: `${activitySelected?.key == key ? "white" : "gray"}`,
								}}
							>
								{subTitle}
							</Text>
						</TouchableOpacity>
					))}

					<TouchableOpacity
						style={{
							backgroundColor: `${selected ? "gray" : "#8883f0"}`,
							width: "50%",
							height: 50,
							alignSelf: "center",
							borderRadius: 30,
							marginTop: 60,
							justifyContent: "center",
						}}
						disabled={selected}
						onPress={() => {
							dispatch(setActivityData(activitySelected));
							navigation.navigate("HomeScreen");
						}}
					>
						<Text
							style={{
								color: "white",
								fontSize: 16,
								alignSelf: "center",
							}}
						>
							Next
						</Text>
					</TouchableOpacity>
					<View
						style={{
							alignItems: "center",
							marginTop: 50,
						}}
					>
						<Icon
							name="chevron-back"
							type="ionicon"
							color="red"
							raised
							size={20}
							onPress={() => navigation.goBack()}
						/>
					</View>
				</View>
			</ScrollView>
			<StatusBar />
		</SafeAreaView>
	);
};

export default ActivityCard;

const styles = StyleSheet.create({});

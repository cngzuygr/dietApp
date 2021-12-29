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
import { setPurposeData } from "../../slices/navSlice";
import { useDispatch } from "react-redux";
const PurposeCard = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation();
	const [selected, setSelected] = useState(false);
	const [purposeSelected, setPurposeSelected] = useState(null);

	const purpose = [
		{
			key: 1,
			title: "Lose Weight",
			subTitle: "500 - 1000 less cal. per day",
			purpose1: -500,
			purpose2: -1000,
		},
		{
			key: 2,
			title: "Maintain Weight",
			subTitle: "Your daily cal. need",
			purpose1: 0,
			purpose2: 0,
		},
		{
			key: 3,
			title: "Gain Weight",
			subTitle: "500 - 1000 more cal. per day",
			purpose1: 500,
			purpose2: 1000,
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
						What is your purpose:
					</Text>

					{purpose.map(({ title, subTitle, key, purpose1, purpose2 }) => (
						<View>
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
										purposeSelected?.key == key ? "#8883f0" : "white"
									}`,
								}}
								onPress={() =>
									setPurposeSelected({
										key: key,
										title: title,
									})
								}
								key={key}
							>
								<Text
									style={{
										fontWeight: "bold",
										color: `${
											purposeSelected?.key == key ? "white" : "#8883f0"
										}`,
									}}
								>
									{title.toUpperCase()}
								</Text>
							</TouchableOpacity>
						</View>
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
							dispatch(setPurposeData(purposeSelected));
							navigation.navigate("PurposeCard");
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

export default PurposeCard;

const styles = StyleSheet.create({});

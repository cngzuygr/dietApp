import React, { useEffect, useRef, useState } from "react";
import {
	StyleSheet,
	Text,
	TextInput,
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
import { setGenderData } from "../../slices/navSlice";

const GenderCard = () => {
	const dispatch = useDispatch();

	const navigation = useNavigation();
	const [selected, setSelected] = useState(null);

	const gender = [
		{ key: 1, name: "man", color: "#5595c6" },
		{ key: 2, name: "woman", color: "#d02583" },
	];

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
			<ScrollView>
				<Progress.Bar
					style={{ alignSelf: "center", marginTop: 50 }}
					progress={0.25}
					width={250}
					color="#8883f0"
					borderWidth={0.7}
				/>
				<Text
					style={{
						alignSelf: "center",
						fontSize: 36,
						color: "#a4a2ac",
						marginTop: 40,
					}}
				>
					Choose your gender
				</Text>
				<View
					style={{
						justifyContent: "center",
						marginTop: 150,
					}}
				>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "center",
							marginBottom: 50,
							alignSelf: "center",
						}}
					>
						{gender.map(({ name, color, key }) => (
							<View
								style={{
									alignItems: "center",
								}}
								key={key}
							>
								<Icon
									name={name}
									type="ionicon"
									raised
									size={36}
									color={color}
									onPress={() => setSelected(name)}
									reverse={selected == name}
								/>
								<Text style={{ fontWeight: "bold", color: `${color}` }}>
									{name.toUpperCase()}
								</Text>
							</View>
						))}
					</View>
					<TouchableOpacity
						style={{
							backgroundColor: `${selected == null ? "gray" : "#8883f0"}`,
							width: "50%",
							height: 50,
							alignSelf: "center",
							borderRadius: 30,
							marginTop: 60,
							justifyContent: "center",
						}}
						disabled={!selected}
						onPress={() => {
							dispatch(setGenderData(selected));
							navigation.navigate("HeightCard");
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
				</View>
			</ScrollView>
			<StatusBar />
		</SafeAreaView>
	);
};

export default GenderCard;

const styles = StyleSheet.create({});

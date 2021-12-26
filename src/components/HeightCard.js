import React, { useEffect, useRef, useState } from "react";
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
import Slider from "@react-native-community/slider";
import { useDispatch } from "react-redux";
import { setHeightData, setWeightData } from "../../slices/navSlice";

const HeightCard = () => {
	const dispatch = useDispatch();

	const navigation = useNavigation();
	//const [selected, setSelected] = useState(null);
	const [height, setHeight] = useState(null);
	const [weight, setWeight] = useState(null);

	const selected = height == null || weight == null;

	const timer = useRef(null);

	const addHeight = () => {
		setHeight((prevValue) => prevValue + 1);
		timer.current = setTimeout(addHeight, 1);
	};

	const subHeight = () => {
		setHeight((prevValue) => prevValue - 1);
		timer.current = setTimeout(subHeight, 1);
	};

	const addWeight = () => {
		setWeight((prevValue) => prevValue + 1);
		timer.current = setTimeout(addWeight, 1);
	};

	const subWeight = () => {
		setWeight((prevValue) => prevValue - 1);
		timer.current = setTimeout(subWeight, 1);
	};

	const stopTimer = () => {
		clearTimeout(timer.current);
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
			<ScrollView>
				<Progress.Bar
					style={{ alignSelf: "center", marginTop: 50 }}
					progress={0.4}
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
						Your height:
					</Text>
					<Slider
						style={{
							width: "80%",
							height: 60,
							alignSelf: "center",
						}}
						value={height}
						step={1}
						minimumValue={130}
						maximumValue={220}
						minimumTrackTintColor="#8883f0"
						maximumTrackTintColor="#8883f0"
						thumbTintColor="#8883f0"
						onValueChange={(value) => {
							setHeight(value);
						}}
					/>

					{height != null ? (
						<View style={{ flexDirection: "row", justifyContent: "center" }}>
							<Text
								style={{
									alignSelf: "center",
									fontWeight: "bold",
									fontSize: 36,
									color: "#8883f0",
								}}
							>
								{height} cm.
							</Text>
							<View>
								<Icon
									name="add-outline"
									type="ionicon"
									delayLongPress={200}
									onPress={() => setHeight(height + 1)}
									onLongPress={() => {
										addHeight();
									}}
									onPressOut={() => stopTimer()}
									raised
									size={16}
								/>
								<Icon
									name="remove-outline"
									type="ionicon"
									delayLongPress={200}
									onPress={() => setHeight(height - 1)}
									onLongPress={() => {
										subHeight();
									}}
									onPressOut={() => stopTimer()}
									raised
									size={16}
								/>
							</View>
						</View>
					) : null}

					<Text style={{ fontSize: 24, color: "#a4a2ac", alignSelf: "center" }}>
						Your weight:
					</Text>
					<Slider
						style={{
							width: "80%",
							height: 60,
							alignSelf: "center",
						}}
						value={weight}
						step={1}
						minimumValue={0}
						maximumValue={300}
						minimumTrackTintColor="#8883f0"
						maximumTrackTintColor="#8883f0"
						thumbTintColor="#8883f0"
						onValueChange={(value) => {
							setWeight(value);
						}}
					/>

					{weight != null ? (
						<View style={{ flexDirection: "row", justifyContent: "center" }}>
							<Text
								style={{
									alignSelf: "center",
									fontWeight: "bold",
									fontSize: 36,
									color: "#8883f0",
								}}
							>
								{weight} kg.
							</Text>
							<View>
								<Icon
									name="add-outline"
									type="ionicon"
									delayLongPress={200}
									onPress={() => setWeight(weight + 1)}
									onLongPress={() => {
										addWeight();
									}}
									onPressOut={() => stopTimer()}
									raised
									size={16}
								/>
								<Icon
									name="remove-outline"
									type="ionicon"
									delayLongPress={200}
									onPress={() => setWeight(weight - 1)}
									onLongPress={() => {
										subWeight();
									}}
									onPressOut={() => stopTimer()}
									raised
									size={16}
								/>
							</View>
						</View>
					) : null}

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
							dispatch(setHeightData(height));
							dispatch(setWeightData(weight));
							navigation.navigate("AgeCard");
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

export default HeightCard;

const styles = StyleSheet.create({});

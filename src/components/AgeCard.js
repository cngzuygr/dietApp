import React, { useEffect, useRef, useState } from "react";
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	ScrollView,
	Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Progress from "react-native-progress";
import { StatusBar } from "expo-status-bar";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { setBirthdayData } from "../../slices/navSlice";
import DatePicker from "react-native-modern-datepicker";

const AgeCard = () => {
	const dispatch = useDispatch();
	const [selectedDate, setSelectedDate] = useState("");
	const [selected, setSelected] = useState(true);

	const navigation = useNavigation();

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
			<ScrollView>
				<Progress.Bar
					style={{ alignSelf: "center", marginTop: 50 }}
					progress={0.75}
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
						Your birthday:
					</Text>
					<DatePicker
						onSelectedChange={(date) => {
							setSelectedDate(date), setSelected(false);
						}}
						mode="calendar"
						current="2000-01-01"
						options={{
							textHeaderColor: "#8883f0",
							textDefaultColor: "#8883f0",
							selectedTextColor: "#fff",
							mainColor: "#8883f0",
							textSecondaryColor: "#8883f0",
						}}
					/>
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
							dispatch(setBirthdayData(selectedDate));
							navigation.navigate("ActivityCard");
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

export default AgeCard;

const styles = StyleSheet.create({});

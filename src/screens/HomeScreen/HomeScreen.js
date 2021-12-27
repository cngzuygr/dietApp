import { StatusBar } from "expo-status-bar";
import React from "react";
import {
	StyleSheet,
	Text,
	ScrollView,
	TouchableOpacity,
	View,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
	selectActivityData,
	selectBirthdayData,
	selectGenderData,
	selectHeightData,
	selectWeightData,
} from "../../../slices/navSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "react-native-elements";
const HomeScreen = () => {
	const birthday = useSelector(selectBirthdayData);
	const gender = useSelector(selectGenderData);
	const weight = useSelector(selectWeightData);
	const height = useSelector(selectHeightData);
	const activity = useSelector(selectActivityData);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
			<View>
				<TouchableOpacity
					style={{
						flexDirection: "row",
						width: "90%",
						alignSelf: "center",
						height: 200,
						marginTop: 30,
						backgroundColor: "white",
						borderRadius: 45,
						shadowColor: "#8883f0",
						shadowOffset: {
							width: 0,
							height: 9,
						},
						shadowOpacity: 0.7,
						shadowRadius: 11.95,
						elevation: 18,
					}}
				>
					<View style={{ justifyContent: "center", marginLeft: 40 }}>
						<View
							style={{
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Icon name={gender} type="ionicon" raised size={32} />
						</View>
						<Text style={{ alignSelf: "center", marginTop: 10 }}>
							Celal Bilici
						</Text>
						<View style={{ flexDirection: "row" }}>
							<Icon name="cake" type="entypo" />
							<Text style={{ alignSelf: "center", marginLeft: 5 }}>
								{birthday}
							</Text>
						</View>
					</View>
					<View style={{ flex: 1, justifyContent: "center" }}>
						<View style={styles.profileInlineContainer}>
							<Icon name="weight" type="font-awesome-5" />
							<Text style={styles.profileTextInline}>{weight}</Text>
						</View>
						<View style={styles.profileInlineContainer}>
							<Icon name="human-male-height" type="material-community" />
							<Text style={styles.profileTextInline}>{height}</Text>
						</View>
						<View style={styles.profileInlineContainer}>
							<Icon name="running" type="font-awesome-5" />
							<Text style={styles.profileTextInline}>{activity?.title}</Text>
						</View>
						<View style={styles.profileInlineContainer}>
							<Icon name="food-apple" type="material-community" />
							<Text style={styles.profileTextInline}>3500 cal.</Text>
						</View>
					</View>
				</TouchableOpacity>
			</View>
			<StatusBar />
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	profileTextInline: {
		alignSelf: "center",
	},
	profileInlineContainer: {
		flexDirection: "row",
		marginLeft: 60,
		marginTop: 20,
	},
});

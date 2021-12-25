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

const SignUpInfoScreen = () => {
	const navigation = useNavigation();
	const [selected, setSelected] = useState(null);

	const gender = [
		{ key: 1, name: "man", color: "#5595c6" },
		{ key: 2, name: "woman", color: "#d02583" },
	];

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={{ flex: 1, marginTop: 50 }}>
				<Progress.Bar
					style={{ alignSelf: "center" }}
					progress={0.2}
					width={300}
					color="#8883f0"
					borderWidth={0.7}
				/>
			</View>
			<Text style={{ alignSelf: "center", fontSize: 36, color: "#a4a2ac" }}>
				Choose your gender
			</Text>
			<View style={{ flex: 10, justifyContent: "center", marginBottom: 50 }}>
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
								onPress={() => setSelected(key)}
								reverse={selected == key}
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
					onPress={() => navigation.navigate("HeightCard")}
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
			<StatusBar />
		</SafeAreaView>
	);
};

export default SignUpInfoScreen;

const styles = StyleSheet.create({});

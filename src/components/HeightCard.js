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

const HeightCard = () => {
	const navigation = useNavigation();

	const gender = [
		{ key: "3", name: "man", color: "#5595c6" },
		{ key: "4", name: "woman", color: "#d02583" },
	];

	return (
		<SafeAreaView style={{ justifyContent: "center", flex: 1 }}>
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<Text>sa</Text>
			</TouchableOpacity>
			<Progress.Bar
				style={{}}
				progress={1}
				width={100}
				color="#8883f0"
				borderWidth={0.3}
			/>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "center",
					marginBottom: 50,
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
							onPress={() => console.log(name)}
						/>
						<Text style={{ fontWeight: "bold", color: `${color}` }}>
							{name.toUpperCase()}
						</Text>
					</View>
				))}
			</View>
			<Text style={{ alignSelf: "center", fontSize: 36, color: "#a4a2ac" }}>
				Choose your gender
			</Text>
			<StatusBar />
		</SafeAreaView>
	);
};

export default HeightCard;

const styles = StyleSheet.create({});

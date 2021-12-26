import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { selectHeightData } from "../../slices/navSlice";

const AgeCard = () => {
	const height = useSelector(selectHeightData);

	return (
		<View>
			{console.log(height)}
			<Text>{height}</Text>
		</View>
	);
};

export default AgeCard;

const styles = StyleSheet.create({});

import React, { useEffect, useRef, useState } from "react";
import {
	Text,
	TextInput,
	TouchableOpacity,
	View,
	ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const SignInScreen = () => {
	const navigation = useNavigation();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const selected = email == "" || password == "";

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View
					style={{
						marginTop: 40,
						marginBottom: 30,
						justifyContent: "flex-start",
						position: "absolute",
					}}
				>
					<Icon
						raised
						name="chevron-back"
						type="ionicon"
						color="#f50"
						size={16}
						onPress={() => navigation.navigate("SignUpScreen")}
					/>
				</View>
				<View
					style={{
						marginTop: 50,
						marginBottom: 80,
					}}
				>
					<Text style={styles.loginAccountText}>Login to your Account</Text>
				</View>
				<Text style={styles.infoText}>E-mail</Text>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.textInput}
						autoCapitalize="none"
						value={email}
						onChangeText={(text) => setEmail(text)}
					/>
				</View>
				<Text style={styles.infoText}>Password</Text>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.textInput}
						secureTextEntry={true}
						value={password}
						onChangeText={(text) => setPassword(text)}
					/>
				</View>
				<TouchableOpacity
					style={{
						backgroundColor: `${selected ? "gray" : "#8883f0"}`,
						width: "80%",
						height: 50,
						alignSelf: "center",
						borderRadius: 30,
						marginTop: 60,
						justifyContent: "center",
					}}
					disabled={selected}
				>
					<Text
						style={{
							color: "white",
							fontSize: 16,
							alignSelf: "center",
						}}
					>
						Sign Up
					</Text>
				</TouchableOpacity>
			</ScrollView>
			<StatusBar />
		</SafeAreaView>
	);
};

export default SignInScreen;

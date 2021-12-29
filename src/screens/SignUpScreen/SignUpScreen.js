import React, { useEffect, useRef, useState } from "react";
import {
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
import styles from "./styles";
import { db, auth } from "../../../firebase";

const SignUpScreen = () => {
	const navigation = useNavigation();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const ScrollView1 = useRef();

	const selected = name == "" || email == "" || password.length < 6;

	const createUser = async () => {
		await db
			.collection("users")
			.doc(auth?.currentUser?.uid)
			.set({
				displayName: name,
				userEmail: email,
				gender: null,
				age: null,
				height: null,
				weight: null,
				activity: null,
				purpose: null,
			})
			.catch((error) => alert(error))
			/*.then(() => {
				auth?.currentUser?.sendEmailVerification();
			})*/
			.then(() => {
				navigation.navigate("SignUpInfoScreen");
			});
	};

	const register = () => {
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((authUser) => {
				authUser.user.updateProfile({
					displayName: name,
				});
			})
			.then(() => {
				createUser();
			})
			.catch((error) => alert(error.message));
	};

	useEffect(() => {
		ScrollView1.current?.scrollToEnd();
	}, [password]);

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView showsVerticalScrollIndicator={false} ref={ScrollView1}>
				<View style={{ flexDirection: "row", justifyContent: "center" }}>
					<Progress.Bar
						style={styles.progressBar}
						progress={1}
						width={200}
						color="#8883f0"
						borderWidth={0.3}
					/>
				</View>
				<Text style={styles.createAccountText}>Create your Account</Text>
				<Text style={styles.infoText}>Username</Text>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.textInput}
						value={name}
						onChangeText={(text) => setName(text)}
					/>
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
				{password.length < 6 ? (
					<View
						style={{
							flexDirection: "row",
						}}
					>
						<Text
							style={{
								marginLeft: 20,
								marginTop: 10,
								color: "red",
								fontSize: 14,
								fontWeight: "bold",
							}}
						>
							Password must be more than 6 characters
						</Text>
						<Icon
							name="information-circle-outline"
							type="ionicon"
							color="red"
							style={{ marginTop: 7 }}
						/>
					</View>
				) : null}
				<View
					style={{ flexDirection: "row", marginTop: 25, alignSelf: "center" }}
				>
					<Text
						style={{
							color: "black",
							alignSelf: "center",
						}}
					>
						Have an account?{" "}
					</Text>
					<TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
						<Text
							style={{
								color: "#8883f0",
								alignSelf: "center",
								textAlignVertical: "center",
								textAlign: "center",
							}}
						>
							Sign-in
						</Text>
					</TouchableOpacity>
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
					onPress={() => register()}
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

export default SignUpScreen;

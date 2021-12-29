import React, { useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	KeyboardAvoidingView,
	Keyboard,
	TouchableWithoutFeedback,
	ActivityIndicator,
} from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { auth, db } from "../firebase";

import styles from "../assets/styles/SignUpScreenStyles";

const DismissKeyboard = ({ children }) => (
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
		{children}
	</TouchableWithoutFeedback>
);

const WelcomeScreen = ({ navigation }) => {
	const [name, setName] = useState("");
	const [lastname, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [photoURL, setPhotoURL] = useState("");

	const createUser = async () => {
		await db
			.collection("users")
			.doc(auth?.currentUser?.uid)
			.set({
				displayName: name,
				displayLastname: lastname,
				userEmail: email,
				photoURL: photoURL,
				gender: null,
				age: null,
				height: null,
				weight: null,
				exerciseType: null,
				calorieNeed: null,
				bmi: null,
			})
			.catch((error) => alert(error))
			.then(() => {
				auth?.currentUser?.sendEmailVerification();
			})
			.then(() => {
				navigation.navigate("HomeScreen");
			});
	};

	const register = () => {
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((authUser) => {
				authUser.user.updateProfile({
					displayName: name,
					displayLastname: lastname,
					photoURL: photoURL,
				});
			})
			.then(() => {
				createUser();
			})
			.catch((error) => alert(error.message));
	};

	let [fontsLoaded] = useFonts({
		Yellowtail: require("../assets/fonts/Yellowtail-Regular.ttf"),
		Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
		PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
	});

	if (!fontsLoaded) {
		return (
			<View style={{ flex: 1, justifyContent: "center" }}>
				<ActivityIndicator />
			</View>
		);
	} else {
		return (
			<KeyboardAvoidingView enabled behavior={"position"} style={styles.view}>
				<StatusBar />
				<View style={styles.viewDiyet}>
					<Text style={styles.textDiyet}>diyet</Text>
				</View>
				<View style={styles.componentsView}>
					<View style={styles.inputViewName}>
						<TextInput
							placeholder={"İsim"}
							placeholderTextColor={"purple"}
							selectionColor={"white"}
							style={styles.inputEmail}
							value={name}
							onChangeText={(text) => setName(text)}
						></TextInput>
					</View>
					<View style={styles.inputViewOthers}>
						<TextInput
							placeholder={"Soyisim"}
							maxLength={16}
							placeholderTextColor={"purple"}
							selectionColor={"white"}
							style={styles.inputPassword}
							value={lastname}
							onChangeText={(text) => setLastname(text)}
						></TextInput>
					</View>
					<View style={styles.inputViewOthers}>
						<TextInput
							placeholder={"e-posta"}
							maxLength={48}
							placeholderTextColor={"purple"}
							selectionColor={"white"}
							style={styles.inputPassword}
							value={email}
							onChangeText={(text) => setEmail(text)}
						></TextInput>
					</View>
					<View style={styles.inputViewOthers}>
						<TextInput
							placeholder={"Şifre"}
							maxLength={16}
							placeholderTextColor={"purple"}
							selectionColor={"white"}
							style={styles.inputPassword}
							autoComplete={password}
							secureTextEntry={true}
							value={password}
							onChangeText={(text) => setPassword(text)}
						></TextInput>
					</View>
					<View style={styles.inputViewOthers}>
						<TextInput
							placeholder={"Fotoğraf URL"}
							placeholderTextColor={"purple"}
							selectionColor={"white"}
							style={styles.inputPhotoURL}
							value={photoURL}
							onChangeText={(text) => setPhotoURL(text)}
						></TextInput>
					</View>
					<TouchableOpacity style={styles.registerButton} onPress={register}>
						<Text style={styles.textRegisterButton}>Kaydol</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		);
	}
};

export default WelcomeScreen;

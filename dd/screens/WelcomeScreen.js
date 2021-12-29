import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

import styles from "../assets/styles/WelcomeScreenStyles";
import { auth } from "../firebase";

const WelcomeScreen = ({ navigation }) => {
	let [fontsLoaded] = useFonts({
		Yellowtail: require("../assets/fonts/Yellowtail-Regular.ttf"),
		Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
		PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
	});

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				navigation.replace("HomeScreen2");
			}
		});
		return unsubscribe;
	}, []);

	if (!fontsLoaded) {
		return (
			<View style={{ backgroundColor: "red" }}>
				<StatusBar />
				<Text>sa</Text>
			</View>
		);
	} else {
		return (
			<View style={styles.view}>
				<StatusBar />
				<View style={styles.viewName}>
					<Text style={styles.textDiyet}>diyet</Text>
					<Text style={styles.textSlogan}>sağlıklı beslen</Text>
				</View>
				<View style={styles.viewKaydol}>
					<TouchableOpacity
						onPress={() => navigation.navigate("RegisterScreen")}
						style={styles.buttonKaydol}
					>
						<Text style={styles.textKaydol}>Kaydol</Text>
					</TouchableOpacity>
					<View style={styles.viewHaveAnAcc}>
						<Text style={styles.textHaveAnAcc}>Zaten bir hesabın var mı?</Text>
						<TouchableOpacity style={styles.buttonLogin}>
							<Text
								onPress={() => navigation.navigate("LoginScreen")}
								style={styles.textLogin}
							>
								{" "}
								Giriş Yap.
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.viewSocialSignUps}>
					<TouchableOpacity style={styles.buttonSocialFacebook}>
						<Image
							style={styles.tinyLogo}
							source={require("../assets/icons/facebook.png")}
						/>
						<Text style={styles.textSocialFacebook}>
							Facebook ile giriş yap
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonSocialGoogle}>
						<Image
							style={styles.tinyLogo}
							style={{ marginLeft: "-1%" }}
							source={require("../assets/icons/google.png")}
						/>
						<Text style={styles.textSocialGoogle}>Google ile giriş yap</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonSocialApple}>
						<Image
							style={styles.tinyLogo}
							style={{ marginLeft: "-2%" }}
							source={require("../assets/icons/apple.png")}
						/>
						<Text style={styles.textSocialApple}>Apple ID ile giriş yap</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.viewOurSocials}>
					<Text style={styles.textOurSocials}>Sosyal medyada biz</Text>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<TouchableOpacity style={{ alignSelf: "center", marginTop: "5%" }}>
							<Image
								style={styles.tinyLogo}
								source={require("../assets/icons/instagram.png")}
							/>
						</TouchableOpacity>
						<TouchableOpacity style={{ marginStart: "20%", marginTop: "5%" }}>
							<Image
								style={styles.tinyLogo}
								source={require("../assets/icons/twitter.png")}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
};

export default WelcomeScreen;

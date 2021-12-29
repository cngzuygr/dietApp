import React, {
	useEffect,
	useLayoutEffect,
	useState,
	useCallback,
} from "react";
import {
	View,
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
	Text,
	CheckBox,
} from "react-native";
import { auth, db } from "../firebase";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import DropDownPicker from "react-native-dropdown-picker";

const HomeScreen = ({ navigation, route }) => {
	let [fontsLoaded] = useFonts({
		Yellowtail: require("../assets/fonts/Yellowtail-Regular.ttf"),
		Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
		PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
	});

	// expo uyarı mesajı
	//LogBox.ignoreAllLogs(true);

	const [loading, setLoading] = useState(false);
	const [erkek, setErkek] = useState(false);
	const [kadin, setKadin] = useState(false);
	const [bgErkek, setBgErkek] = useState("#d4d4d4");
	const [bgKadin, setBgKadin] = useState("#d4d4d4");

	const [sedanter, setSedanter] = useState(false);
	const [az, setAz] = useState(false);
	const [orta, setOrta] = useState(false);
	const [cok, setCok] = useState(false);
	const [fazla, setFazla] = useState(false);
	const [bgSedanter, setBgSedanter] = useState("#d4d4d4");
	const [bgAz, setBgAz] = useState("#d4d4d4");
	const [bgOrta, setBgOrta] = useState("#d4d4d4");
	const [bgCok, setBgCok] = useState("#d4d4d4");
	const [bgFazla, setBgFazla] = useState("#d4d4d4");
	const [exerciseType, setExerciseType] = useState("");
	const [gender, setGender] = useState("");
	const [exerciseMultiplier, setExerciseMultiplier] = useState();

	const onPressSedanter = () => {
		if (sedanter == true) {
			setSedanter(false);
			setExerciseType("");
			setBgSedanter("#d4d4d4");
		} else {
			setSedanter(true);
			setExerciseType("sedanter");
			setBgSedanter("#7fbf7f");
		}
		setExerciseType("sedanter");
		setAz(false);
		setOrta(false);
		setCok(false);
		setFazla(false);
		setBgAz("#d4d4d4");
		setBgOrta("#d4d4d4");
		setBgCok("#d4d4d4");
		setBgFazla("#d4d4d4");
		setExerciseMultiplier(1.2);
	};

	const onPressAz = () => {
		if (az == true) {
			setAz(false);
			setExerciseType("");
			setBgAz("#d4d4d4");
		} else {
			setAz(true);
			setExerciseType("az");
			setBgAz("#7fbf7f");
		}
		setExerciseType("az");
		setSedanter(false);
		setOrta(false);
		setCok(false);
		setFazla(false);
		setBgSedanter("#d4d4d4");
		setBgOrta("#d4d4d4");
		setBgCok("#d4d4d4");
		setBgFazla("#d4d4d4");
		setExerciseMultiplier(1.375);
	};

	const onPressOrta = () => {
		if (orta == true) {
			setOrta(false);
			setExerciseType("");
			setBgOrta("#d4d4d4");
		} else {
			setOrta(true);
			setExerciseType("orta");
			setBgOrta("#7fbf7f");
		}
		setExerciseType("orta");
		setSedanter(false);
		setAz(false);
		setCok(false);
		setFazla(false);
		setBgSedanter("#d4d4d4");
		setBgAz("#d4d4d4");
		setBgCok("#d4d4d4");
		setBgFazla("#d4d4d4");
		setExerciseMultiplier(1.55);
	};

	const onPressCok = () => {
		if (cok == true) {
			setCok(false);
			setExerciseType("");
			setBgCok("#d4d4d4");
		} else {
			setCok(true);
			setExerciseType("cok");
			setBgCok("#7fbf7f");
		}
		setExerciseType("cok");
		setSedanter(false);
		setAz(false);
		setOrta(false);
		setFazla(false);
		setBgSedanter("#d4d4d4");
		setBgAz("#d4d4d4");
		setBgOrta("#d4d4d4");
		setBgFazla("#d4d4d4");
		setExerciseMultiplier(1.725);
	};

	const onPressFazla = () => {
		if (fazla == true) {
			setFazla(false);
			setExerciseType("");
			setBgFazla("#d4d4d4");
		} else {
			setFazla(true);
			setExerciseType("fazla");
			setBgFazla("#7fbf7f");
		}
		setExerciseType("fazla");
		setSedanter(false);
		setAz(false);
		setOrta(false);
		setCok(false);
		setBgSedanter("#d4d4d4");
		setBgAz("#d4d4d4");
		setBgOrta("#d4d4d4");
		setBgCok("#d4d4d4");
		setExerciseMultiplier(1.9);
	};

	const onPressErkek = () => {
		if (erkek == true) {
			setErkek(false);
			setBgErkek("#d4d4d4");
			setGender("");
		} else {
			setErkek(true);
			setGender("erkek");
			setBgErkek("#7fbf7f");
		}
		setKadin(false);
		setBgKadin("#d4d4d4");
	};

	const onPressKadin = () => {
		if (kadin == true) {
			setKadin(false);
			setBgKadin("#d4d4d4");
			setGender("");
		} else {
			setKadin(true);
			setGender("kadin");
			setBgKadin("#7fbf7f");
		}
		setErkek(false);
		setBgErkek("#d4d4d4");
	};

	const [openYas, setOpenYas] = useState(false);
	const [valueYas, setValueYas] = useState(null);
	const [yas, setYas] = useState([
		{ label: "1", value: "1" },
		{ label: "2", value: "2" },
		{ label: "3", value: "3" },
		{ label: "4", value: "4" },
		{ label: "5", value: "5" },
		{ label: "6", value: "6" },
		{ label: "7", value: "7" },
		{ label: "8", value: "8" },
		{ label: "9", value: "9" },
		{ label: "10", value: "10" },
		{ label: "11", value: "11" },
		{ label: "12", value: "12" },
		{ label: "13", value: "13" },
		{ label: "14", value: "14" },
		{ label: "15", value: "15" },
		{ label: "16", value: "16" },
		{ label: "17", value: "17" },
		{ label: "18", value: "18" },
		{ label: "19", value: "19" },
		{ label: "20", value: "20" },
		{ label: "21", value: "21" },
		{ label: "22", value: "22" },
		{ label: "23", value: "23" },
		{ label: "24", value: "24" },
		{ label: "25", value: "25" },
		{ label: "26", value: "26" },
		{ label: "27", value: "27" },
		{ label: "28", value: "28" },
		{ label: "29", value: "29" },
		{ label: "30", value: "30" },
		{ label: "31", value: "31" },
		{ label: "32", value: "32" },
		{ label: "33", value: "33" },
		{ label: "34", value: "34" },
		{ label: "35", value: "35" },
		{ label: "36", value: "36" },
		{ label: "37", value: "37" },
		{ label: "38", value: "38" },
		{ label: "39", value: "39" },
		{ label: "40", value: "40" },
		{ label: "41", value: "41" },
		{ label: "42", value: "42" },
		{ label: "43", value: "43" },
		{ label: "44", value: "44" },
		{ label: "45", value: "45" },
		{ label: "46", value: "46" },
		{ label: "47", value: "47" },
		{ label: "48", value: "48" },
		{ label: "49", value: "49" },
		{ label: "50", value: "50" },
		{ label: "51", value: "51" },
		{ label: "52", value: "52" },
		{ label: "53", value: "53" },
		{ label: "54", value: "54" },
		{ label: "55", value: "55" },
		{ label: "56", value: "56" },
		{ label: "57", value: "57" },
		{ label: "58", value: "58" },
		{ label: "59", value: "59" },
		{ label: "60", value: "60" },
		{ label: "61", value: "61" },
		{ label: "62", value: "62" },
		{ label: "63", value: "63" },
		{ label: "64", value: "64" },
		{ label: "65", value: "65" },
		{ label: "66", value: "66" },
		{ label: "67", value: "67" },
		{ label: "68", value: "68" },
		{ label: "69", value: "69" },
		{ label: "70", value: "70" },
		{ label: "71", value: "71" },
		{ label: "72", value: "72" },
		{ label: "73", value: "73" },
		{ label: "74", value: "74" },
		{ label: "75", value: "75" },
		{ label: "76", value: "76" },
		{ label: "77", value: "77" },
		{ label: "78", value: "78" },
		{ label: "79", value: "79" },
		{ label: "80", value: "80" },
		{ label: "81", value: "81" },
		{ label: "82", value: "82" },
		{ label: "83", value: "83" },
		{ label: "84", value: "84" },
		{ label: "85", value: "85" },
		{ label: "86", value: "86" },
		{ label: "87", value: "87" },
		{ label: "88", value: "88" },
		{ label: "89", value: "89" },
		{ label: "90", value: "90" },
		{ label: "91", value: "91" },
		{ label: "92", value: "92" },
		{ label: "93", value: "93" },
		{ label: "94", value: "94" },
		{ label: "95", value: "95" },
		{ label: "96", value: "96" },
		{ label: "97", value: "97" },
		{ label: "98", value: "98" },
		{ label: "99", value: "99" },
	]);

	const [openBoy, setOpenBoy] = useState(false);
	const [valueBoy, setValueBoy] = useState(null);
	const [boy, setBoy] = useState([
		{ label: "120 cm.", value: "120" },
		{ label: "121 cm.", value: "121" },
		{ label: "122 cm.", value: "122" },
		{ label: "123 cm.", value: "123" },
		{ label: "124 cm.", value: "124" },
		{ label: "125 cm.", value: "125" },
		{ label: "126 cm.", value: "126" },
		{ label: "127 cm.", value: "127" },
		{ label: "128 cm.", value: "128" },
		{ label: "129 cm.", value: "129" },

		{ label: "130 cm.", value: "130" },
		{ label: "131 cm.", value: "131" },
		{ label: "132 cm.", value: "132" },
		{ label: "133 cm.", value: "133" },
		{ label: "134 cm.", value: "134" },
		{ label: "135 cm.", value: "135" },
		{ label: "136 cm.", value: "136" },
		{ label: "137 cm.", value: "137" },
		{ label: "138 cm.", value: "138" },
		{ label: "139 cm.", value: "139" },

		{ label: "140 cm.", value: "140" },
		{ label: "141 cm.", value: "141" },
		{ label: "142 cm.", value: "142" },
		{ label: "143 cm.", value: "143" },
		{ label: "144 cm.", value: "144" },
		{ label: "145 cm.", value: "145" },
		{ label: "146 cm.", value: "146" },
		{ label: "147 cm.", value: "147" },
		{ label: "148 cm.", value: "148" },
		{ label: "149 cm.", value: "149" },

		{ label: "150 cm.", value: "150" },
		{ label: "151 cm.", value: "151" },
		{ label: "152 cm.", value: "152" },
		{ label: "153 cm.", value: "153" },
		{ label: "154 cm.", value: "154" },
		{ label: "155 cm.", value: "155" },
		{ label: "156 cm.", value: "156" },
		{ label: "157 cm.", value: "157" },
		{ label: "158 cm.", value: "158" },
		{ label: "159 cm.", value: "159" },

		{ label: "160 cm.", value: "160" },
		{ label: "161 cm.", value: "161" },
		{ label: "162 cm.", value: "162" },
		{ label: "163 cm.", value: "163" },
		{ label: "164 cm.", value: "164" },
		{ label: "165 cm.", value: "165" },
		{ label: "166 cm.", value: "166" },
		{ label: "167 cm.", value: "167" },
		{ label: "168 cm.", value: "168" },
		{ label: "169 cm.", value: "169" },

		{ label: "170 cm.", value: "170" },
		{ label: "171 cm.", value: "171" },
		{ label: "172 cm.", value: "172" },
		{ label: "173 cm.", value: "173" },
		{ label: "174 cm.", value: "174" },
		{ label: "175 cm.", value: "175" },
		{ label: "176 cm.", value: "176" },
		{ label: "177 cm.", value: "177" },
		{ label: "178 cm.", value: "178" },
		{ label: "179 cm.", value: "179" },

		{ label: "180 cm.", value: "180" },
		{ label: "181 cm.", value: "181" },
		{ label: "182 cm.", value: "182" },
		{ label: "183 cm.", value: "183" },
		{ label: "184 cm.", value: "184" },
		{ label: "185 cm.", value: "185" },
		{ label: "186 cm.", value: "186" },
		{ label: "187 cm.", value: "187" },
		{ label: "188 cm.", value: "188" },
		{ label: "189 cm.", value: "189" },

		{ label: "190 cm.", value: "190" },
		{ label: "191 cm.", value: "191" },
		{ label: "192 cm.", value: "192" },
		{ label: "193 cm.", value: "193" },
		{ label: "194 cm.", value: "194" },
		{ label: "195 cm.", value: "195" },
		{ label: "196 cm.", value: "196" },
		{ label: "197 cm.", value: "197" },
		{ label: "198 cm.", value: "198" },
		{ label: "199 cm.", value: "199" },

		{ label: "200 cm.", value: "200" },
		{ label: "201 cm.", value: "201" },
		{ label: "202 cm.", value: "202" },
		{ label: "203 cm.", value: "203" },
		{ label: "204 cm.", value: "204" },
		{ label: "205 cm.", value: "205" },
		{ label: "206 cm.", value: "206" },
		{ label: "207 cm.", value: "207" },
		{ label: "208 cm.", value: "208" },
		{ label: "209 cm.", value: "209" },
	]);

	const [openKilo, setOpenKilo] = useState(false);
	const [valueKilo, setValueKilo] = useState(null);
	const [kilo, setKilo] = useState([
		{ label: "35 kg.", value: "35" },
		{ label: "36 kg.", value: "36" },
		{ label: "37 kg.", value: "37" },
		{ label: "38 kg.", value: "38" },
		{ label: "39 kg.", value: "39" },
		{ label: "40 kg.", value: "40" },
		{ label: "41 kg.", value: "41" },
		{ label: "42 kg.", value: "42" },
		{ label: "43 kg.", value: "43" },
		{ label: "44 kg.", value: "44" },
		{ label: "45 kg.", value: "45" },
		{ label: "46 kg.", value: "46" },
		{ label: "47 kg.", value: "47" },
		{ label: "48 kg.", value: "48" },
		{ label: "49 kg.", value: "49" },
		{ label: "50 kg.", value: "50" },
		{ label: "51 kg.", value: "51" },
		{ label: "52 kg.", value: "52" },
		{ label: "53 kg.", value: "53" },
		{ label: "54 kg.", value: "54" },
		{ label: "55 kg.", value: "55" },
		{ label: "56 kg.", value: "56" },
		{ label: "57 kg.", value: "57" },
		{ label: "58 kg.", value: "58" },
		{ label: "59 kg.", value: "59" },
		{ label: "60 kg.", value: "60" },
		{ label: "61 kg.", value: "61" },
		{ label: "62 kg.", value: "62" },
		{ label: "63 kg.", value: "63" },
		{ label: "64 kg.", value: "64" },
		{ label: "65 kg.", value: "65" },
		{ label: "66 kg.", value: "66" },
		{ label: "67 kg.", value: "67" },
		{ label: "68 kg.", value: "68" },
		{ label: "69 kg.", value: "69" },
		{ label: "70 kg.", value: "70" },
		{ label: "71 kg.", value: "71" },
		{ label: "72 kg.", value: "72" },
		{ label: "73 kg.", value: "73" },
		{ label: "74 kg.", value: "74" },
		{ label: "75 kg.", value: "75" },
		{ label: "76 kg.", value: "76" },
		{ label: "77 kg.", value: "77" },
		{ label: "78 kg.", value: "78" },
		{ label: "79 kg.", value: "79" },
		{ label: "80 kg.", value: "80" },
		{ label: "81 kg.", value: "81" },
		{ label: "82 kg.", value: "82" },
		{ label: "83 kg.", value: "83" },
		{ label: "84 kg.", value: "84" },
		{ label: "85 kg.", value: "85" },
		{ label: "86 kg.", value: "86" },
		{ label: "87 kg.", value: "87" },
		{ label: "88 kg.", value: "88" },
		{ label: "89 kg.", value: "89" },
		{ label: "90 kg.", value: "90" },
		{ label: "91 kg.", value: "91" },
		{ label: "92 kg.", value: "92" },
		{ label: "93 kg.", value: "93" },
		{ label: "94 kg.", value: "94" },
		{ label: "95 kg.", value: "95" },
		{ label: "96 kg.", value: "96" },
		{ label: "97 kg.", value: "97" },
		{ label: "98 kg.", value: "98" },
		{ label: "99 kg.", value: "99" },
		{ label: "100 kg.", value: "100" },
		{ label: "101 kg.", value: "101" },
		{ label: "102 kg.", value: "102" },
		{ label: "103 kg.", value: "103" },
		{ label: "104 kg.", value: "104" },
		{ label: "105 kg.", value: "105" },
		{ label: "106 kg.", value: "106" },
		{ label: "107 kg.", value: "107" },
		{ label: "108 kg.", value: "108" },
		{ label: "109 kg.", value: "109" },
		{ label: "110 kg.", value: "110" },
		{ label: "111 kg.", value: "111" },
		{ label: "112 kg.", value: "112" },
		{ label: "113 kg.", value: "113" },
		{ label: "114 kg.", value: "114" },
		{ label: "115 kg.", value: "115" },
		{ label: "116 kg.", value: "116" },
		{ label: "117 kg.", value: "117" },
		{ label: "118 kg.", value: "118" },
		{ label: "119 kg.", value: "119" },
		{ label: "120 kg.", value: "120" },
		{ label: "121 kg.", value: "121" },
		{ label: "122 kg.", value: "122" },
		{ label: "123 kg.", value: "123" },
		{ label: "124 kg.", value: "124" },
		{ label: "125 kg.", value: "125" },
		{ label: "126 kg.", value: "126" },
		{ label: "127 kg.", value: "127" },
		{ label: "128 kg.", value: "128" },
		{ label: "129 kg.", value: "129" },
		{ label: "130 kg.", value: "130" },
		{ label: "131 kg.", value: "131" },
		{ label: "132 kg.", value: "132" },
		{ label: "133 kg.", value: "133" },
		{ label: "134 kg.", value: "134" },
		{ label: "135 kg.", value: "135" },
		{ label: "136 kg.", value: "136" },
		{ label: "137 kg.", value: "137" },
		{ label: "138 kg.", value: "138" },
		{ label: "139 kg.", value: "139" },
		{ label: "140 kg.", value: "140" },
		{ label: "141 kg.", value: "141" },
		{ label: "142 kg.", value: "142" },
		{ label: "143 kg.", value: "143" },
		{ label: "144 kg.", value: "144" },
		{ label: "145 kg.", value: "145" },
		{ label: "146 kg.", value: "146" },
		{ label: "147 kg.", value: "147" },
		{ label: "148 kg.", value: "148" },
		{ label: "149 kg.", value: "149" },
		{ label: "150 kg.", value: "150" },
		{ label: "151 kg.", value: "151" },
		{ label: "152 kg.", value: "152" },
		{ label: "153 kg.", value: "153" },
		{ label: "154 kg.", value: "154" },
		{ label: "155 kg.", value: "155" },
		{ label: "156 kg.", value: "156" },
		{ label: "157 kg.", value: "157" },
		{ label: "158 kg.", value: "158" },
		{ label: "159 kg.", value: "159" },
		{ label: "160 kg.", value: "160" },
		{ label: "161 kg.", value: "161" },
		{ label: "162 kg.", value: "162" },
		{ label: "163 kg.", value: "163" },
		{ label: "164 kg.", value: "164" },
		{ label: "165 kg.", value: "165" },
		{ label: "166 kg.", value: "166" },
		{ label: "167 kg.", value: "167" },
		{ label: "168 kg.", value: "168" },
		{ label: "169 kg.", value: "169" },
	]);

	const onOpenYas = useCallback(() => {
		setOpenBoy(false);
		setOpenKilo(false);
	}, []);

	const onOpenBoy = useCallback(() => {
		setOpenYas(false);
		setOpenKilo(false);
	}, []);

	const onOpenKilo = useCallback(() => {
		setOpenYas(false);
		setOpenBoy(false);
	}, []);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: () => (
				<View
					style={{
						flex: 1,
						justifyContent: "center",
					}}
				>
					<TouchableOpacity>
						<Text style={{ fontFamily: "Yellowtail", fontSize: 24 }}>
							DiyetApp
						</Text>
					</TouchableOpacity>
				</View>
			),
			headerLeft: () => null,
		});
	});

	const [bmr, setBmr] = useState();
	const [bmi, setBmi] = useState();

	const calculationUser = async () => {
		gender == "erkek"
			? setBmr(
					(66.5 + 13.75 * valueKilo + 5.0 * valueBoy - 6.77 * valueYas) *
						exerciseMultiplier
			  )
			: setBmr(
					(655.1 + 9.56 * valueKilo + 1.85 * valueBoy - 4.67 * valueYas) *
						exerciseMultiplier
			  );
		setBmi(valueKilo / ((valueBoy / 100) * (valueBoy / 100)));
	};

	useEffect(() => {
		calculationUser();
	});

	const updateUser = async () => {
		{
			bmr != null
				? await db
						.collection("users")
						.doc(auth?.currentUser?.uid)
						.update({
							gender: gender,
							age: valueYas,
							height: valueBoy,
							weight: valueKilo,
							exerciseType: exerciseType,
							calorieNeed: bmr,
							bmi: bmi,
						})
						.catch((error) => alert(error))
						.then(() => {
							navigation.navigate("HomeScreen2");
						})
				: null;
		}
	};

	return (
		<SafeAreaView>
			<ScrollView nestedScrollEnabled={true}>
				<StatusBar />
				<Text
					style={{
						alignSelf: "center",
						fontFamily: "Poppins",
						fontSize: 16,
						marginTop: 5,
					}}
				>
					Cinsiyet
				</Text>
				<View
					style={{
						alignItems: "center",
						flexDirection: "row",
						justifyContent: "center",
						//padding: 5,
					}}
				>
					<TouchableOpacity
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
							padding: 10,
							backgroundColor: `${bgErkek}`,
							borderRadius: 10,
							margin: 10,
						}}
						onPress={onPressErkek}
					>
						<CheckBox value={erkek} onValueChange={onPressErkek} />
						<Text style={{ fontFamily: "Poppins", fontSize: 16 }}>Erkek</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
							padding: 10,
							backgroundColor: `${bgKadin}`,
							borderRadius: 10,
							margin: 10,
						}}
						onPress={onPressKadin}
					>
						<CheckBox value={kadin} onValueChange={onPressKadin} />
						<Text style={{ fontFamily: "Poppins", fontSize: 16 }}>Kadın</Text>
					</TouchableOpacity>
				</View>
				<View
					style={{
						flexDirection: "column",
					}}
				>
					<DropDownPicker
						listMode="SCROLLVIEW"
						scrollViewProps={{
							nestedScrollEnabled: true,
						}}
						zIndex={3}
						zIndexInverse={3}
						open={openYas}
						onOpen={onOpenYas}
						value={valueYas}
						items={yas}
						loading={loading}
						placeholder={"Yaş"}
						setOpen={setOpenYas}
						setValue={setValueYas}
						setItems={setYas}
						style={{
							width: "40%",
							margin: 10,
							alignSelf: "center",
							position: "relative",
						}}
						dropDownContainerStyle={{
							width: "40%",
							margin: 10,
							alignSelf: "center",
						}}
					/>
					<DropDownPicker
						listMode="SCROLLVIEW"
						scrollViewProps={{
							nestedScrollEnabled: true,
						}}
						zIndex={2}
						zIndexInverse={2}
						open={openBoy}
						onOpen={onOpenBoy}
						value={valueBoy}
						items={boy}
						placeholder={"Boy"}
						setOpen={setOpenBoy}
						setValue={setValueBoy}
						setItems={setBoy}
						style={{
							width: "40%",
							margin: 10,
							alignSelf: "center",
							position: "relative",
						}}
						dropDownContainerStyle={{
							width: "40%",
							margin: 10,
							alignSelf: "center",
						}}
					/>
					<DropDownPicker
						listMode="SCROLLVIEW"
						scrollViewProps={{
							nestedScrollEnabled: true,
						}}
						zIndex={1}
						zIndexInverse={1}
						open={openKilo}
						onOpen={onOpenKilo}
						value={valueKilo}
						items={kilo}
						placeholder={"Kilo"}
						setOpen={setOpenKilo}
						setValue={setValueKilo}
						setItems={setKilo}
						style={{
							width: "40%",
							margin: 10,
							alignSelf: "center",
							position: "relative",
						}}
						dropDownContainerStyle={{
							width: "40%",
							margin: 10,
							alignSelf: "center",
						}}
					/>
					<Text
						style={{
							alignSelf: "center",
							fontStyle: "italic",
							fontFamily: "Poppins",
							fontSize: 18,
							marginTop: 5,
						}}
					>
						Ne sıklıkla egzersiz yapıyorsun?
					</Text>
					<View>
						<TouchableOpacity
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "center",
								padding: 10,
								backgroundColor: `${bgSedanter}`,
								borderRadius: 10,
								margin: 10,
							}}
							onPress={onPressSedanter}
						>
							<Text style={{ fontFamily: "Poppins", fontSize: 15 }}>
								Sedanter (Hareket etmiyorum veya çok az hareket ediyorum.)
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "center",
								padding: 10,
								backgroundColor: `${bgAz}`,
								borderRadius: 10,
								margin: 10,
							}}
							onPress={onPressAz}
						>
							<Text style={{ fontFamily: "Poppins", fontSize: 15 }}>
								Az hareketli (Hafif hareketli bir yaşam / Haftada 1-3 gün
								egzersiz yapıyorum.)
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "center",
								padding: 10,
								backgroundColor: `${bgOrta}`,
								borderRadius: 10,
								margin: 10,
							}}
							onPress={onPressOrta}
						>
							<Text style={{ fontFamily: "Poppins", fontSize: 15 }}>
								Orta derece hareketli (Hareketli bir yaşam / Haftada 3-5 gün
								egzersiz yapıyorum.)
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "center",
								padding: 10,
								backgroundColor: `${bgCok}`,
								borderRadius: 10,
								margin: 10,
							}}
							onPress={onPressCok}
						>
							<Text style={{ fontFamily: "Poppins", fontSize: 15 }}>
								Hareketli (Çok hareketli bir yaşam / Haftada 6-7 gün egzersiz
								yapıyorum.)
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "center",
								padding: 10,
								backgroundColor: `${bgFazla}`,
								borderRadius: 10,
								margin: 10,
							}}
							onPress={onPressFazla}
						>
							<Text style={{ fontFamily: "Poppins", fontSize: 15 }}>
								Çok Hareketli (Yoğun bir şekilde egzersiz / Fiziksel iş ortamı.)
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								alignSelf: "center",
								margin: 10,
								backgroundColor: "#7fbf7f",
								width: "50%",
								borderRadius: 10,
								alignItems: "center",
							}}
							onPress={updateUser}
						>
							<Text
								style={{
									fontFamily: "Poppins",
									fontSize: 24,
									color: "purple",
								}}
							>
								Kaydet
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
			<StatusBar />
		</SafeAreaView>
	);
};

export default HomeScreen;

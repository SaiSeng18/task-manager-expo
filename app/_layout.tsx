import React from "react";
import { Slot } from "expo-router";
import { SafeAreaView, StyleSheet } from "react-native";
import { COLORS } from "@/constants/theme";
import { Navbar } from "@/components/Navbar";
import { useFonts } from "expo-font";

const RootLayout = () => {
	const [fontsLoaded] = useFonts({
		IcoMoon: require("@/assets/icomoon/fonts/icomoon.ttf"),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<SafeAreaView style={styles.container}>
			<Slot />
			<Navbar />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.dark,
	},
});

export default RootLayout;

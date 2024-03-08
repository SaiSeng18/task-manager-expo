import React from "react";
import { Slot } from "expo-router";
import { SafeAreaView, StyleSheet } from "react-native";
import { COLORS } from "@/constants/theme";
import { Navbar } from "@/components/Navbar";

const RootLayout = () => {
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

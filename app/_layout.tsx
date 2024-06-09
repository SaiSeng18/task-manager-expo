import React from "react";
import { Slot, Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/theme";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
	const [fontsLoaded] = useFonts({
		IcoMoon: require("@/assets/icomoon/fonts/icomoon.ttf"),
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />

				{/* <Stack.Screen name="+not-found" /> */}
			</Stack>
		</SafeAreaView>
	);
};

export default RootLayout;

import { COLORS } from "@/constants/theme";
import { router, usePathname } from "expo-router";

import { Pressable, StyleSheet, Text, View } from "react-native";

export const Navbar = () => {
	const pathname = usePathname();
	router;
	console.log(pathname);

	const links = [
		{ href: "/", text: "Home" },
		{ href: "/tasks", text: "Tasks" },
		{ href: "/", text: "Setting" },
		{ href: "/", text: "Profile" },
	];

	return (
		<View style={styles.container}>
			{links.map((link, i) => (
				<Pressable
					onPress={() => router.push({ pathname: link.href })}
					key={link.text}
					style={[
						styles.nav,
						{
							backgroundColor: pathname === link.href ? COLORS.light : COLORS.dark,
						},
					]}>
					<Text
						style={{
							color: pathname === link.href ? COLORS.dark : COLORS.light,
							fontSize: 16,
						}}>
						{link.text}
					</Text>
				</Pressable>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-around",
		gap: 20,
		paddingHorizontal: 8,
		paddingVertical: 20,
		backgroundColor: COLORS.dark,
	},
	nav: {
		height: 45,
		flex: 1,
		textAlign: "center",
		borderRadius: 100,
		justifyContent: "center",
		alignItems: "center",
	},
});

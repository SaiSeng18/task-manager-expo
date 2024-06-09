import { CARD_CONTAINER, COLORS } from "@/constants/theme";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

export const Task = () => {
	return (
		<View style={[CARD_CONTAINER, { backgroundColor: COLORS.lime }]}>
			<View style={styles.head}>
				<Text>Calendar</Text>
				<View style={{ flexDirection: "row", gap: 8 }}>
					<Pressable
						style={[styles.iconButton, { backgroundColor: "rgba(255,255,255,.3)" }]}>
						<Entypo name="share" size={15} color={COLORS.dark} />
					</Pressable>
					<Pressable style={[styles.iconButton, { backgroundColor: COLORS.dark }]}>
						<Entypo name="plus" size={15} color={COLORS.light} />
					</Pressable>
				</View>
			</View>

			<View style={{ flexDirection: "column" }}>
				<Text style={styles.contentTitle}>Current Task</Text>
				<Text style={styles.contentDescription}>
					You have 3 {"\n"} tasks for today.
				</Text>
			</View>

			<View
				style={{
					height: 1,
					width: "100%",
					backgroundColor: COLORS.gray,
					marginVertical: 16,
				}}
			/>

			<View style={styles.tagContainer}>
				<Text>#shipping</Text>
				<Text>#renovation</Text>
				<Text>#planning</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	head: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 20,
	},
	iconButton: {
		height: 45,
		width: 45,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 45 / 2,
	},
	contentTitle: {
		fontSize: 20,
	},
	contentDescription: { fontSize: 32 },
	tagContainer: {
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 20,
	},
});

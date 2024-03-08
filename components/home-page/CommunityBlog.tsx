import { CARD_CONTAINER, COLORS, SPACING } from "@/constants/theme";
import { Pressable, StyleSheet, Text, View } from "react-native";
import FeIcon from "react-native-vector-icons/Feather";
import FaIcon from "react-native-vector-icons/FontAwesome";

export const CommunityBlog = () => {
	return (
		<View style={[styles.container, { backgroundColor: COLORS.light }]}>
			<View style={styles.head}>
				<View
					style={{
						height: 20,
						flexDirection: "row",
						gap: 8,
						justifyContent: "flex-end",
						alignItems: "center",
					}}>
					<FaIcon name="globe" size={20} color={COLORS.dark} />
					<Text style={{ fontWeight: "500" }}>
						<Text style={{ color: COLORS.gray }}>by </Text>Habit Journey
					</Text>
				</View>

				<View style={{ flexDirection: "row", gap: 8 }}>
					<Pressable
						style={[
							styles.iconButton,
							{
								backgroundColor: COLORS.light,
								borderWidth: 1,
								borderColor: COLORS.gray,
							},
						]}>
						<FeIcon name="eye" size={15} color={COLORS.dark} />
					</Pressable>
					<Pressable style={[styles.iconButton, { backgroundColor: COLORS.dark }]}>
						<FeIcon name="arrow-up-right" size={15} color={COLORS.light} />
					</Pressable>
				</View>
			</View>

			<View style={{ marginVertical: 20 }}>
				<Text style={{ fontSize: 20 }}>Community Blog</Text>
				<Text style={{ fontSize: 32 }}>Productive Routine</Text>
				<View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
					<Text style={{ color: COLORS.gray, textDecorationLine: "underline" }}>
						Read Now
					</Text>

					<View
						style={{
							height: 30,
							width: 30,
							borderRadius: 15,
							backgroundColor: COLORS.gray,
							justifyContent: "center",
							alignItems: "center",
						}}>
						<FeIcon name="arrow-right" size={20} color={COLORS.light} />
					</View>
				</View>
			</View>

			<View
				style={{
					width: "100%",
					height: 200,
					backgroundColor: COLORS.gray,
					borderRadius: 30,
				}}></View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: CARD_CONTAINER,
	head: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	iconButton: {
		height: 45,
		width: 45,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 45 / 2,
	},
});

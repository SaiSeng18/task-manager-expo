import { Link } from "expo-router";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { COLORS, SPACING } from "@/constants/theme";
import { Header } from "@/components/home-page/Header";
import { CurrentTask } from "@/components/home-page/CurrentTask";
import { PreviewTask } from "@/components/home-page/PreviewTask";
import { CommunityBlog } from "@/components/home-page/CommunityBlog";
import { Statistic } from "@/components/home-page/Statistic";

export default function Page() {
	return (
		<ScrollView
			style={{
				flex: 1,
				marginTop: StatusBar.currentHeight,
				backgroundColor: COLORS.dark,
			}}>
			<View style={styles.container}>
				<Header />

				<CurrentTask />

				<PreviewTask />

				<CommunityBlog />

				<Statistic />

				<Link href="/tasks">Tasks</Link>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: "100%",
		alignItems: "center",
		padding: SPACING.small,
		gap: SPACING.small,
	},
});

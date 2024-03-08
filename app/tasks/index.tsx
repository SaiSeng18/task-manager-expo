import { Link } from "expo-router";
import { StyleSheet, Text, Touchable, View } from "react-native";

const Tasks = () => {
	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<Text style={styles.title}>Tasks</Text>
				<Text style={styles.subtitle}>This is the task page of your app.</Text>
				<Link href="/tasks">Go to Task</Link>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		padding: 24,
	},
	main: {
		flex: 1,
		justifyContent: "center",
		maxWidth: 960,
		marginHorizontal: "auto",
	},
	title: {
		fontSize: 64,
		fontWeight: "bold",
	},
	subtitle: {
		fontSize: 36,
		color: "#38434D",
	},
});

export default Tasks;

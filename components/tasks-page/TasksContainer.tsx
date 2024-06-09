import { COLORS } from "@/constants/theme";
import React, { useEffect, useRef, useState } from "react";
import {
	FlatList,
	StyleSheet,
	Text,
	View,
	useWindowDimensions,
} from "react-native";
import { AllTab } from "./AllTab";
import { CompletedTab } from "./CompletedTab";
import { InProgressTab } from "./InProgressTab";
import { UncompletedTab } from "./UncompletedTab";
import { TaskType, fetchTasks } from "@/types/task";

type TabProps = "all" | "completed" | "in progress" | "uncompleted";

type Tab = {
	title: string;
	value: TabProps;
};

export const TasksContainer = () => {
	const tabs: Tab[] = [
		{ title: "All", value: "all" },
		{ title: "Completed", value: "completed" },
		{ title: "In Progress", value: "in progress" },
		{ title: "Uncompleted", value: "uncompleted" },
	];
	const [activeTab, setActiveTab] = useState(tabs[0].value);
	const [tasks, setTasks] = useState<TaskType[]>([]); // State for filtered tasks

	const fetchTasksData = async () => {
		const taskData = await fetchTasks();
		setTasks(taskData);
	};

	useEffect(() => {
		fetchTasksData();
	}, []);
	const { width } = useWindowDimensions();

	const filterTasks = (tabValue: string) => {
		const filteredTasks = tasks.filter((task) => task.status === tabValue);
		setTasks(filteredTasks);
	};

	// const renderTab = ({ item }: { item: { title: string; value: string } }) => (
	// 	<View style={{ gap: 16, width, paddingHorizontal: 8 }}>
	// 		<FlatList
	// 			data={tabs}
	// 			ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
	// 			renderItem={(tab) => <Task />}
	// 		/>
	// 	</View>
	// );

	const renderTab = ({ item }: { item: Tab }) => {
		// Render the corresponding component based on the selected tab
		switch (item.value) {
			case "all":
				return <AllTab />;
			case "completed":
				return <CompletedTab />;
			case "in progress":
				return <InProgressTab />;
			case "uncompleted":
				return <UncompletedTab />;
			default:
				return null;
		}
	};

	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 36, color: COLORS.light, marginBottom: 10 }}>
				Tasks
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	tab: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		height: 40,
		borderRadius: 20,
		backgroundColor: COLORS.light,
	},
	tabText: {
		fontSize: 8,
	},
	pagerView: {
		flex: 1,
		padding: 16,
	},
	page: {
		flex: 1,
	},
});

export interface TaskType {
	title: string;
	description: string;
	id: string;
	status: "all" | "completed" | "in progress" | "uncompleted";
	date: Date;
	tags: string[];
}

const tasks: TaskType[] = [
	{
		title: "Task 1",
		description: "This is the first task. It needs to be completed urgently.",
		id: "123e4567-e89b-12d3-a456-426614174000", // Example UUID
		status: "in progress",
		date: new Date(2024, 2, 14), // Example date
		tags: ["urgent", "important"],
	},
	{
		title: "Task 2",
		description: "A low-priority task that can be tackled later.",
		id: "890ab1cd-efgh-4ijk-lmnop-qrst12345678", // Example UUID
		status: "uncompleted",
		date: new Date(2024, 1, 25), // Example date
		tags: ["low priority"],
	},
	{
		title: "Task 3",
		description: "A meeting with the team to discuss the project.",
		id: "fedcba09-8765-4321-0abc-defghijklmnop", // Example UUID
		status: "all",
		date: new Date(2024, 2, 7), // Example date
		tags: ["meeting"],
	},
	{
		title: "Task 4",
		description: "Research and analyze competitor products.",
		id: "01234567-89ab-cdef-ghij-klmnopqrstuv", // Example UUID
		status: "completed",
		date: new Date(2024, 2, 3), // Example date
		tags: ["research"],
	},
	{
		title: "Task 5",
		description: "Write a report on the project's findings.",
		id: "abcdefghijklmnop-0123-4567-89ab-cdef", // Example UUID
		status: "in progress",
		date: new Date(2024, 2, 10), // Example date
		tags: ["report"],
	},
	{
		title: "Task 6",
		description: "Prepare a presentation for the upcoming client meeting.",
		id: "zyxwvutsrq-ponml-kijhg-fedcba-0987654321", // Example UUID
		status: "uncompleted",
		date: new Date(2024, 2, 17), // Example date
		tags: ["presentation"],
	},
	{
		title: "Task 7",
		description: "Follow up with the client regarding the project timeline.",
		id: "11112222-3333-4444-5555-666677778888", // Example UUID
		status: "all",
		date: new Date(2024, 2, 2), // Example date
		tags: ["client"],
	},
	{
		title: "Task 8",
		description: "Review and finalize the marketing materials.",
		id: "9999aaaa-bbbb-cccc-dddd-eeeeeeffff", // Example UUID
		status: "completed",
		date: new Date(2024, 1, 31), // Example date
		tags: ["marketing"],
	},
	{
		title: "Task 9",
		description: "Develop a social media strategy for the product launch.",
		id: "22223333-4444-5555-6666-777788889999", // Example UUID
		status: "in progress",
		date: new Date(2024, 2, 12), // Example date
		tags: ["social media"],
	},
	{
		title: "Task 10",
		description: "Track and analyze the campaign performance after launch.",
		id: "aaaaaaaa-bbbbbbbb-cccccccc-dddddddd", // Example UUID
		status: "uncompleted",
		date: new Date(2024, 2, 20), // Example date
		tags: ["analysis"],
	},
];

export const fetchTasks = (): Promise<TaskType[]> => {
	return new Promise((resolve) => {
		// Simulate an asynchronous operation (e.g., API request)
		setTimeout(() => {
			resolve(tasks);
		}, 1000); // Simulating a delay of 1 second
	});
};

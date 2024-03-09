import { CARD_CONTAINER, COLORS } from "@/constants/theme";
import { View } from "react-native";

export const SharedStatus = () => {
	return (
		<View style={[CARD_CONTAINER, { backgroundColor: COLORS.lightYellow }]}>
			SharedStatus
		</View>
	);
};

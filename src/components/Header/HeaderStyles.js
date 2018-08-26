import { StyleSheet, Platform } from "react-native";
var Dimensions = require("Dimensions");
const { height, width } = Dimensions.get("window");
const aspectRatio = height / width;
var windowSize = Dimensions.get("window");

export default (styles = StyleSheet.create({
	container: {
		flex: 1
	},
	commonHeaderView: {
		height: Platform.OS === "ios" ? 64 : 44,
		backgroundColor: "#0ea3d6" //#0ea3d6
	},
	backArrowIcon: {
		height: 25,
		width: 25
	},
	headerIconsView: {
		flex: 0.13,
		justifyContent: "center",
		alignItems: "center"
	},
	headerRowView: {
		flex: 1,
		flexDirection: "row",
		paddingTop: Platform.OS === "ios" ? 15 : 0
	},
	headerTitleView: {
		flex: 0.77,
		justifyContent: "center"
	},
	headerTitle: {
		fontSize: 24,
		textAlign: "center",
		color: "white",
		fontWeight: "bold"
	}
}));

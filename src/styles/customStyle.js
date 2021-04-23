import { makeStyles } from "@material-ui/core";

export const containerStyle = makeStyles({
	headerRoot: {
		backgroundColor: "rgb(1 127 252)",
	},
	header: {
		display: "flex",
		justifyContent: "space-between",
		padding: "20px 0px",
	},
	homeBanner: {
		marginTop: "16px",
    padding: "14px 2px",
    backgroundColor: "#fffffe",
		borderRadius: "4px",
	},
	middleBanner: {
		marginTop: "16px",
		marginBottom: "16px",
		padding: "5px 0px",
	},
}, { name: "MuiContainer" });

export const iconStyle = makeStyles({
	menu: {
		position: "relative",
    top: "3px",
    color: "#fff",
    fontSize: "2rem",
    marginRight: "5px",

		cursor: "pointer",
	},
	arrowDropDown: {
		fontSize: "1rem",
		position: "relative",
		top: "5px",

		cursor: "pointer",
	},
}, { name: "MuiSvgIcon" })
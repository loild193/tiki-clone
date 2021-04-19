import { makeStyles } from "@material-ui/core";

export const containerStyle = makeStyles({
	root: {
		backgroundColor: "rgb(1 127 252)",
	},
	header: {
		display: "flex",
		justifyContent: "space-between",
		padding: "20px 0px",
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
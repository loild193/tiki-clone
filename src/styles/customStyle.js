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
	productHintHeader: {
		paddingTop: "5px",
	},
	gridContainer: {
		paddingTop: "10px",
	},
	emailContainer: {
		display: "flex",
    alignItems: "flex-end",
	},
	footer: {
		backgroundColor: "#fffffe",
		paddingTop: "25px",
		paddingBottom: "15px",
	},
}, { name: "MuiContainer" });

export const gridStyle = makeStyles({
	mdStyle: {
		maxWidth: "20%",
	},
}, { name: "MuiGrid" });

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
}, { name: "MuiSvgIcon" });

export const buttonStyle = makeStyles({
	seeMoreButton: {
		backgroundColor: "#fffffe",
		color: "#0d5cb6",
		textTransform: "capitalize",
		fontSize: "14px",
		fontWeight: "500",
		width: "240px",
		border: "1px solid #0d5cb6",
		transition: "all 0.25s ease-in-out",
		
		'&:hover': {
			backgroundColor: "#0d5cb6",
			color: "#fffffe", 
		}
	},
	registerButton: {
		textTransform: "initial",
    backgroundColor: "#01afef",
    color: "#fffffe",
    fontSize: "13px",
    fontWeight: "400",
    marginLeft: "10px",
		transition: "all 0.25s ease-in-out",

		'&:hover': {
			backgroundColor: "#01afef",
			opacity: 0.8,
		}
	},
}, { name: "MuiButton" });
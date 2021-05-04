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
	productDetailContainer: {
		paddingTop: "30px",
		display: "flex",
		justifyContent: "space-around",
		backgroundColor: "#fffffe",
	},
	productInCartContainer: {
		paddingTop: "15px",
	},
	noProduct: {
		margin: "20px 0px",
		padding: "30px 400px",
		backgroundColor: "#fffffe",
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
	arrowForwardIos: {
		fontSize: "0.75rem",
		color: "#9b9b9b",
		marginLeft: "5px",
	},
	infoIcon: {
		fontSize: "1rem",
		marginLeft: "5px",
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
	selectToBuyButton: {
		marginTop: "15px",
		width: "60%",
		backgroundColor: "#ff3945",
		color: "#fffffe",
		textTransform: "capitalize",
		fontSize: "15px",

		'&:hover': {
			backgroundColor: "#ff3945",
			opacity: 0.8,
		}
	},
	buyButton: {
		marginTop: "25px",
		padding: "10px 0",
		width: "100%",
		backgroundColor: "#ff424e",
		color: "#fffbfc",
		fontSize: "14px",
		textTransform: "inherit",
		transition: "all 0.25s ease-in-out",

		'&:hover': {
			backgroundColor: "#ff424e",
			opacity: "0.8",
		},
	},
	continueToBuy: {
		backgroundColor: "#fdce03",
		color: "#615d4e",
		width: "70%",
		textTransform: "inherit",
		fontSize: "15px",
		fontWeight: "600",
		transition: "all 0.25s ease-in-out",

		"&:hover": {
			backgroundColor: "#efbf0c",
		},
	},
	seeCart: {
		display: "flex",
		textTransform: "inherit",
		marginTop: "10px",
		fontSize: "14px",
		backgroundColor: "#ff3945",
		color: "#fffffe",
		transition: "all 0.25s ease-in-out",

		'&:hover': {
			backgroundColor: "#ff3945",
			opacity: "0.8",
		},
	},
}, { name: "MuiButton" });
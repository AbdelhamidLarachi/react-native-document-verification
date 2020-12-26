//
//  PhotoVerification
//  Verification-ui-kit
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2020 NitroCoding. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView} from "react-native"
import {h, w} from '../Dimensions'


export default class PhotoVerification extends React.Component {

	static navigationOptions = ({ navigation }) => {
	
		const { params = {} } = navigation.state
		return {
				header: null,
				headerLeft: null,
				headerRight: null,
			}
	}

	constructor(props) {
		super(props)
	}

	componentDidMount() {
	
	}

	onButtonPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("Questionary")
	}

	onTextPressed = () => {
	
	}

	render() {
	
		return <SafeAreaView style={{flex: 1}}>
		<View
				style={styles.checkThePhotoView}>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						alignSelf: "center",
						top: 0,
						bottom: 0,
						justifyContent: "center",
					}}>
					<View
						style={styles.iosControlsView}/>
				</View>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						alignSelf: "center",
						width: 90.6*w,
						top: 4.9*h,
						bottom: 8.9*h,
						alignItems: "center",
					}}>
					<View
						style={styles.navigationView}>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								alignSelf: "center",
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<View
								style={styles.progressbarView}/>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								position: "absolute",
								left: 0,
								top: 0,
								bottom: 0,
								justifyContent: "center",
							}}>
							<View
								pointerEvents="box-none"
								style={{
									width: 40.1*w,
									height: 1.5*h,
									marginLeft: 13*w,
									flexDirection: "row",
									alignItems: "center",
								}}>
								<Image
									source={require("./../../assets/images/schevron.png")}
									style={styles.schevronImage}/>
								<View
									style={styles.progressView}/>
							</View>
						</View>
					</View>
					<View
						style={styles.introTextView}>
						<Text
							style={styles.headlineText}>Check the picture</Text>
						<Text
							style={styles.textTwoLinesText}>Confirm if the document is clear and all edges are fully visable</Text>
					</View>
					<View
						style={styles.pictureconfirmationView}>
						<View
							style={styles.photoView}>
							<View
								style={styles.rectangleView}/>
						</View>
						<TouchableOpacity
							onPress={this.onTextPressed}
							style={styles.retakebuttonButton}>
							<Text
								style={styles.retakebuttonButtonText}>Retake picture</Text>
						</TouchableOpacity>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<TouchableOpacity
						onPress={this.onButtonPressed}
						style={styles.buttonButton}>
						<Text
							style={styles.buttonButtonText}>Upload document</Text>
					</TouchableOpacity>
				</View>
			</View>
			</SafeAreaView>
	}
}

const styles = StyleSheet.create({
	checkThePhotoView: {
		backgroundColor: "white",
		flex: 1,
	},
	iosControlsView: {
		backgroundColor: "transparent",
		width: 90.6*w,
		height: 90.6*h,
	},
	navigationView: {
		backgroundColor: "transparent",
		width: 90.6*w,
		height: 4.9*h,
	},
	progressbarView: {
		backgroundColor: "rgb(235, 240, 255)",
		width: 48.3*w,
		height: 0.1*h,
	},
	schevronImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 1.9*w,
		height: 1.5*h,
	},
	progressView: {
		backgroundColor: "rgb(41, 97, 255)",
		width: 35*w,
		height: 0.2*h,
		marginLeft: 6.3*w,
	},
	introTextView: {
		backgroundColor: "transparent",
		width: 90.6*w,
		height: 19.1*h,
		alignItems: "flex-start",
	},
	headlineText: {
		color: "rgb(43, 44, 99)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 2.7*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 2.9*h,
		letterSpacing: 0.67,
		paddingTop: 0.3*h,
		backgroundColor: "transparent",
		marginLeft: 7.7*w,
		marginTop: 5*h,
	},
	textTwoLinesText: {
		backgroundColor: "transparent",
		color: "rgb(120, 121, 147)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 1.8*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 2.7*h,
		letterSpacing: 0.76,
		marginLeft: 7.7*w,
		marginTop: 3.1*h,
	},
	pictureconfirmationView: {
		backgroundColor: "transparent",
		width: 74.4*w,
		height: 27.3*h,
		marginTop: 6.1*h,
		alignItems: "center",
	},
	photoView: {
		backgroundColor: "white",
		borderRadius: 4,
		width: 74.4*w,
		height: 23.5*h,
		justifyContent: "center",
	},
	rectangleView: {
		backgroundColor: "white",
		borderRadius: 10,
		shadowColor: "rgba(221, 221, 221, 0.5)",
		shadowRadius: 30,
		shadowOpacity: 1,
		height: 19.1*h,
		marginLeft: 1.7*w,
		marginRight: 1.9*w,
	},
	retakebuttonButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 27.1*w,
		height: 2*h,
		marginTop: 1.8*h,
	},
	retakebuttonButtonText: {
		color: "rgb(43, 44, 99)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 1.8*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	retakebuttonButtonImage: {
		resizeMode: "contain",
		marginRight: 2.4*w,
	},
	buttonButton: {
		backgroundColor: "rgb(43, 44, 99)",
		borderRadius: 4,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 74.4*w,
		height: 5.6*h,
	},
	buttonButtonText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 1.8*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	buttonButtonImage: {
		resizeMode: "contain",
		marginRight: 2.4*w,
	},
})

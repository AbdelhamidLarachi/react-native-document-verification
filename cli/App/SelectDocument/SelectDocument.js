//
//  SelectDocument
//  Verification-ui-kit
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2020 NitroCoding. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, View, SafeAreaView} from "react-native"
import {h, w} from '../Dimensions'
import { TouchableOpacity } from "react-native-gesture-handler"


export default class SelectDocument extends React.Component {

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
		
		navigate("DocumentsUpload")
	}

	render() {
	
		return    <SafeAreaView style={{flex: 1}}>
			<View
				style={styles.selectDocumentView}>
				<View
					pointerEvents="box-none"
					style={{
						position: "absolute",
						left: 0,
						right: 0,
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
						left: 0,
						right: 0,
						top: 4.9*h,
						bottom: 8.5*h,
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
								style={styles.progressBar}/>
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
									style={styles.progress}/>
							</View>
						</View>
					</View>
					<View
						style={styles.introTextView}>
						<Text
							style={styles.headlineTwoLinesText}>Take a photo of an ID document</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.textTwoLinesText}>Choose a document</Text>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<View
						style={styles.documenttypeviewView}>
						<TouchableOpacity onPress={this.onButtonPressed}>
						<View
							style={styles.passportView}>
							<Image
								source={require("./../../assets/images/icons-passport-2.png")}
								style={styles.iconsPassportThreeImage}/>
							<Text
								style={styles.documentNameThreeText}>Passport</Text>
							<View
								style={{
									flex: 1,
								}}/>
							<Image
								source={require("./../../assets/images/schevron.png")}
								style={styles.schevronFourImage}/>
						</View>
						</TouchableOpacity>
						<View
							style={{
								flex: 1,
							}}/>
						<View
							style={styles.idCardView}>
							<View
								style={styles.separatorLineTwoView}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									right: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
						<TouchableOpacity onPress={this.onButtonPressed}>
								<View
									pointerEvents="box-none"
									style={{
										height: 3.1*h,
										marginLeft: 8*w,
										marginRight: 8.5*w,
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Image
										source={require("./../../assets/images/icons-passport.png")}
										style={styles.iconsPassportTwoImage}/>
									<Text
										style={styles.documentNameTwoText}>ID card</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Image
										source={require("./../../assets/images/schevron.png")}
										style={styles.schevronThreeImage}/>
								</View>
								</TouchableOpacity>
							</View>
						</View>
						<View
							style={styles.driverSLicenseView}>
							<View
								style={styles.separatorLineView}/>
							<View
								pointerEvents="box-none"
								style={{
									position: "absolute",
									left: 0,
									right: 0,
									top: 0,
									bottom: 0,
									justifyContent: "center",
								}}>
						<TouchableOpacity onPress={this.onButtonPressed}>
								<View
									pointerEvents="box-none"
									style={{
										height: 3.1*h,
										marginLeft: 8*w,
										marginRight: 8.5*w,
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Image
										source={require("./../../assets/images/icons-passport.png")}
										style={styles.iconsPassportImage}/>
									<Text
										style={styles.documentNameText}>Driver's license</Text>
									<View
										style={{
											flex: 1,
										}}/>
									<Image
										source={require("./../../assets/images/schevron.png")}
										style={styles.schevronTwoImage}/>
								</View>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			</View>
			</SafeAreaView>
	}
}

const styles = StyleSheet.create({
	selectDocumentView: {
		backgroundColor: "white",
		flex: 1,
	},
	iosControlsView: {
		backgroundColor: "transparent",
		height: 90.6*h,
	},
	navigationView: {
		backgroundColor: "transparent",
		alignSelf: "stretch",
		height: 4.9*h,
	},
	progressBar: {
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
	progress: {
		backgroundColor: "rgb(41, 97, 255)",
		width: 15.7*w,
		height: 0.2*h,
		marginLeft: 6.3*w,
	},
	introTextView: {
		backgroundColor: "transparent",
		width: 90.6*w,
		height: 15*h,
		alignItems: "flex-start",
	},
	headlineTwoLinesText: {
		backgroundColor: "transparent",
		color: "rgb(43, 44, 99)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 2*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 3.1*h,
		letterSpacing: 0.67,
		marginLeft: 7.7*w,
		marginTop: 5*h,
	},
	textTwoLinesText: {
		color: "rgb(120, 121, 147)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 1.8*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 2.7*h,
		letterSpacing: 0.76,
		backgroundColor: "transparent",
		marginLeft: 7.7*w,
		marginBottom: 0.8*h,
	},
	documenttypeviewView: {
		backgroundColor: "transparent",
		width: 90.6*w,
		height: 23.4*h,
	},
	passportView: {
		backgroundColor: "transparent",
		height: 7.8*h,
		flexDirection: "row",
		alignItems: "center",
	},
	iconsPassportThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 6.8*w,
		height: 3.1*h,
		marginLeft: 8*w,
	},
	documentNameThreeText: {
		color: "rgb(35, 46, 102)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 2*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 1.3*h,
		paddingTop: 1.1*h,
		backgroundColor: "transparent",
		marginLeft: 2.4*w,
	},
	schevronFourImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 1.9*w,
		height: 1.5*h,
		marginRight: 8.5*w,
	},
	idCardView: {
		backgroundColor: "transparent",
		height: 7.8*h,
	},
	separatorLineTwoView: {
		backgroundColor: "rgb(225, 225, 229)",
		position: "absolute",
		alignSelf: "center",
		width: 74.4*w,
		top: 0,
		height: 0.1*h,
	},
	iconsPassportTwoImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 6.8*w,
		height: 3.1*h,
	},
	documentNameTwoText: {
		color: "rgb(35, 46, 102)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 2*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 1.3*h,
		paddingTop: 1.1*h,
		backgroundColor: "transparent",
		marginLeft: 2.4*w,
	},
	schevronThreeImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 1.9*w,
		height: 1.5*h,
	},
	driverSLicenseView: {
		backgroundColor: "transparent",
		height: 7.8*h,
	},
	separatorLineView: {
		backgroundColor: "rgb(225, 225, 229)",
		position: "absolute",
		alignSelf: "center",
		width: 74.4*w,
		top: 0,
		height: 0.1*h,
	},
	iconsPassportImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 6.8*w,
		height: 3.1*h,
	},
	documentNameText: {
		color: "rgb(35, 46, 102)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 2*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 1.3*h,
		paddingTop: 1.1*h,
		backgroundColor: "transparent",
		marginLeft: 2.4*w,
	},
	schevronTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 1.9*w,
		height: 1.5*h,
	},
})

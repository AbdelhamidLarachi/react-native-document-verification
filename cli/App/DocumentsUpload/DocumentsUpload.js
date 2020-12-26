//
//  DocumentsUpload
//  Verification-ui-kit
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2020 NitroCoding. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView} from "react-native"
import {h, w} from '../Dimensions'


export default class DocumentsUpload extends React.Component {

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
		
		navigate("PhotoVerification")
	}


	onRemovePhotoPress = () => {
	
	}

	onIconsTopUpCopy3Pressed = () => {
	
	}

	onAddButton2Pressed = () => {
	
	}

	onIconsTopUpCopy2Pressed = () => {
	
	}

	render() {
	
		return <SafeAreaView style={{flex: 1}}>
			<View
				style={styles.multipleDocumentUploadedView}>
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
						left: 0,
						right: 0,
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
							style={styles.headlineText}>Take photo of IDs and confirmations</Text>
						<View
							style={{
								flex: 1,
							}}/>
						<Text
							style={styles.descriptionText}>Upload pictures of documents, selfie and confirmations</Text>
					</View>
					<View
						style={styles.informationsviewView}>
						<View
							style={styles.passportView}>
							<Text
								style={styles.passportText}>Passport</Text>
							<View
								style={styles.separatorLineView}/>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "flex-start",
									width: 16.4*w,
									height: 7.5*h,
									marginTop: 0.2*h,
								}}>
								<Image
									source={require("./../../assets/images/920x1240.png")}
									style={styles.x1240Image}/>
								<TouchableOpacity onPress={this.onRemovePhotoPress}>
								<Image
									source={require("./../../assets/images/icons-top-up-copy-2.png")}
									style={styles.iconsTopUpCopy2Image}/>
								</TouchableOpacity>	
							</View>
						</View>
						<View
							style={styles.selfieView}>
							<Text
								style={styles.selfieText}>Selfie</Text>
							<View
								style={styles.separatorLineCopyView}/>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "flex-start",
									width: 14.3*w,
									height: 6.6*h,
									marginTop: 1.2*h,
								}}>
								<View
									style={styles.addselfieView}/>
								<TouchableOpacity
									onPress={this.onIconsTopUpCopy2Pressed}
									style={styles.iconsTopUpCopy2Button}>
									<Image
										source={require("./../../assets/images/icons-top-up-copy-3.png")}
										style={styles.iconsTopUpCopy2ButtonImage}/>
								</TouchableOpacity>
							</View>
						</View>
						<View
							style={styles.confirmationOfFundsView}>
							<Text
								style={styles.confirmationOfFundText}>Confirmation of Funds</Text>
							<View
								style={styles.separatorLineCopy2View}/>
							<View
								pointerEvents="box-none"
								style={{
									alignSelf: "flex-start",
									width: 30.9*w,
									height: 6.6*h,
									marginTop: 1.2*h,
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<View
									pointerEvents="box-none"
									style={{
										width: 14.3*w,
										height: 6.6*h,
									}}>
									<View
										style={styles.addconfirmation1View}/>
									<TouchableOpacity
										onPress={this.onIconsTopUpCopy3Pressed}
										style={styles.addbuttonButton}>
										<Image
											source={require("./../../assets/images/icons-top-up-copy-3.png")}
											style={styles.addbuttonButtonImage}/>
									</TouchableOpacity>
								</View>
								<View
									pointerEvents="box-none"
									style={{
										width: 14.3*w,
										height: 6.6*h,
										marginLeft: 2.4*w,
									}}>
									<View
										style={styles.addconfirmation2View}/>
									<TouchableOpacity
										onPress={this.onAddButton2Pressed}
										style={styles.addbutton2Button}>
										<Image
											source={require("./../../assets/images/icons-top-up-copy-3.png")}
											style={styles.addbutton2ButtonImage}/>
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<TouchableOpacity
						onPress={this.onButtonPressed}
						style={styles.buttonButton}>
						<Text
							style={styles.buttonButtonText}>Upload documents</Text>
					</TouchableOpacity>
				</View>
			</View>
			</SafeAreaView>
	}
}

const styles = StyleSheet.create({
	multipleDocumentUploadedView: {
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
		alignSelf: "stretch",
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
		width: 31.9*w,
		height: 0.2*h,
		marginLeft: 6.3*w,
	},
	introTextView: {
		backgroundColor: "transparent",
		width: 90.6*w,
		height: 18.3*h,
		alignItems: "center",
	},
	headlineText: {
		backgroundColor: "transparent",
		color: "rgb(43, 44, 99)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 2*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 3.1*h,
		letterSpacing: 0.67,
		marginTop: 5*h,
	},
	descriptionText: {
		backgroundColor: "transparent",
		color: "rgb(120, 121, 147)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 1.8*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 2.7*h,
		letterSpacing: 0.76,
		marginBottom: 1.3*h,
	},
	informationsviewView: {
		backgroundColor: "transparent",
		width: 74.6*w,
		height: 39.4*h,
		marginTop: 2.9*h,
		alignItems: "center",
	},
	passportView: {
		backgroundColor: "transparent",
		width: 74.6*w,
		height: 10.9*h,
	},
	passportText: {
		backgroundColor: "transparent",
		color: "rgb(43, 44, 99)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 2*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 2.9*h,
		letterSpacing: 0.5,
		marginLeft: 0.5*w,
		marginRight: 55.8*w,
	},
	separatorLineView: {
		backgroundColor: "rgb(225, 225, 229)",
		height: 0.1*h,
		marginLeft: 0.2*w,
		marginRight: 0.2*w,
		marginTop: 0.3*h,
	},
	x1240Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 0,
		width: 14.5*w,
		top: 0.8*h,
		height: 6.7*h,
	},
	iconsTopUpCopy2Image: {
		backgroundColor: "transparent",
		resizeMode: "center",
		position: "absolute",
		left: 12.3*w,
		width: 4.1*w,
		top: 0,
		height: 1.9*h,
	},
	selfieView: {
		backgroundColor: "transparent",
		width: 74.4*w,
		height: 10.8*h,
		marginTop: 3.7*h,
	},
	selfieText: {
		color: "rgb(43, 44, 99)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 2*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 2.9*h,
		letterSpacing: 0.5,
		backgroundColor: "transparent",
		marginLeft: 0.5*w,
		marginRight: 62.3*w,
	},
	separatorLineCopyView: {
		backgroundColor: "rgb(225, 225, 229)",
		height: 0.1*h,
		marginTop: 0.2*h,
	},
	addselfieView: {
		backgroundColor: "rgb(235, 240, 255)",
		position: "absolute",
		left: 0,
		width: 14.3*w,
		top: 0,
		height: 6.6*h,
	},
	iconsTopUpCopy2Button: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		left: 0,
		width: 14.3*w,
		top: 0,
		height: 6.6*h,
	},
	iconsTopUpCopy2ButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 1.3*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	iconsTopUpCopy2ButtonImage: {
		resizeMode: "contain",
	},
	confirmationOfFundsView: {
		backgroundColor: "transparent",
		width: 74.4*w,
		height: 10.8*h,
		marginTop: 3.1*h,
	},
	confirmationOfFundText: {
		color: "rgb(43, 44, 99)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 2*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 2.9*h,
		letterSpacing: 0.5,
		backgroundColor: "transparent",
		marginLeft: 0.5*w,
		marginRight: 27.8*w,
	},
	separatorLineCopy2View: {
		backgroundColor: "rgb(225, 225, 229)",
		height: 0.1*h,
		marginTop: 0.2*h,
	},
	addconfirmation1View: {
		backgroundColor: "rgb(235, 240, 255)",
		position: "absolute",
		left: 0,
		width: 14.3*w,
		top: 0,
		height: 6.6*h,
	},
	addbuttonButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		left: 0,
		width: 14.3*w,
		top: 0,
		height: 6.6*h,
	},
	addbuttonButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 1.3*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	addbuttonButtonImage: {
		resizeMode: "contain",
	},
	addconfirmation2View: {
		backgroundColor: "rgb(235, 240, 255)",
		position: "absolute",
		left: 0,
		width: 14.3*w,
		top: 0,
		height: 6.6*h,
	},
	addbutton2Button: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		position: "absolute",
		left: 0,
		width: 14.3*w,
		top: 0,
		height: 6.6*h,
	},
	addbutton2ButtonText: {
		color: "black",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 1.3*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
	},
	addbutton2ButtonImage: {
		resizeMode: "contain",
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

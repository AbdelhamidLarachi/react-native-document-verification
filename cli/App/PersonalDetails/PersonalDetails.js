//
//  PersonalDetails
//  Verification-ui-kit
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2020 NitroCoding. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView} from "react-native"
import {h, w} from '../Dimensions'



export default class PersonalDetails extends React.Component {

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
		
		navigate("SelectDocument")
	}

	render() {
	
		return <SafeAreaView>
			<View
				style={styles.personalDetailsFilledView}>
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
								style={styles.rectangleCopyView}/>
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
									width: 24.2*w,
									height: 1.5*h,
									marginLeft: 13*w,
									flexDirection: "row",
									alignItems: "center",
								}}>
								<Image
									source={require("./../../assets/images/schevron.png")}
									style={styles.schevronImage}/>
								<View
									style={styles.rectangleCopyTwoView}/>
							</View>
						</View>
					</View>
					<View
						style={styles.introTextView}>
						<Text
							style={styles.headlineText}>Welcome</Text>
						<Text
							style={styles.descriptionText}>To verify your identity, please fill in personal information </Text>
					</View>
					<View
						style={styles.nameView}>
						<Text
							style={styles.nameText}>Name</Text>
						<TextInput
							returnKeyType="next"
							autoCorrect={false}
							placeholder="Larachi"
							style={styles.fieldInputTextInput}/>
					</View>
					<View
						style={styles.surnameView}>
						<Text
							style={styles.surnameText}>Surname</Text>
						<TextInput
							returnKeyType="next"
							autoCorrect={false}
							placeholder="Abdelhamid"
							style={styles.fieldInputTextInput}/>
					</View>
					<View
						style={styles.dateOfBirthView}>
						<Text
							style={styles.dateofbirthText}>Date of birth</Text>
						<TextInput
							keyboardType="number-pad"
							returnKeyType="next"
							autoCorrect={false}
							placeholder="21.05.2020"
							style={styles.fieldInputTextInput}/>
					</View>
					<View
						style={styles.emailView}>
						<Text
							style={styles.emailText}>Email</Text>
						<TextInput
							keyboardType="email-address"
							returnKeyType="next"
							autoCorrect={false}
							placeholder="Abdelhamid@icloud.com"
							style={styles.fieldInputTextInput}/>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<TouchableOpacity
						onPress={this.onButtonPressed}
						style={styles.buttonButton}>
						<Text
							style={styles.buttonButtonText}>To document upload</Text>
					</TouchableOpacity>
				</View>
			</View>
			</SafeAreaView>
	}
}

const styles = StyleSheet.create({
	personalDetailsFilledView: {
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
		height: 4.9*h,
	},
	rectangleCopyView: {
		backgroundColor: "rgb(235, 240, 255)",
		width: 48.3*w,
		height: 0.1*h,
	},
	schevronImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 1.9*w,
		height: 1.5*h,
	},
	rectangleCopyTwoView: {
		backgroundColor: "rgb(41, 97, 255)",
		width: 15.9*w,
		height: 0.2*h,
		marginLeft: 6.3*w,
	},
	introTextView: {
		backgroundColor: "transparent",
		height: 15*h,
		alignItems: "flex-start",
	},
	headlineText: {
		backgroundColor: "transparent",
		color: "rgb(43, 44, 99)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 2.7*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		lineHeight: 2.9*h,
		letterSpacing: 0.67,
		paddingTop: 0.3*h,
		marginLeft: 7.7*w,
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
		marginLeft: 7.7*w,
		marginTop: 1.1*h,
	},
	nameView: {
		backgroundColor: "transparent",
		height: 7.8*h,
		marginTop: 5.2*h,
		alignItems: "flex-start",
	},
	nameText: {
		backgroundColor: "transparent",
		color: "rgb(37, 38, 94)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 1.8*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.06,
		marginLeft: 8.5*w,
	},
	surnameView: {
		backgroundColor: "transparent",
		height: 7.8*h,
		marginTop: 2.2*h,
		alignItems: "flex-start",
	},
	surnameText: {
		color: "rgb(37, 38, 94)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 1.8*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.06,
		backgroundColor: "transparent",
		marginLeft: 8.5*w,
	},
	dateOfBirthView: {
		backgroundColor: "transparent",
		height: 7.8*h,
		marginTop: 2.2*h,
		alignItems: "flex-start",
	},
	dateofbirthText: {
		color: "rgb(37, 38, 94)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 1.8*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.06,
		backgroundColor: "transparent",
		marginLeft: 8.5*w,
	},
	emailView: {
		backgroundColor: "transparent",
		height: 7.8*h,
		marginTop: 2.2*h,
		alignItems: "flex-start",
	},
	emailText: {
		color: "rgb(37, 38, 94)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 1.8*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		letterSpacing: 0.06,
		backgroundColor: "transparent",
		marginLeft: 8.5*w,
	},
	fieldInputTextInput: {
		backgroundColor: "transparent",
		padding: 0,
		color: "rgb(45, 45, 49)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 2*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "left",
		width: '80%',
		height: 2.3*h,
		marginLeft: 8.5*w,
		marginTop: 1.2*h,
	},
	buttonButton: {
		backgroundColor: "rgb(43, 44, 99)",
		borderRadius: 4,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "center",
		width: 74.4*w,
		height: 5.6*h,
		marginTop: 7.8*h
	},
	buttonButtonText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 1.8*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
})

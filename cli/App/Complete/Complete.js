//
//  Complete
//  Verification-ui-kit
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2020 NitroCoding. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View} from "react-native"
import {h, w} from '../Dimensions'


export default class Complete extends React.Component {

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

	onDoneButtonPressed = () => {
	
	}

	render() {
	
		return <View
				style={styles.completeView}>
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
						width: 90.6*w,
						top: 19.5*h,
						bottom: 8.9*h,
						alignItems: "flex-start",
					}}>
					<View
						pointerEvents="box-none"
						style={{
							width: 90.6*w,
							height: 21.5*h,
						}}>
						<View
							style={styles.verificationcompleteView}>
							<Text
								style={styles.verificationcompleteText}>Verification complete</Text>
							<Text
								style={styles.enjoyourserviceText}>Enjoy our servce</Text>
						</View>
						<Image
							source={require("./../../assets/images/check-icon.png")}
							style={styles.checkIconImage}/>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<TouchableOpacity
						onPress={this.onDoneButtonPressed}
						style={styles.donebuttonButton}>
						<Text
							style={styles.donebuttonButtonText}>Done</Text>
					</TouchableOpacity>
				</View>
			</View>
	}
}

const styles = StyleSheet.create({
	completeView: {
		backgroundColor: "white",
		flex: 1,
	},
	iosControlsView: {
		backgroundColor: "transparent",
		width: 90.6*w,
		height: 90.6*h,
	},
	verificationcompleteView: {
		backgroundColor: "transparent",
		position: "absolute",
		alignSelf: "center",
		width: 90.6*w,
		top: 0,
		height: 21.5*h,
		alignItems: "flex-start",
	},
	verificationcompleteText: {
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
		marginTop: 11.6*h,
	},
	enjoyourserviceText: {
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
		marginTop: 0.3*h,
	},
	checkIconImage: {
		resizeMode: "center",
		backgroundColor: "transparent",
		position: "absolute",
		left: 7*w,
		width: 19.3*w,
		top: 2.2*h,
		height: 6.6*h,
	},
	donebuttonButtonImage: {
		resizeMode: "contain",
		marginRight: 2.4*w,
	},
	donebuttonButton: {
		backgroundColor: "rgb(43, 44, 99)",
		borderRadius: 4,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "center",
		width: 74.4*w,
		height: 5.6*h,
		marginLeft: 8.5*w
	},
	donebuttonButtonText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 1.8*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
})

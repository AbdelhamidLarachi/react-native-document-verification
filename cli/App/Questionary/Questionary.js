//
//  Questionary
//  Verification-ui-kit
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2020 NitroCoding. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView} from "react-native"
import {h, w} from '../Dimensions'


export default class Questionary extends React.Component {

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
		this.state = {  
			digitalCurrency: true,
			credit: false,
			goodsAndService: true,
			administrationFees: false,
			Fees: false,
			FXoperations: false,
			referalProgram: false,
        }; 
	}

	componentDidMount() {
	
	}

	onButtonPressed = () => {
	
		const { navigate } = this.props.navigation
		
		navigate("Complete")
	}


	render() {
	
		return <SafeAreaView style={{flex: 1}}>
			<View
				style={styles.questionaryView}>
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
						top: 0,
						bottom: 0,
						justifyContent: "center",
					}}>
					<View
						style={styles.typeofpayementView}>
						<TouchableOpacity
								onPress={() => this.setState({digitalCurrency: !this.state.digitalCurrency})}
								style={this.state.digitalCurrency ? styles.ChosenPaymentTypeTag : styles.PaymentTypeTag}>
							<Text
								style={this.state.digitalCurrency ? styles.ChosenPaymentTypeTagText : styles.PaymentTypeTagText}>{this.state.digitalCurrency ? '✓ ' : null}Digital currencies trading </Text>
						</TouchableOpacity>
						<View
							pointerEvents="box-none"
							style={{
								marginTop: 1.6*h,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<TouchableOpacity
								onPress={() => this.setState({credit: !this.state.credit})}
								style={this.state.credit ? styles.ChosenPaymentTypeTag : styles.PaymentTypeTag}>
								<Text
									style={this.state.credit ? styles.ChosenPaymentTypeTagText : styles.PaymentTypeTagText}>{this.state.credit ? '✓ ' : null}Credit</Text>
							</TouchableOpacity>
							<View
								style={{
									flex: 1,
								}}/>
							<TouchableOpacity
								onPress={() => this.setState({goodsAndService: !this.state.goodsAndService})}
								style={this.state.goodsAndService ? styles.ChosenPaymentTypeTag : styles.PaymentTypeTag}>
								
								<Text
									style={this.state.goodsAndService ? styles.ChosenPaymentTypeTagText : styles.PaymentTypeTagText}>{this.state.goodsAndService ? '✓ ' : null}Goods and services </Text>
							</TouchableOpacity>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								marginRight: 7.5*w,
								marginTop: 1.6*h,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<TouchableOpacity
								onPress={() => this.setState({administrationFees: !this.state.administrationFees})}
								style={this.state.administrationFees ? styles.ChosenPaymentTypeTag : styles.PaymentTypeTag}>
								<Text
									style={this.state.administrationFees ? styles.ChosenPaymentTypeTagText : styles.PaymentTypeTagText}>{this.state.administrationFees ? '✓ ' : null}Administration fees</Text>
							</TouchableOpacity>
							<View
								style={{
									flex: 1,
								}}/>
							<TouchableOpacity
								onPress={() => this.setState({Fees: !this.state.Fees})}
								style={this.state.Fees ? styles.ChosenPaymentTypeTag : styles.PaymentTypeTag}>
								<Text
									style={this.state.Fees ? styles.ChosenPaymentTypeTagText : styles.PaymentTypeTagText}>{this.state.Fees ? '✓ ' : null}Fees</Text>
							</TouchableOpacity>
						</View>
						<View
							pointerEvents="box-none"
							style={{
								marginTop: 1.6*h,
								flexDirection: "row",
								alignItems: "flex-start",
							}}>
							<TouchableOpacity
								onPress={() => this.setState({FXoperations: !this.state.FXoperations})}
								style={this.state.FXoperations ? styles.ChosenPaymentTypeTag : styles.PaymentTypeTag}>
								<Text
									style={this.state.FXoperations ? styles.ChosenPaymentTypeTagText : styles.PaymentTypeTagText}>{this.state.FXoperations ? '✓ ' : null}FX operations</Text>
							</TouchableOpacity>
							<View
								style={{
									flex: 1,
								}}/>
							<TouchableOpacity
								onPress={() => this.setState({referalProgram: !this.state.referalProgram})}
								style={this.state.referalProgram ? styles.ChosenPaymentTypeTag : styles.PaymentTypeTag}>
								<Text
									style={this.state.referalProgram ? styles.ChosenPaymentTypeTagText : styles.PaymentTypeTagText}>{this.state.referalProgram ? '✓ ' : null}Referal program</Text>
							</TouchableOpacity>
						</View>
					</View>
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
							style={styles.headlineText}>Types of payments</Text>
						<Text
							style={styles.textTwoLinesText}>Choose how are you going to use service</Text>
					</View>
					<View
						style={{
							flex: 1,
						}}/>
					<TouchableOpacity
						onPress={this.onButtonPressed}
						style={styles.submitbuttonButton}>
						<Text
							style={styles.submitbuttonButtonText}>Submite application</Text>
					</TouchableOpacity>
				</View>
			</View>
			</SafeAreaView>
	}
}

const styles = StyleSheet.create({
	questionaryView: {
		backgroundColor: "white",
		flex: 1,
	},
	iosControlsView: {
		backgroundColor: "transparent",
		width: 90.6*w,
		height: 90.6*h,
	},
	typeofpayementView: {
		backgroundColor: "transparent",
		width: 75.6*w,
		height: 22.5*h,
	},
	ChosenPaymentTypeTag: {
		backgroundColor: "rgb(43, 44, 99)",
		borderRadius: 4,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
	},
	ChosenPaymentTypeTagText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 1.8*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	PaymentTypeTag: {
		backgroundColor: "rgb(235, 240, 255)",
		borderRadius: 4,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 10,
	},
	PaymentTypeTagText: {
		color: "rgb(43, 44, 99)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 1.8*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
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
		resizeMode: "center",
		backgroundColor: "transparent",
		width: 1.9*w,
		height: 1.5*h,
	},
	progressView: {
		backgroundColor: "rgb(41, 97, 255)",
		width: 45.9*w,
		height: 0.2*h,
		marginLeft: 6.3*w,
	},
	introTextView: {
		backgroundColor: "transparent",
		width: 90.6*w,
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
		alignSelf: "flex-end",
		marginRight: 3.6*w,
		marginTop: 0.3*h,
	},
	submitbuttonButton: {
		backgroundColor: "rgb(43, 44, 99)",
		borderRadius: 4,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		width: 74.4*w,
		height: 5.6*h,
	},

	submitbuttonButtonText: {
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 1.8*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	}
})

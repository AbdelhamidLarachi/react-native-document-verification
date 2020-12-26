//
//  App.js
//  Verification-ui-kit
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2020 NitroCoding. All rights reserved.
//

import React from "react"
import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import PhotoVerification from "./App/PhotoVerification/PhotoVerification"
import Complete from "./App/Complete/Complete"
import DocumentsUpload from "./App/DocumentsUpload/DocumentsUpload"
import PersonalDetails from "./App/PersonalDetails/PersonalDetails"
import Questionary from "./App/Questionary/Questionary"
import SelectDocument from "./App/SelectDocument/SelectDocument"


const PushRouteOne = createStackNavigator({
	PersonalDetails: {
		screen: PersonalDetails,
	},
	SelectDocument: {
		screen: SelectDocument,
	},
	DocumentsUpload: {
		screen: DocumentsUpload,
	},
	PhotoVerification: {
		screen: PhotoVerification,
	},
	Questionary: {
		screen: Questionary,
	},
	Complete: {
		screen: Complete,
	},
}, {
	initialRouteName: "PersonalDetails",
})

const RootNavigator = createStackNavigator({
	PushRouteOne: {
		screen: PushRouteOne,
	},
}, {
	mode: "modal",
	headerMode: "none",
	initialRouteName: "PushRouteOne",
})

const AppContainer = createAppContainer(RootNavigator)




export default class App extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
			return <AppContainer/>
	}
}

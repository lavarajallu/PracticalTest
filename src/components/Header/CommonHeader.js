import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Icon} from 'native-base';

import styles from "./HeaderStyles";
import { Actions } from "react-native-router-flux";
export default class CommonHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			headerTitle: this.props.title
		};
		this.back = this.back.bind(this);
	}



	back() {
		Actions.pop();
	}

	render() {
		return (
			<View style={styles.commonHeaderView}>
				<View style={styles.headerRowView}>
					<TouchableOpacity
						style={styles.headerIconsView}
						onPress={() => {
							this.back();
						}}
					>
					{this.state.headerTitle !== "Sign Up Wizard" ? (

					<Icon name='arrow-back' style={{color:"white"}} />
					):(null)}
						
					</TouchableOpacity>
					<View style={styles.headerTitleView}>
						<Text style={styles.headerTitle}>
							{this.state.headerTitle}
						</Text>
					</View>
						<View style={styles.headerIconsView} />
				</View>
			</View>
		);
	}
}
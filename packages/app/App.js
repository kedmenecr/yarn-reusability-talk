import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { add } from '@yarn-reusability-talk/common'
export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>{add(1, 3)}</Text>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

import * as React from 'react';
import { View, Text } from 'react-native';


export default class Zufällig extends React.Component {

    componentDidMount() {

        // change header title
        this.props.navigation.setOptions({ title: 'Zufällig' });
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Zufällig</Text>
            </View>
        );
    }
}
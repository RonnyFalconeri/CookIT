import * as React from 'react';
import { View, Text } from 'react-native';


export default class Rezept extends React.Component {

    componentDidMount() {

        // change header title
        this.props.navigation.setOptions({ title: 'Rezept' });
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>EIN REZEPT</Text>
            </View>
        );
    }
}
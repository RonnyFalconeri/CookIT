import * as React from 'react';
import { View, Text } from 'react-native';


export default class Neues_Rezept extends React.Component {

    componentDidMount() {

        // change header title
        this.props.navigation.setOptions({ title: 'Neues Rezept' });
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>NEUES REZEPT</Text>
            </View>
        );
    }
}
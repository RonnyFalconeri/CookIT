import * as React from 'react';
import { View, Text } from 'react-native';


export default class Online_Rezept extends React.Component {

    componentDidMount() {

        // change header title
        this.props.navigation.setOptions({ title: 'Online-Rezept' });
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>ONLINE-REZEPT</Text>
            </View>
        );
    }
}
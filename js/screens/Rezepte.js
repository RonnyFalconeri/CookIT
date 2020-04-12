import * as React from 'react';
import { View, Text, Button } from 'react-native';


export default class Rezepte extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>REZEPTE</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Rezept')}
                />
            </View>
        );
    }
}
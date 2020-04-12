import * as React from 'react';
import { View, Text, Button } from 'react-native';


export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>HOMESCREEN</Text>
                <Button title="Rezepte" onPress={() => this.props.navigation.navigate('Rezepte')} />
                <Button title="Rezept" onPress={() => this.props.navigation.navigate('Rezept')} />
                <Button title="Neues_Rezept" onPress={() => this.props.navigation.navigate('Neues_Rezept')} />
                <Button title="Online_Rezept" onPress={() => this.props.navigation.navigate('Online_Rezept')} />
                <Button title="Favoriten" onPress={() => this.props.navigation.navigate('Favoriten')} />
                <Button title="Zufällig" onPress={() => this.props.navigation.navigate('Zufällig')} />
                <Button title="Online_Suche" onPress={() => this.props.navigation.navigate('Online_Suche')} />
            </View>
        );
    }
}
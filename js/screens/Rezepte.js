import * as React from 'react';
import { View } from 'react-native';

import ListItem from '../components/ListItem';


export default class Rezepte extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <ListItem onPress={() => this.props.navigation.navigate('Rezept')} />
                <ListItem onPress={() => this.props.navigation.navigate('Rezept')} />
                <ListItem onPress={() => this.props.navigation.navigate('Rezept')} />
                <ListItem onPress={() => this.props.navigation.navigate('Rezept')} />
                <ListItem onPress={() => this.props.navigation.navigate('Rezept')} />
                <ListItem onPress={() => this.props.navigation.navigate('Rezept')} />
            </View>
        );
    }
}
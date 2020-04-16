import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image, View } from 'react-native';


export default class Rezepte_ListItem extends React.Component {
    render() {
        return (
            <TouchableOpacity
                style={{ height: '85%', width: 300, backgroundColor: this.props.color, borderRadius: 20, margin: 20, alignItems: 'flex-end', justifyContent: 'flex-end' }}
                onPress={this.props.onPress}
            >
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', padding: 10 }}>{this.props.title}</Text>
            </TouchableOpacity >
        );
    }
}
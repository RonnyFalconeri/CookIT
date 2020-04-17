import * as React from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';


export default class IngredientsInput extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20 }}>Zutaten: </Text>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    {this.props.children}
                </View>
                <TouchableOpacity style={{ backgroundColor: '#93c47d', borderRadius: 50, width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({

});

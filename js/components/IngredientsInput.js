import * as React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';


export default class IngredientsInput extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>Zutaten: </Text>
                <View style={styles.row}>
                    {this.props.children}
                </View>
                <TouchableOpacity style={styles.addRow}>
                    <Text style={styles.addRow_label}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    label: {
        fontSize: 20
    },
    row: {
        flexDirection: 'row',
        margin: 10
    },
    addRow: {
        backgroundColor: '#93c47d',
        borderRadius: 50,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addRow_label: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

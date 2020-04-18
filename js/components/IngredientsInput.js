import * as React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';


export default class IngredientsInput extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.label}>Zutaten:</Text>

                <View style={styles.row}>
                    {this.props.children}
                </View>

                <View style={styles.controls}>
                    <TouchableOpacity style={styles.delRow}>
                        <Text style={styles.addRow_label}>-</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.addRow}>
                        <Text style={styles.addRow_label}>+</Text>
                    </TouchableOpacity>
                </View>


            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        padding: 10,
        marginVertical: 20
    },
    label: {
        fontSize: 20
    },
    row: {
        flexDirection: 'column',
        margin: 5
    },
    controls: {
        flexDirection: 'row',
        marginVertical: 10
    },
    addRow: {
        backgroundColor: '#93c47d',
        borderRadius: 50,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 5
    },
    addRow_label: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    delRow: {
        backgroundColor: '#d66060',
        borderRadius: 20,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 5,
    }
});

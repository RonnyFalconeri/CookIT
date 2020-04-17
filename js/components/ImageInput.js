import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


export default class ImageInput extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.button} >
                <Text style={styles.label}>Foto hochladen</Text>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    button: {
        width: '70%',
        backgroundColor: '#93c47d',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        marginBottom: 20
    },
    label: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

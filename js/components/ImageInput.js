import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


export default class imageInput extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.imageInput} >
                <Text style={styles.imageInput_label}>Foto hochladen</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    imageInput: {
        width: '70%',
        backgroundColor: '#93c47d',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        marginBottom: 20
    },
    imageInput_label: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

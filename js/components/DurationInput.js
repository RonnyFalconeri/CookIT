import * as React from 'react';
import { Text, StyleSheet, TextInput, View } from 'react-native';


export default class DurationInput extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>Dauer: </Text>
                <TextInput
                    style={styles.textInput}
                    keyboardType="number-pad"
                    onChangeText={this.props.onChange}
                />
                <Text style={styles.label}> Minuten</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20
    },
    label: {
        fontSize: 20,
    },
    textInput: {
        height: 40,
        width: 50,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        fontSize: 20,
        margin: 10
    }
});

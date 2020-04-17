import * as React from 'react';
import { Text, StyleSheet, TextInput, View } from 'react-native';


export default class DurationInput extends React.Component {
    render() {
        return (
            <View style={styles.durationInputContainer}>
                <Text style={styles.durationInput_label}>Dauer: </Text>
                <TextInput
                    style={styles.durationInput}
                    keyboardType="number-pad"
                    onChangeText={this.props.onChange}
                />
                <Text style={styles.durationInput_label}> Minuten</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    durationInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20
    },
    durationInput_label: {
        fontSize: 20,
    },
    durationInput: {
        height: 40,
        width: 50,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        fontSize: 20,
        margin: 10
    }
});

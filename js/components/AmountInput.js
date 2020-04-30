import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';


export default class AmountInput extends React.Component {
    render() {
        return (
            <TextInput
                style={styles.textInput}
                placeholder="Menge"
                onChangeText={this.props.onChange}
                value={this.props.value}
            />
        );
    }
}


const styles = StyleSheet.create({
    textInput: {
        height: 40,
        width: 100,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        fontSize: 20,
        marginHorizontal: 10,
        textAlign: 'right'
    }
});

import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';


export default class PreparationInput extends React.Component {
    render() {
        return (
            <TextInput
                style={styles.textInput}
                placeholder="Zubereitung"
                multiline={true}
                onChangeText={this.props.onChange}
            />
        );
    }
}


const styles = StyleSheet.create({
    textInput: {
        minHeight: 40,
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        fontSize: 20,
        margin: 10
    }
});

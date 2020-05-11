import * as React from 'react';
import { TextInput, StyleSheet } from 'react-native';


export default class AuthorInput extends React.Component {
    render() {
        return (
            <TextInput
                style={styles.textInput}
                ref={this.props.refName}
                placeholder="Autor"
                value={this.props.value}
                onChangeText={this.props.onChange}
            />
        );
    }
}


const styles = StyleSheet.create({
    textInput: {
        height: 40,
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        fontSize: 20,
        margin: 10
    }
});

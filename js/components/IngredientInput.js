import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';


export default class IngredientInput extends React.Component {
    render() {
        return (
            <TextInput
                style={styles.textInput}
                placeholder="Zutat"
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
        marginHorizontal: 10
    }
});

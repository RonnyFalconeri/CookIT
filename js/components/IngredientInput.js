import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default class IngredientInput extends React.Component {
    render() {
        return (
            <TextInput
                style={{ height: 40, width: 100, borderBottomColor: 'black', borderBottomWidth: 1, fontSize: 20, margin: 10 }}
                placeholder="Zutat"
                onChangeText={this.props.onChange}
            />
        );
    }
}

const styles = StyleSheet.create({

});

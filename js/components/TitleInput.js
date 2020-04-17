import * as React from 'react';
import { TextInput, StyleSheet } from 'react-native';


export default class TitleInput extends React.Component {
    render() {
        return (
            <TextInput
                style={styles.titleInput}
                placeholder="Bezeichnung"
                onChangeText={this.props.onChangeText}
            />
        );
    }
}

const styles = StyleSheet.create({
    titleInput: {
        height: 40,
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        fontSize: 20,
        margin: 10
    }
});

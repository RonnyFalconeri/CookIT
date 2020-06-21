import * as React from 'react';
import { Text, StyleSheet, View, Picker } from 'react-native';


export default class NationalityInput extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>Nationalität: </Text>
                <Picker
                    style={styles.picker}
                    onValueChange={this.props.onChange}
                    selectedValue={this.props.selectedValue}
                >
                    <Picker.Item label="Keine" value="none" />
                    <Picker.Item label="Italienisch" value="ITA" />
                    <Picker.Item label="Deutsch" value="GER" />
                    <Picker.Item label="Griechisch" value="GRE" />
                    <Picker.Item label="Chinesisch" value="CHI" />
                    <Picker.Item label="Türkisch" value="TUR" />
                    <Picker.Item label="Amerikanisch" value="USA" />
                    <Picker.Item label="Mexikanisch" value="MEX" />
                </Picker>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        fontSize: 20
    },
    picker: {
        width: 150
    }
});

import * as React from 'react';
import { Text, StyleSheet, View, Picker } from 'react-native';


export default class NationalityInput extends React.Component {
    render() {
        return (
            <View style={styles.nationalityInput}>
                <Text style={styles.nationalityInput_label}>Nationalität: </Text>
                <Picker onValueChange={this.props.onChange} >
                    <Picker.Item label="Keine" value="none" />
                    <Picker.Item label="Italienisch" value="ita" />
                    <Picker.Item label="Deutsch" value="deu" />
                    <Picker.Item label="Griechisch" value="gre" />
                    <Picker.Item label="Chinesisch" value="chi" />
                    <Picker.Item label="Türkisch" value="tur" />
                </Picker>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    nationalityInput: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    nationalityInput_label: {
        fontSize: 20
    }
});

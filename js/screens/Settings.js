import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import CustomFont from '../components/CustomFont';


export default class Settings extends React.Component {


    componentDidMount() {

        // change header title
        this.props.navigation.setOptions({ title: <CustomFont>Einstellungen</CustomFont> });
    }


    render() {
        return (
            <View style={styles.container}>

                <Text>Einstellungen</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        alignItems: 'center'
    }
});
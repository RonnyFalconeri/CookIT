import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import TextCustom from '../components/TextCustom';


export default class Einstellungen extends React.Component {


    componentDidMount() {

        // change header title
        this.props.navigation.setOptions({ title: <TextCustom>Einstellungen</TextCustom> });
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
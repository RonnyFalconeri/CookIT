import * as React from 'react';
import { Text, StyleSheet } from 'react-native';


export default class Footer extends React.Component {
    render() {
        return (
            <Text style={styles.text}>
                © Falconeri, Topcuoglu
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        bottom: 5
    }
});


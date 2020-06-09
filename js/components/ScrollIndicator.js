import * as React from 'react';
import { View, StyleSheet } from 'react-native';


export default class ScrollIndicator extends React.Component {
    state = {
        items: 7 // amount of items in HomeScreen
    };

    render() {

        let indicators = [];
        for (let i = 0; i <= this.state.items - 1; i++) {
            if (i == this.props.index) {
                indicators.push(<View key={i} style={[{ backgroundColor: 'black' }, styles.circle]} />);
            } else {
                indicators.push(<View key={i} style={[{ backgroundColor: 'lightgrey' }, styles.circle]} />);
            }
        }

        return (
            <View style={styles.container}>
                {indicators}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 60,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 10,
        margin: 2
    }
});


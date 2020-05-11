import * as React from 'react';
import { TouchableOpacity, Image, StyleSheet, View, Text } from 'react-native';


export default class PortionAdjust extends React.Component {
    state = {
        portions: 1,
        ingredients: this.props.value
    };

    _incrementPortions() {
        let incrPortions = this.state.portions + 1;
        this.setState({ portions: incrPortions }, () => {
            this.props.onChange(this._multiplyAmount());
        });
    }


    _decrementPortions() {
        if (this.state.portions > 1) {
            let decrPortions = this.state.portions - 1;
            this.setState({ portions: decrPortions }, () => {
                this.props.onChange(this._multiplyAmount());
            });
        }
    }

    _multiplyAmount() {
        let k = this.state.portions;
        let ingredients = [];
        this.props.ingredients.forEach(row => {
            let amount = row.amount;
            let ingredient = row.ingredient;
            var num = amount.replace(/[^0-9]/g, '');
            let unit = amount.replace(/[0-9]/g, '');
            ingredients.push({ amount: (num * k) + unit, ingredient: ingredient });
        });

        return ingredients;
    }

    render() {
        return (

            <View style={styles.container}>
                <TouchableOpacity onPress={() => this._decrementPortions()}>
                    <Image
                        style={styles.decr}
                        source={require('../../assets/images/backButton.png')}
                    />
                </TouchableOpacity>

                <Text style={styles.label}>Portionen: {this.state.portions}</Text>

                <TouchableOpacity onPress={() => this._incrementPortions()}>
                    <Image
                        style={styles.incr}
                        source={require('../../assets/images/backButton.png')}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: 10
    },
    incr: {
        width: 23,
        height: 28,
        transform: [{ rotate: '180deg' }]
    },
    decr: {
        width: 23,
        height: 28
    },
    label: {
        fontSize: 19,
        width: 120,
        textAlign: 'center'
    }
});


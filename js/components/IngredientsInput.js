import * as React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

import AmountInput from '../components/AmountInput';
import IngredientInput from '../components/IngredientInput';

export default class IngredientsInput extends React.Component {
    state = {};

    componentDidMount() {

        this.setState({ ingredients: this.props.ingredient_list }, () => console.log(Array(this.state.ingredients)[0]));

    }

    _handleIngredientsInput(index, key, value) {
        // update ingredients in state.recipe
        if (key === 'amount') {
            this.setState(prevState => {
                let ingredients = { ...prevState.ingredients };
                ingredients[index] = {
                    amount: value,
                    ingredient: ingredients[index]['ingredient']
                };
                return { ingredients }
            }, () => this.props.onChange(this.state.ingredients));

        } else
            if (key === 'ingredient') {
                this.setState(prevState => {
                    let ingredients = { ...prevState.ingredients };
                    ingredients[index] = {
                        amount: ingredients[index]['amount'],
                        ingredient: value
                    };
                    return { ingredients }
                }, () => this.props.onChange(this.state.ingredients));
            }
    }

    render() {

        let ingredients = Array(this.props.ingredient_list).map((key, i) => {
            return (
                <View key={'view_' + i} style={{ flexDirection: 'row', padding: 0, margin: 0 }}>
                    <AmountInput
                        value={key.amount}
                        onChange={(value) => this._handleIngredientsInput(i, 'amount', value)}
                    />
                    <IngredientInput
                        value={key.ingredient}
                        onChange={(value) => this._handleIngredientsInput(i, 'ingredient', value)}
                    />
                </View>
            );
        });

        return (
            <View style={styles.container}>

                <Text style={styles.label}>Zutaten:</Text>

                <View style={styles.row}>
                    {ingredients}
                </View>

                <View style={styles.controls}>
                    <TouchableOpacity style={styles.delRow} onPress={() => console.log(Array(this.state.ingredients)[0])}>
                        <Text style={styles.addRow_label}>-</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.addRow}>
                        <Text style={styles.addRow_label}>+</Text>
                    </TouchableOpacity>
                </View>


            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 300,
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        padding: 10,
        marginVertical: 20
    },
    label: {
        fontSize: 20
    },
    row: {
        flexDirection: 'column',
        margin: 5
    },
    controls: {
        flexDirection: 'row',
        marginVertical: 10
    },
    addRow: {
        backgroundColor: '#93c47d',
        borderRadius: 50,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 5
    },
    addRow_label: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    delRow: {
        backgroundColor: '#d66060',
        borderRadius: 20,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 5,
    }
});

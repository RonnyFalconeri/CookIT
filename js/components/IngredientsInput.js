import * as React from 'react';
import * as Haptics from 'expo-haptics';
import { Text, StyleSheet, View, TouchableOpacity, ImageBackground } from 'react-native';

import AmountInput from '../components/AmountInput';
import IngredientInput from '../components/IngredientInput';


export default class IngredientsInput extends React.Component {
    state = {
        ingredients: [],
        delRowVisible: 'flex'
    };

    constructor(props) {
        super(props);
        let visible = 'none';
        if (props.ingredient_list.length > 1) {
            visible = 'flex';
        }

        this.state = {
            ingredients: props.ingredient_list,
            delRowVisible: visible
        };

    }


    _handleIngredientsInput(index, key, value) {
        // update ingredients in state.recipe
        if (key === 'amount') {
            this.setState(prevState => {
                let ingredients = [...prevState.ingredients];
                ingredients[index] = {
                    amount: value,
                    ingredient: ingredients[index]['ingredient']
                };
                return { ingredients }
            }, () => this.props.onChange(this.state.ingredients));

        } else
            if (key === 'ingredient') {
                this.setState(prevState => {
                    let ingredients = [...prevState.ingredients];
                    ingredients[index] = {
                        amount: ingredients[index]['amount'],
                        ingredient: value
                    };
                    return { ingredients }
                }, () => this.props.onChange(this.state.ingredients));
            }
    }

    _addIngredientRow() {
        this.setState(prevState => {
            let ingredients = [...prevState.ingredients];
            ingredients.push({ amount: '', ingredient: '' });
            return { ingredients }
        }, () => {
            this.props.onChange(this.state.ingredients);

            if (this.state.ingredients.length > 1) {
                this.setState({ delRowVisible: 'flex' });
            }
        });
    }

    _deleteIngredientRow() {
        if (this.state.ingredients.length > 1) {
            this.setState(prevState => {
                let ingredients = [...prevState.ingredients];
                ingredients.pop();
                return { ingredients }
            }, () => {
                this.props.onChange(this.state.ingredients);

                // if 1 row left -> hide delRow button
                if (this.state.ingredients.length == 1) {
                    this.setState({ delRowVisible: 'none' });
                }
            });
        }
    }

    render() {

        // render variable amount of rows
        let ingredients = this.state.ingredients.map((key, i) => {
            return (
                <View key={'view_' + i} style={styles.row}>
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

                <Text style={styles.label}>Zutaten</Text>

                <View style={styles.list}>
                    {ingredients}
                </View>

                <View style={styles.controls}>
                    <TouchableOpacity
                        style={[styles.delRow, { display: this.state.delRowVisible }]}
                        onPress={
                            () => {
                                this._deleteIngredientRow();
                                Haptics.impactAsync('light');
                            }
                        }
                    >
                        <ImageBackground
                            source={require('../../assets/images/deleteRowIcon.png')}
                            resizeMode="contain"
                            style={styles.backgroundImage}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.addRow}
                        onPress={
                            () => {
                                this._addIngredientRow();
                                Haptics.impactAsync('light');
                            }
                        }
                    >
                        <ImageBackground
                            source={require('../../assets/images/addRowIcon.png')}
                            resizeMode="contain"
                            style={styles.backgroundImage}
                        />
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
        marginBottom: 15
    },
    label: {
        fontSize: 23,
        fontWeight: 'bold'
    },
    list: {
        flexDirection: 'column',
        margin: 5
    },
    row: {
        flexDirection: 'row',
        padding: 0,
        margin: 0
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
    delRow: {
        backgroundColor: '#d66060',
        borderRadius: 20,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 5
    },
    backgroundImage: {
        height: '100%',
        width: '100%'
    }
});

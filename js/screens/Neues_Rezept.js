import * as React from 'react';
import { ScrollView, StyleSheet, Button } from 'react-native';

import TitleInput from '../components/TitleInput';
import ImageInput from '../components/ImageInput';
import DurationInput from '../components/DurationInput';
import NationalityInput from '../components/NationalityInput';
import IngredientsInput from '../components/IngredientsInput';
import AmountInput from '../components/AmountInput';
import IngredientInput from '../components/IngredientInput';
import PreparationInput from '../components/PreparationInput';


export default class Neues_Rezept extends React.Component {
    state = {
        recipe: {
            title: null,
            duration: null,
            nationality: 'none',
            ingredients: {
                amount: null,
                ingredient: null
            },
            preparation: null
        }
    };

    componentDidMount() {

        // change header title
        this.props.navigation.setOptions({ title: 'Neues Rezept' });
    }

    _saveRecipe = () => {
        // TODO: save recipe in DB
        console.log('saved: ');
        console.log(this.state.recipe);
    }

    _handleTitleInput(value) {
        // update title in state.recipe
        this.setState(prevState => {
            let recipe = { ...prevState.recipe };
            recipe['title'] = value;
            return { recipe }
        });
    }

    _handleDurationInput(value) {
        // update duration in state.recipe
        this.setState(prevState => {
            let recipe = { ...prevState.recipe };
            recipe['duration'] = value;
            return { recipe }
        });
    }

    _handleNationalityInput(value) {
        // update duration in state.recipe
        this.setState(prevState => {
            let recipe = { ...prevState.recipe };
            recipe['nationality'] = value;
            return { recipe }
        });
    }

    _handleIngredientsInput(prop, value) {
        // update ingredients in state.recipe
        if (prop === 'amount') {
            this.setState(prevState => ({
                recipe: {
                    ...prevState.recipe,
                    ingredients: {
                        ...prevState.recipe.ingredients,
                        amount: value
                    }
                }
            }));
        } else
            if (prop === 'ingredient') {
                this.setState(prevState => ({
                    recipe: {
                        ...prevState.recipe,
                        ingredients: {
                            ...prevState.recipe.ingredients,
                            ingredient: value
                        }
                    }
                }));
            }
    }

    _handleAmountInput(value) {
        // update amount in state.recipe
        this.setState(prevState => ({
            recipe: {
                ...prevState.recipe,
                ingredients: {
                    ...prevState.recipe.ingredients,
                    amount: value
                }
            }
        }));
    }

    _handleIngredientInput(value) {
        // update ingredient in state.recipe
        this.setState(prevState => ({
            recipe: {
                ...prevState.recipe,
                ingredients: {
                    ...prevState.recipe.ingredients,
                    ingredient: value
                }
            }
        }));
    }

    _handlePreparationInput(value) {
        // update preparation in state.recipe
        this.setState(prevState => {
            let recipe = { ...prevState.recipe };
            recipe['preparation'] = value;
            return { recipe }

        });
    }

    render() {

        return (
            <ScrollView contentContainerStyle={styles.container}>


                <ImageInput />

                <TitleInput
                    onChange={(value) => this._handleTitleInput(value)}
                />

                <DurationInput
                    onChange={(value) => this._handleDurationInput(value)}
                />

                <NationalityInput
                    selectedValue={this.state.recipe.nationality}
                    onChange={(Value) => this._handleNationalityInput(Value)}
                />

                <IngredientsInput>
                    <AmountInput
                        onChange={(value) => this._handleIngredientsInput('amount', value)}
                    />
                    <IngredientInput
                        onChange={(value) => this._handleIngredientsInput('ingredient', value)}
                    />
                </IngredientsInput>

                <PreparationInput
                    onChange={(value) => this._handlePreparationInput(value)}
                />

                <Button
                    title="Speichern"
                    onPress={this._saveRecipe}
                />

                <Button
                    title="Abbrechen"
                    onPress={this._saveRecipe}
                />


            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        alignItems: 'center'
    }
});
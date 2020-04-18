import * as React from 'react';
import { ScrollView, StyleSheet, Button, View } from 'react-native';

import TitleInput from '../components/TitleInput';
import ImageInput from '../components/ImageInput';
import DurationInput from '../components/DurationInput';
import NationalityInput from '../components/NationalityInput';
import IngredientsInput from '../components/IngredientsInput';
import PreparationInput from '../components/PreparationInput';


export default class Neues_Rezept extends React.Component {
    state = {
        recipe: {
            title: null,
            duration: null,
            nationality: 'none',
            ingredients: [
                { amount: '', ingredient: '' }
            ],
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
        console.log(this.state);
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
        // update nationality in state.recipe
        this.setState(prevState => {
            let recipe = { ...prevState.recipe };
            recipe['nationality'] = value;
            return { recipe }
        });
    }

    _handleIngredientsInput(ingredients) {
        // update ingredients in state.recipe
        this.setState(prevState => {
            let recipe = { ...prevState.recipe };
            recipe['ingredients'] = ingredients;
            return { recipe }
        });

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

                <IngredientsInput
                    ingredient_list={this.state.recipe.ingredients}
                    onChange={(ingredients) => this._handleIngredientsInput(ingredients)}
                />

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
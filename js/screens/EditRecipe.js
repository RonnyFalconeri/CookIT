import * as React from 'react';
import { ScrollView, StyleSheet, Button } from 'react-native';

import CustomFont from '../components/CustomFont';
import TitleInput from '../components/TitleInput';
import ImageInput from '../components/ImageInput';
import DurationInput from '../components/DurationInput';
import NationalityInput from '../components/NationalityInput';
import IngredientsInput from '../components/IngredientsInput';
import PreparationInput from '../components/PreparationInput';


export default class EditRecipe extends React.Component {
    state = {
        recipe: {
            image: null,
            title: '',
            duration: '',
            nationality: 'none',
            ingredients: [
                { amount: '', ingredient: '' }
            ],
            preparation: '',
            favorite: null
        }
    };


    componentWillMount() {

        // change header title
        this.props.navigation.setOptions({ title: <CustomFont>Rezept Bearbeiten</CustomFont> });
        this.setState({ recipe: this.props.route.params.recipe });
    }


    _saveRecipe = () => {
        // TODO: save recipe in DB
        this.props.navigation.navigate('Rezept', { recipe: this.state.recipe });
    }

    _handleImageInput(value) {
        // update title in state.recipe
        this.setState(prevState => {
            let recipe = { ...prevState.recipe };
            recipe['image'] = value;
            return { recipe }
        });
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


                <ImageInput
                    image={this.state.recipe.image}
                    onChange={(value) => this._handleImageInput(value)}
                />

                <TitleInput
                    value={this.state.recipe.title}
                    onChange={(value) => this._handleTitleInput(value)}
                />

                <DurationInput
                    value={this.state.recipe.duration}
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
                    value={this.state.recipe.preparation}
                    onChange={(value) => this._handlePreparationInput(value)}
                />

                <Button
                    title="Speichern"
                    onPress={() => this - this._saveRecipe()}
                />


            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingBottom: 40,
        alignItems: 'center'
    }
});
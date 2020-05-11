import * as React from 'react';
import { ScrollView, StyleSheet, Button, Alert } from 'react-native';

import CustomFont from '../components/CustomFont';
import TitleInput from '../components/TitleInput';
import ImageInput from '../components/ImageInput';
import DurationInput from '../components/DurationInput';
import NationalityInput from '../components/NationalityInput';
import IngredientsInput from '../components/IngredientsInput';
import PreparationInput from '../components/PreparationInput';
import AuthorInput from '../components/AuthorInput';


export default class EditRecipe extends React.Component {
    state = {
        recipe: {
            id: null,
            image: null,
            title: '',
            duration: '',
            nationality: 'none',
            ingredients: [
                { amount: '', ingredient: '' }
            ],
            preparation: '',
            favorite: null,
            author: '',
            createdAt: ''
        }
    };


    componentWillMount() {

        // change header title
        this.props.navigation.setOptions({ title: <CustomFont>Bearbeiten</CustomFont> });
        this.setState({ recipe: this.props.route.params.recipe });
    }


    _saveRecipe() {
        // validate inputs, check if empty
        let valid = true;
        if (
            this.state.recipe.title == '' ||
            this.state.recipe.duration == '' ||
            this.state.recipe.ingredients[0]['amount'] == '' ||
            this.state.recipe.ingredients[0]['ingredient'] == '' ||
            this.state.recipe.preparation == ''
        ) {
            valid = false;
        }

        if (valid) {
            // inputs are valid
            this._saveInDB();
            this.props.navigation.navigate('Recipe', { recipe: this.state.recipe });
        } else {
            // inputs are invalid
            Alert.alert('Leere Pflichtfelder', 'Bitte füllen Sie alle Pflichtfelder.')
        }
    }

    _saveInDB() {
        // TODO: save recipe in DB
        console.log('saving to DB...');
    }

    _deleteRecipe() {
        Alert.alert('Rezept löschen', 'Das Rezept wird unwiederruflich aus der Datenbank gelöscht. Möchten Sie fortfahren?', [
            { text: 'Löschen', style: 'destructive', onPress: () => this._deleteFromDB() },
            { text: 'Abbrechen', style: 'cancel' }
        ]);
    }

    _deleteFromDB() {
        // TODO: delete recipe from DB
        console.log('deleting from DB...');
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

    _handleAuthorInput(value) {
        // update preparation in state.recipe
        this.setState(prevState => {
            let recipe = { ...prevState.recipe };
            recipe['author'] = value;
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

                <AuthorInput
                    value={this.state.recipe.author}
                    onChange={(value) => this._handleAuthorInput(value)}
                />

                <Button
                    title="Speichern"
                    onPress={() => this._saveRecipe()}
                />

                <Button
                    title="Löschen"
                    onPress={() => this._deleteRecipe()}
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
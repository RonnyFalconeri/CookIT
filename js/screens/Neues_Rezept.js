import * as React from 'react';
import { Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, View, Picker, Button } from 'react-native';

import TitleInput from '../components/TitleInput';
import ImageInput from '../components/ImageInput';

export default class Neues_Rezept extends React.Component {
    state = {};

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
                    onChangeText={(value) => this._handleTitleInput(value)}
                />


                <View style={styles.durationInput}>
                    <Text style={styles.durationInput_label}>Dauer: </Text>
                    <TextInput
                        style={[styles.titleInput, { width: 50 }]}
                        keyboardType="number-pad"
                        onChangeText={(value) => this._handleDurationInput(value)}
                    />
                    <Text style={styles.durationInput_label}> Minuten</Text>
                </View>

                <View style={styles.nationalityInput}>
                    <Text style={styles.nationalityInput_label}>Nationalität: </Text>
                    <Picker
                        onValueChange={(Value) => this._handleNationalityInput(Value)}
                    >
                        <Picker.Item label="Keine" value="none" />
                        <Picker.Item label="Italienisch" value="ita" />
                        <Picker.Item label="Deutsch" value="deu" />
                        <Picker.Item label="Griechisch" value="gre" />
                        <Picker.Item label="Chinesisch" value="chi" />
                        <Picker.Item label="Türkisch" value="tur" />
                    </Picker>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 20 }}>Zutaten: </Text>
                    <View style={{ flexDirection: 'row', margin: 10 }}>
                        <TextInput
                            style={{ height: 40, borderBottomColor: 'black', borderBottomWidth: 1, fontSize: 20, margin: 10 }}
                            placeholder="Menge"
                            onChangeText={(value) => this._handleIngredientsInput('amount', value)}
                        />
                        <TextInput
                            style={{ height: 40, width: 100, borderBottomColor: 'black', borderBottomWidth: 1, fontSize: 20, margin: 10 }}
                            placeholder="Zutat"
                            onChangeText={(value) => this._handleIngredientsInput('ingredient', value)}
                        />
                    </View>
                    <TouchableOpacity style={{ backgroundColor: '#93c47d', borderRadius: 50, width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>+</Text>
                    </TouchableOpacity>
                </View>

                <TextInput
                    style={styles.preparationInput}
                    placeholder="Zubereitung"
                    multiline={true}
                    onChangeText={(value) => this._handlePreparationInput(value)}
                />

                <Button
                    title="Speichern"
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
    },
    durationInput: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20
    },
    durationInput_label: {
        fontSize: 20,
    },
    nationalityInput: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    nationalityInput_label: {
        fontSize: 20
    },
    preparationInput: {
        minHeight: 40,
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        fontSize: 20,
        margin: 10
    },
});
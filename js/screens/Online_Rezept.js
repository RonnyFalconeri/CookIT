import * as React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Separator from '../components/Separator';
import SaveButton from '../components/SaveButton';


export default class Online_Rezept extends React.Component {
    state = {
        recipe: {
            image: null,
            title: null,
            duration: null,
            nationality: 'none',
            ingredients: [
                { amount: '', ingredient: '' }
            ],
            preparation: null,
            favorite: null
        },
        image_default: require('../../assets/images/recipe_default_image.png')
    };


    componentDidMount() {

        // change header title
        this.props.navigation.setOptions({ title: 'Online-Rezept' });
        this.setState({ recipe: this.props.route.params.recipe });
    }

    componentWillReceiveProps(props) {
        this.setState({ recipe: props.route.params.recipe });
    }

    _saveRecipe() {
        // TODO: save recipe to DB
        console.log("recipe will be saved.");
    }


    render() {

        // render variable amount of rows
        let ingredients = this.state.recipe.ingredients.map((key, i) => {
            return (
                <View key={'view_' + i} style={styles.rowIngredients}>
                    <Text style={styles.amount}>{key.amount}</Text>
                    <Text style={styles.ingredient}>{key.ingredient}</Text>
                </View>
            );
        });

        // dependend on current shown image, render different image component with different source
        let recipeImage = Array(this.state).map(() => {
            if (this.state.recipe.image == null) {
                return (
                    <Image
                        key={'default'}
                        style={styles.image}
                        source={this.state.image_default}
                    />
                );
            } else {
                return (
                    <Image
                        key={'picked'}
                        style={styles.image}
                        source={{ uri: this.state.recipe.image }}
                    />
                );
            }
        });

        return (

            <ScrollView >
                <View style={styles.container}>

                    {recipeImage}

                    <View style={styles.containerTitle}>
                        <Text style={styles.title}>
                            {this.state.recipe.title}
                        </Text>

                        <SaveButton
                            onPress={() => this._saveRecipe()}
                        />
                    </View>



                    <View style={styles.containerDurationNationality}>
                        <Text style={styles.duration}>{this.state.recipe.duration} Min</Text>
                        <Text style={styles.separator}> | </Text>
                        <Text style={styles.nationality}>{this.state.recipe.nationality}</Text>
                    </View>

                    <Separator />

                    <View style={styles.containerIngredients}>
                        <Text style={styles.ingredients_label}>Zutaten</Text>
                        {ingredients}
                    </View>

                    <Separator />

                    <View style={styles.containerPreparation}>
                        <Text style={styles.preparation_label}>Zubereitung</Text>
                        <Text style={styles.preparation}>{this.state.recipe.preparation}</Text>
                    </View>


                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingBottom: 30
    },
    image: {
        height: 200,
        width: '100%',
        justifyContent: 'flex-start'
    },
    containerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        justifyContent: 'center'
    },
    title: {
        fontSize: 27,
        fontWeight: 'bold',
        margin: 20
    },
    containerDurationNationality: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    duration: {
        width: 100,
        fontSize: 18,
        paddingHorizontal: 20,
        textAlign: 'right'
    },
    separator: {
        width: 70,
        fontSize: 25,
        fontWeight: '300',
        textAlign: 'center'
    },
    nationality: {
        width: 100,
        fontSize: 20,
        paddingHorizontal: 20,
        textAlign: 'left'
    },
    containerIngredients: {
        flexDirection: 'column',
        width: '80%',
        backgroundColor: '#c3e9b1',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5
    },
    rowIngredients: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        padding: 3
    },
    ingredient: {
        maxWidth: 180,
        minWidth: 180,
        fontSize: 20,
        paddingHorizontal: 20
    },
    amount: {
        maxWidth: 120,
        minWidth: 120,
        fontSize: 20,
        paddingHorizontal: 20,
        textAlign: 'right'
    },
    ingredients_label: {
        fontSize: 23,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    containerPreparation: {
        flexDirection: 'column',
        width: '80%',
        marginVertical: 5
    },
    preparation_label: {
        fontSize: 23,
        alignSelf: 'center',
        color: '#93c47d',
        fontWeight: 'bold'
    },
    preparation: {
        flex: 1,
        padding: 5,
        fontSize: 18,
        textAlign: 'center'
    }
});
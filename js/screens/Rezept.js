import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


export default class Rezept extends React.Component {
    state = {
        recipe: {
            image: null,
            title: null,
            duration: null,
            nationality: 'none',
            ingredients: [
                { amount: '', ingredient: '' }
            ],
            preparation: null
        },
        image_default: require('../../assets/images/recipe_default_image.png')
    };

    componentDidMount() {

        // change header title
        this.props.navigation.setOptions({ title: 'Rezept' });
        this.setState({ recipe: this.props.route.params.recipe });

        if (this.props.route.params.recipe.image == null) {
            this.setState(prevState => {
                let recipe = { ...prevState.recipe };
                recipe['image'] = this.state.image_default;
                return { recipe }
            }, () => console.log(this.state.recipe));
        }
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

        return (
            <View style={styles.container}>

                <Image
                    style={styles.image}
                    source={this.state.recipe.image}
                />

                <Text style={styles.title}>
                    {this.state.recipe.title}
                </Text>

                <View style={styles.containerDurationNationality}>
                    <Text>
                        <Text style={styles.duration}>{this.state.recipe.duration}</Text>
                        <Text style={styles.separator}> | </Text>
                        <Text style={styles.nationality}>{this.state.recipe.nationality}</Text>
                    </Text>
                </View>

                <View style={styles.containerIngredients}>
                    <Text style={styles.ingredients_label}>Zutaten</Text>
                    {ingredients}
                </View>

                <View style={styles.containerPreparation}>
                    <Text style={styles.preparation_label}>Zubereitung</Text>
                    <Text style={styles.preparation}>{this.state.recipe.preparation}</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    image: {
        height: 200,
        width: '100%',
        justifyContent: 'flex-start'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 20
    },
    containerDurationNationality: {
        flexDirection: 'row',
        margin: 10
    },
    duration: {
        maxWidth: 50,
        minWidth: 50,
        fontSize: 20,
        paddingHorizontal: 20
    },
    separator: {
        fontSize: 25,
        fontWeight: '300'
    },
    nationality: {
        maxWidth: 50,
        minWidth: 50,
        fontSize: 20,
        paddingHorizontal: 20
    },
    containerIngredients: {
        flexDirection: 'column',
        width: '80%',
        backgroundColor: '#c3e9b1',
        borderRadius: 10,
        padding: 10,
        marginTop: 10
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
        flexDirection: 'column', width: '80%',
        padding: 10,
        marginVertical: 20
    },
    preparation_label: {
        fontSize: 23,
        alignSelf: 'center',
        color: '#93c47d',
        fontWeight: 'bold'
    },
    preparation: {
        padding: 5,
        fontSize: 18
    }
});
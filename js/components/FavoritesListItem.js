import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image, View } from 'react-native';


export default class FavoritesListItem extends React.Component {
    state = {
        image_default: require('../../assets/images/defaultRecipeImage.png'),
        image_delivered: null,
        image_show: null,
        fav: require('../../assets/images/addFavoriteIcon2.png')
    };

    componentDidMount() {
        if (this.props.image == null) {
            this.setState({ image_show: this.state.image_default });
        } else {
            this.setState({ image_show: this.props.image });
        }
    }

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                <Image style={styles.image} source={this.state.image_show} />
                <Text style={styles.title} >{this.props.title}</Text>
                <View style={styles.column}>
                    <Text style={styles.duration}>{this.props.duration} Min</Text>
                    <Text style={styles.nationality}>{this.props.nationality}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#8e7cc3',
        padding: 20,
        marginTop: 15,
        marginBottom: 15,
        width: '90%',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    column: {
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        width: 170,
        textAlign: 'center'
    },
    image: {
        width: 90,
        height: 60,
        borderWidth: 1,
        borderRadius: 2
    },
    fav_image: { width: 40, height: 40, position: 'absolute', top: 50, left: 85 },
    duration: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        paddingBottom: 10
    },
    nationality: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    }
});
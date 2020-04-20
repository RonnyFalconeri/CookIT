import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image, View } from 'react-native';


export default class Rezepte_ListItem extends React.Component {
    state = {
        image_default: require('../../assets/images/recipe_default_image.png'),
        image_delivered: null,
        image_show: null
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
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.duration}>{this.props.duration}</Text>
                    <Text style={styles.nationality}>{this.props.nationality}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#6d9eeb',
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
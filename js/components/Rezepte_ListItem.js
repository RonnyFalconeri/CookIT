import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image, View } from 'react-native';


export default class Rezepte_ListItem extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.listItem_container} onPress={this.props.onPress}>
                <Image style={styles.listItem_image} source={this.props.image} />
                <Text style={styles.listItem_title} >{this.props.title}</Text>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.listItem_duration}>{this.props.duration}</Text>
                    <Text style={styles.listItem_nationality}>{this.props.nationality}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    listItem_container: {
        alignItems: 'center',
        backgroundColor: '#03a5fc',
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
    listItem_title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        width: 170,
        textAlign: 'center'
    },
    listItem_image: {
        width: 90,
        height: 70,
        borderWidth: 1,
        borderRadius: 2
    },
    listItem_duration: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        paddingBottom: 10
    },
    listItem_nationality: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    }
});
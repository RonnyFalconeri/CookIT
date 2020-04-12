import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


export default class ListItem extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.listItem} onPress={this.props.onPress}>
                <Image style={styles.listItem_Image} source={require('../../assets/icon.png')} />
                <Text style={styles.listItem_Text} >Spaghetti Bolognese</Text>
                <Text style={styles.listItem_Duration}>14 Min</Text>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    listItem: {
        alignItems: 'center',
        backgroundColor: '#03a5fc',
        padding: 20,
        marginTop: 15,
        marginBottom: 15,
        width: '90%',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    listItem_Text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        width: 120,
        textAlign: 'center'
    },
    listItem_Image: {
        width: 90,
        height: 70,
        borderWidth: 1,
    },
    listItem_Duration: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
    }
});
import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';


export default class HomeScreenListItem extends React.Component {
    render() {
        return (
            <TouchableOpacity
                style={[styles.listItem, { backgroundColor: this.props.color }]}
                onPress={this.props.onPress}
            >
                <ImageBackground
                    source={this.props.image}
                    resizeMode="cover"
                    style={styles.backgroundImage}
                    imageStyle={styles.backgroundImage_style}
                />
                <View>
                    <Text style={styles.listItem_label}>{this.props.title}</Text>
                </View>

            </TouchableOpacity >
        );
    }
}

const styles = StyleSheet.create({
    listItem: {
        position: 'relative',
        height: '85%',
        width: 300,
        borderRadius: 20,
        margin: 20,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    listItem_label: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        padding: 10
    },
    backgroundImage: {
        height: '100%',
        width: 300,
        opacity: 0.3,
        position: 'absolute'
    },
    backgroundImage_style: {
        borderRadius: 20
    }

});
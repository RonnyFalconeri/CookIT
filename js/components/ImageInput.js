import * as React from 'react';
import { TouchableOpacity, StyleSheet, Alert, ImageBackground, View, Image } from 'react-native';


export default class ImageInput extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.recipeImage}>
                    <Image
                        style={styles.recipeImage_style}
                        source={require('../../assets/images/recipe_default_image.png')}
                    />
                </View>


                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                        Alert.alert('Foto hochladen', '', [
                            { text: 'Aus Galerie auswählen' },
                            { text: 'Bild aufnehmen' },
                            { text: 'Bild entfernen', style: 'destructive' },
                            { text: 'Abbrechen', style: 'cancel' }
                        ])
                    }
                >
                    <ImageBackground
                        source={require('../../assets/images/camera_icon.png')}
                        resizeMode="cover"
                        style={styles.cameraImage}
                        imageStyle={styles.cameraImage_style}
                    />
                </TouchableOpacity>

            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        height: 230
    },
    recipeImage: {
        borderWidth: 10,
        borderColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    recipeImage_style: {
        width: 300,
        height: 180
    },
    button: {
        width: 60,
        height: 60,
        backgroundColor: '#93c47d',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        bottom: 40,
        right: -12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    cameraImage: {
        width: 50,
        height: 30
    },
    cameraImage_style: {
        borderRadius: 1,
        width: 50,
        height: 30
    }
});

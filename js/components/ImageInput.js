import * as React from 'react';
import { TouchableOpacity, StyleSheet, Alert, ImageBackground, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


export default class ImageInput extends React.Component {
    state = {
        image_default: require('../../assets/images/recipe_default_image.png'),
        image_delivered: null,
        image_picked: null,
        image_show: null
    };

    componentDidMount() {

        this.getPermissionAsync();

        // if no image delivered as parameter -> show default image
        this.setState({ image_delivered: this.props.image }, () => {
            if (this.state.image_delivered != null) {
                this.setState({ image_show: this.props.image });
            } else {
                this.setState({ image_show: this.state.image_default });
            }
        });


    }


    getPermissionAsync = async () => {
        // get permissions for camera and camera roll
        const { status, expires, permissions } = await Permissions.getAsync(
            Permissions.CAMERA,
            Permissions.CAMERA_ROLL
        );
        if (status !== 'granted') {
            alert('Hey! You have not enabled selected permissions');
        }
    };

    _deleteImage() {
        this.setState({
            image_picked: null,
            image_delivered: null,
            image_show: this.state.image_default,
        }, () => this.props.onChange(null));
    }

    _takeImage = async () => {
        // opens camera for taking a picture
        try {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [16, 9],
                quality: 1,
            });

            if (!result.cancelled) {
                this.setState({
                    image_picked: result.uri
                }, () => this.props.onChange(this.state.image_picked));
            }

            console.log(result);
        } catch (E) {
            console.log(E);
        }
    };

    _pickImage = async () => {
        // shows images from camera roll to select
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [16, 9],
                quality: 1,
            });
            if (!result.cancelled) {
                this.setState({
                    image_picked: result.uri
                }, () => this.props.onChange(this.state.image_picked));
            }

            // CameraRoll.saveToCameraRoll(this.state.image);
            console.log(result);
        } catch (E) {
            console.log(E);
        }
    };


    render() {

        // dependend on current shown image, render different image component with different source
        let recipeImage = Array(this.state).map(() => {
            if (this.state.image_picked == null) {

                if (this.state.image_delivered != null) {
                    return (
                        <Image
                            key={'delivered'}
                            style={styles.recipeImage_style}
                            source={{ uri: this.state.image_delivered }}
                        />
                    );
                }

                return (
                    <Image
                        key={'default'}
                        style={styles.recipeImage_style}
                        source={this.state.image_show}
                    />
                );

            } else {
                return (
                    <Image
                        key={'picked'}
                        style={styles.recipeImage_style}
                        source={{ uri: this.state.image_picked }}
                    />
                );
            }
        });

        return (
            <View style={styles.container}>

                <View style={styles.recipeImage}>
                    {recipeImage}
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() =>
                        Alert.alert('Bild hochladen', '', [
                            { text: 'Kamera', onPress: () => this._takeImage() },
                            { text: 'Aus Galerie', onPress: () => this._pickImage() },
                            { text: 'Bild entfernen', style: 'destructive', onPress: () => this._deleteImage() },
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

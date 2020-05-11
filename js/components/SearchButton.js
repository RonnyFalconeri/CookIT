import * as React from 'react';
import { TouchableOpacity, StyleSheet, Image, View, Modal, Text, Button } from 'react-native';

import CustomFont from '../components/CustomFont';


export default class SearchButton extends React.Component {
    state = {
        modalVisible: false
    };

    render() {
        return (
            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.setState({ modalVisible: true })}
                >
                    <Image
                        style={styles.image}
                        source={require('../../assets/images/searchIcon.png')}
                    />
                </TouchableOpacity>

                <Modal
                    visible={this.state.modalVisible}
                    animationType="slide"
                >
                    <View style={{ padding: 30, paddingTop: 50 }}>
                        <View>
                            <Text style={{ fontSize: 45, alignSelf: 'center' }}><CustomFont>Liste Filtern</CustomFont></Text>
                            <Image
                                style={styles.headerImage}
                                source={require('../../assets/icon.png')}
                            />
                        </View>

                        <Button title="close" onPress={() => this.setState({ modalVisible: false })} />
                    </View>
                </Modal>

            </View>

        );
    }
}


const styles = StyleSheet.create({
    button: {
        height: 64,
        width: 64,
        padding: 7,
        borderRadius: 40,
        backgroundColor: 'orange',
        position: 'absolute',
        bottom: 30,
        right: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },
    image: {
        height: 50,
        width: 50
    },
    headerImage: {
        position: 'absolute',
        height: 450,
        width: 450,
        top: -130,
        left: -120,
        opacity: 0.2
    }
});

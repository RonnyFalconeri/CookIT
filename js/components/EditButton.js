import * as React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';


export default class EditButton extends React.Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
            >
                <Image
                    style={styles.image}
                    source={require('../../assets/images/editIcon.png')}
                />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 30,
        height: 30
    }
});


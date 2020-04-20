import * as React from 'react';
import { TouchableOpacity, Image } from 'react-native';


export default class AddFavoriteButton extends React.Component {
    state = {
        fav: require('../../assets/images/addFavoriteIcon2.png'),
        no_fav: require('../../assets/images/addFavoriteIcon1.png')
    };

    render() {
        return (

            <TouchableOpacity
                style={{ position: 'absolute', top: 17, left: 20 }}
                onPress={this.props.onPress}
            >
                <Image
                    style={{ width: 50, height: 50 }}
                    source={this.state.no_fav}
                />
            </TouchableOpacity>
        );
    }
}


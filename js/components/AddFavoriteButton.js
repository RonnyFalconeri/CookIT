import * as React from 'react';
import { TouchableOpacity, Image } from 'react-native';


export default class AddFavoriteButton extends React.Component {
    state = {
        fav: require('../../assets/images/addFavoriteIcon2.png'),
        no_fav: require('../../assets/images/addFavoriteIcon1.png')
    };

    componentDidMount() {
        this.setState({ show: this.props.favorite });
    }

    render() {

        let image = Array(this.state).map(() => {
            if (this.props.favorite) {
                return (
                    <Image
                        key={'fav'}
                        style={{ width: 50, height: 50 }}
                        source={this.state.fav}
                    />
                );
            } else {
                return (
                    <Image
                        key={'no_fav'}
                        style={{ width: 50, height: 50 }}
                        source={this.state.no_fav}
                    />
                );
            }
        });

        return (

            <TouchableOpacity
                style={{ position: 'absolute', top: 17, left: 20 }}
                onPress={this.props.onPress}
            >
                {image}
            </TouchableOpacity>
        );
    }
}


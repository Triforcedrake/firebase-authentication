//Test of google maps Api implementation
import React, { Component } from 'react';
import { View, ActivityIndicator} from 'react-native';
import MapView from 'react-native-maps';

export default class MapScreen extends Component {

    static navigationOptions() {
        return {
        title: "Map",
        headerRight: <View />
        };
    };
    render() {
        return (
            <View style={styles.mapContainer}>
                <MapView style={styles.map}
                    region={{
                        latitude: 55.396229,
                        longitude: 10.390600,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1,              
                    }}
                >
                    <MapView.Marker 
                        coordinate={{
                            latitude: 55.396229,
                            longitude: 10.390600,
                        }}
                        title={'Home'}
                        description={'My home town'}
                    />
                </MapView>            
            </View>
        )

    }
    
}

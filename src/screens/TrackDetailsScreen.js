<<<<<<< HEAD
import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailsScreen = ({ route, navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext);
    const _id = route.params?._id;

    // Log data for debugging
    console.log('TrackDetailsScreen - ID from params:', _id);
    console.log('TrackDetailsScreen - Full state:', JSON.stringify(state));

    // Fetch tracks when component mounts - important to ensure we have the latest data
    useEffect(() => {
        const loadData = async () => {
            console.log('Fetching tracks...');
            await fetchTracks();
            console.log('Tracks fetched, state updated');
        };
        
        loadData();
    }, []);

    // Find the track in state
    const track = Array.isArray(state) ? state.find(t => t._id === _id) : null;
    console.log('Found track:', track ? JSON.stringify(track) : 'Not found');

    // If no track is found, show debug info and retry button
    if (!track) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.header}>Track Not Found</Text>
                
                <View style={styles.debugSection}>
                    <Text style={styles.debugHeader}>Debug Information:</Text>
                    <Text>Track ID searched for: {_id || 'undefined'}</Text>
                    <Text>Number of tracks in state: {Array.isArray(state) ? state.length : 'State is not an array'}</Text>
                    
                    {Array.isArray(state) && state.length > 0 && (
                        <View style={styles.availableTracks}>
                            <Text style={styles.debugHeader}>Available Track IDs:</Text>
                            {state.map((t, i) => (
                                <Text key={i}>
                                    {i+1}. ID: {t._id || 'no id'} - Name: {t.name || 'no name'}
                                </Text>
                            ))}
                        </View>
                    )}
                </View>
                
                <Button 
                    title="Refresh Tracks" 
                    onPress={fetchTracks} 
                    color="#007BFF"
                />
            </SafeAreaView>
        );
    }

    // Safety check for locations and first location's coordinates
    if (!track.locations || 
        !Array.isArray(track.locations) || 
        track.locations.length === 0 ||
        !track.locations[0].coords ||
        typeof track.locations[0].coords.latitude === 'undefined' ||
        typeof track.locations[0].coords.longitude === 'undefined') {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.trackName}>{track.name}</Text>
                <Text style={styles.warningText}>This track has invalid or missing location data.</Text>
                <Text style={styles.debugText}>
                    Track data: {JSON.stringify(track)}
                </Text>
            </SafeAreaView>
        );
    }

    // Get initial coordinates for the map
    const initialCoords = track.locations[0].coords;
    const finalCoords = track.locations[track.locations.length - 1].coords;
    
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.trackName}>{track.name}</Text>
            <Text style={styles.infoText}>
                {track.locations.length} location points recorded
            </Text>
            
            <MapView
                initialRegion={{
                    latitude: initialCoords.latitude,
                    longitude: initialCoords.longitude,
                    longitudeDelta: 0.01,
                    latitudeDelta: 0.01
                }}
                region={{
                    ...initialCoords,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                  }}
                style={styles.map}
            >
                <Polyline 
                    coordinates={track.locations.map(loc => loc.coords)}
                    strokeWidth={3}
                    strokeColor="#0066FF" 
                />
            </MapView>
            
            <View style={styles.infoBox}>
                <Text style={styles.infoLabel}>Start point:</Text>
                <Text>
                    Lat: {initialCoords.latitude.toFixed(4)}, 
                    Lng: {initialCoords.longitude.toFixed(4)}
                </Text>
                
                <Text style={styles.infoLabel}>End point:</Text>
                <Text>
                    Lat: {finalCoords.latitude.toFixed(4)}, 
                    Lng: {finalCoords.longitude.toFixed(4)}
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginVertical: 15
    },
    trackName: {
        fontSize: 22,
        fontWeight: '500',
        color: '#2c3e50',
        textAlign: 'center',
        marginBottom: 10
    },
    map: {
        width: '100%',
        height: 350,
        marginVertical: 15,
        borderRadius: 8
    },
    infoText: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginBottom: 15
    },
    warningText: {
        fontSize: 16,
        color: 'orange',
        textAlign: 'center',
        marginVertical: 20
    },
    debugText: {
        fontSize: 12,
        color: '#999',
        margin: 10,
        padding: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 5
    },
    debugHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10
    },
    debugSection: {
        marginVertical: 20,
        padding: 15,
        backgroundColor: '#f8f9fa',
        borderRadius: 8
    },
    availableTracks: {
        marginTop: 10
    },
    infoBox: {
        width: '100%',
        backgroundColor: '#f5f5f5',
        padding: 15,
        borderRadius: 8,
        marginTop: 10
    },
    infoLabel: {
        fontWeight: 'bold',
        marginTop: 8,
        marginBottom: 3
    }
});

export default TrackDetailsScreen;
=======
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TrackDetailsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Track Details Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
})

export default TrackDetailsScreen;
>>>>>>> e291a27c1a827b8dc5395918e939590bdb040d0b

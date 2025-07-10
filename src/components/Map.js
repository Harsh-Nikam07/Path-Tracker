import { StyleSheet, View, Text } from 'react-native';
import React, { useContext } from 'react';
import MapView, { Polyline, Circle } from 'react-native-maps'; 
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
  const { state: { currentLocation, locations } } = useContext(LocationContext);

  if (!currentLocation) {
    return <Text>Waiting for location</Text>;
  }

  console.log("Current Location:", currentLocation);
  console.log("Tracked Locations:", locations);

  return (
    <>
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        region={{
          ...currentLocation.coords,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        }}
      >
        {/* Current Location Marker */}
        <Circle
          center={currentLocation.coords}
          radius={2}
          strokeColor="rgba(0, 0, 0, 1.0)"
          fillColor="red"
        />

        {/* Ensure Polyline is only rendered when there are at least 2 points */}
        {locations.length > 1 && (
          <Polyline
            coordinates={locations.map(loc => loc.coords)}
            strokeColor="blue" // Fully visible blue color
            strokeWidth={6} // Thicker line for better visibility
          />
        )}
      </MapView>
    </>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: 300,
  },
});

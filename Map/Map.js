import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

function GameMap() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 45.815279, // Latitude de l'adresse spécifique
          longitude: 4.908273, // Longitude de l'adresse spécifique
          latitudeDelta: 0.01, // Zoom initial sur la latitude
          longitudeDelta: 0.01, // Zoom initial sur la longitude
        }}
      >
        {/* Ajouter un marqueur pour l'adresse spécifique */}
        <Marker
          coordinate={{ latitude: 45.815279, longitude: 4.908273 }}
          title="LES PAVILLONS DE SERMENAZ"
          description="2507 AVENUE DE L'EUROPE 69140 RILLIEUX-LA-PAPE"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default GameMap;

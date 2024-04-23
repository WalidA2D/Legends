import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../colors'; 

function Character() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!selectedCharacter) {
      fetch('http://api-fantasygame.eu-4.evennode.com/get-characters')
        .then(response => response.json())
        .then(data => {
          setCharacters(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error:', error);
          setLoading(false);
        });
    }
  }, [selectedCharacter]);

  const selectCharacter = characterId => {
    setLoading(true);
    fetch(`http://api-fantasygame.eu-4.evennode.com/get-character/${characterId}`)
      .then(response => response.json())
      .then(data => {
        setSelectedCharacter(data);
        setImageLoaded(false); 
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  };

  const handleBack = () => {
    setSelectedCharacter(null);
    setImageLoaded(false);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.mysticBlue} />
      </View>
    );
  }

  if (selectedCharacter) {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
          <Text style={styles.backButtonText}>Retour</Text>
        </TouchableOpacity>
        <View style={styles.characterDetailContainer}>
          <TouchableOpacity >
            <Image
              source={{ uri: selectedCharacter.img }}
              style={styles.characterImage}
              onLoad={() => setImageLoaded(true)}
            />
          </TouchableOpacity>
          {imageLoaded && (
            <View style={styles.detailTextContainer}>
              <Text style={styles.characterName}>{selectedCharacter.name}</Text>
              <Text style={styles.characterDescription}>{selectedCharacter.description}</Text>
              <Text style={styles.characterRarity}>Rareté : {selectedCharacter.rarity}/5</Text>
              <Text style={styles.characterStats}>HP: {selectedCharacter.hp}</Text>
              <Text style={styles.characterStats}>Attaque : {selectedCharacter.attack_points}</Text>
              <Text style={styles.characterStats}>Attaque principale : {selectedCharacter.main_attack}</Text>
            </View>
          )}
        </View>
      </View>
    );
  }
  

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => selectCharacter(item.id)}>
            <View style={styles.characterCard}>
              <Text style={styles.characterName}>{item.name}</Text>
              <Text style={styles.characterDescription}>{item.description}</Text>
              <Text style={styles.characterRarity}>Rareté : {item.rarity}/5</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: Colors.mysticBlue, 
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  backButtonText: {
    color: 'white',
    marginLeft: 5,
  },
  characterDetailContainer: {
    flex: 1,
    backgroundColor: Colors.silverGray, 
  },
  detailTextContainer: {
    padding: 20,
  },
  characterCard: {
    backgroundColor: Colors.silverGray, 
    borderRadius: 5,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  characterName: {
    fontSize: 18,
    color: Colors.mysticBlue,
  },
  characterDescription: {
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
    color: "black",
  },
  characterRarity: {
    fontSize: 14,
    fontStyle: 'italic',
    color: "black",
  },
  characterStats: {
    fontSize: 14,
    marginTop: 4,
    color: "black",
  },
  characterImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
});

export default Character;

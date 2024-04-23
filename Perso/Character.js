import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (selectedCharacter) {
    return (
      <View style={styles.container}>
        <View style={styles.characterDetailContainer}>
            <TouchableOpacity onPress={handleBack} >
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
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        backgroundColor: '#6441A5', 
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
    container: {
      flex: 1,
      paddingTop: 22
    },
    characterDetailContainer: {
      flex: 1,
      backgroundColor: '#f9f9f9',
    },
    detailTextContainer: {
      padding: 20,
    },
    characterCard: {
      backgroundColor: '#f9f9f9',
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
      fontWeight: 'bold',
    },
    characterDescription: {
      fontSize: 14,
      marginTop: 5,
      marginBottom: 5,
    },
    characterRarity: {
      fontSize: 12,
      fontStyle: 'italic',
    },
    characterStats: {
      fontSize: 14,
      marginTop: 4,
    },
    characterImage: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
    },
    backButton: {
      padding: 10,
      margin: 10,
      backgroundColor: '#ddd',
      alignSelf: 'flex-start',
    },
  });  

export default Character;

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Colors } from '../colors'; 

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={[styles.title, { color: Colors.mysticBlue }]}>Legends of Xefi</Text>
        <View style={styles.contentContainer}>
          <View style={styles.textView}>
            <Text style={[styles.subtitle, { color: Colors.mysticBlue }]}>Bienvenue dans les Terres de Xefi</Text>
            <Text style={[styles.paragraph, { color: Colors.black }]}>
              Plongez dans le monde enchanté de Legends of Xefi, un jeu de rôle épique qui vous emmène au cœur d'une saga héroïque où le destin de nombreux royaumes est en jeu. 
              Dans ce monde peuplé de créatures mythiques, de guerriers valeureux et de magiciens aux pouvoirs incommensurables, chaque choix que vous faites peut changer le cours de l'histoire.
            </Text>
            <Text style={[styles.subtitle, { color: Colors.mysticBlue }]}>
              Explorez des Paysages Envoûtants
            </Text>
            <Text style={[styles.paragraph, { color: Colors.black }]}>
              Voyagez à travers des forêts ancestrales, des montagnes interdites et des royaumes souterrains oubliés. 
              Chaque région de Xefi offre ses propres défis et ses secrets à découvrir. Les graphismes somptueux et les environnements immersifs vous transportent dans un univers où la beauté se mêle au danger.
            </Text>
            <Text style={[styles.subtitle, { color: Colors.mysticBlue }]}>
              Rencontrez des Personnages Inoubliables
            </Text>
            <Text style={[styles.paragraph, { color: Colors.black }]}>
              Xefi est peuplée de personnages complexes dotés de leurs propres histoires et motivations. 
              Forgez des alliances ou rivalisez avec des héros et des antagonistes qui ne sont pas toujours ce qu'ils semblent être. 
              Votre capacité à interagir avec ces personnages déterminera votre capacité à réussir dans les quêtes et à influencer le monde autour de vous.
            </Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  scrollView: {
    width: '100%',
    padding: 20,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.silverGray,
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  textView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    marginTop: 12,
    marginBottom: 6,
  },
  paragraph: {
    fontSize: 14,
    textAlign: 'justify',
    marginBottom: 12,
  },
});

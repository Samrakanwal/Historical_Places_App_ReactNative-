import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './DetailScreenStyles';

const DetailScreen = ({ route, navigation }) => {
  
  const { place } = route.params;

  return (
    <View style={styles.container}>
     
      <Image source={{ uri: place.image }} style={styles.placeImage} />

     
      <View style={styles.infoContainer}>
        <Text
         style={styles.placeName}>{place.name}</Text>
           <Text style={styles.placeLocation}>📍 {place.description}</Text>
        <Text style={styles.placeRating}>⭐ ⭐ ⭐ ⭐ ⭐ {place.rating}</Text>

      
        <Text style={styles.sectionTitle}>Description</Text>
           <Text style={styles.description}>The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe.</Text>

        <View style={styles.footer}>
          <View 
          style={styles.priceContainer}>
               <Text style={styles.price}>$70/Person</Text>
          </View>
          <TouchableOpacity 
          style={styles.bookButton}>
                <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};



export default DetailScreen;

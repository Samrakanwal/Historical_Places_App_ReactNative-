import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './SplashScreenStyles';

const SplashScreen = ({ navigation }) => {
  return (

    <ImageBackground
      source={{ uri: 'https://im.whatshot.in/img/2024/Feb/cover-1706768587.jpg' }}  
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Historical Places</Text>
        
         <Text style={styles.subtitle}>Historical Places of the World</Text>

      
        <TouchableOpacity
          style={styles.exploreButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.exploreButtonText}>Explore</Text>
       
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};



export default SplashScreen;

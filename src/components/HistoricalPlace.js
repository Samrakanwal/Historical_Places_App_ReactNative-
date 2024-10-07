import React from 'react';
import { View, Text, Image, Button } from 'react-native';

const HistoricalPlace = ({ place, onVisit, onUnvisit, visited }) => {
  return (
    <View>
      <Image 
      source={{ uri: place.image }} />
      <Text>{place.name}</Text>
      <Text>{place.description}</Text>

      {visited ? (
        <Button title="Unmark Visited" 
        onPress={() => onUnvisit(place)} />
        ) : 
      (
        <Button title="Mark as Visited" 
        onPress={() => onVisit(place)} />
      )}
      
    </View>
  );
};

export default HistoricalPlace;

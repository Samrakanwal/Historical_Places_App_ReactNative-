import React, { useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPlaces, markPlaceVisited, unmarkPlaceVisited } from '../../redux/actions/placeActions';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './HomeScreenStyles';

const HomeScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const historicalPlaces = useSelector(state => state.places.historicalPlaces);
  const suggestedPlaces = useSelector(state => state.places.suggestedPlaces);
  const visitedPlaces = useSelector(state => state.places.visitedPlaces);

  useEffect(() => {
    dispatch(fetchPlaces());
  }, [dispatch]);

  const isVisited = (placeId) => visitedPlaces.some(visited => visited.id === placeId);

  const toggleVisited = (place) => {
    if (isVisited(place.id)) {
     
      dispatch(unmarkPlaceVisited(place));
    } else {
     
      dispatch(markPlaceVisited(place));
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ 
            uri: 'https://mrwallpaper.com/images/thumbnail/cute-brunette-profile-picture-rawnnhmrk168c9zk.webp' }}  // Replace with a profile image URL
          style={styles.profileImage}
        />
        <Text style={styles.greeting}>Hi, Samra</Text>
        <TouchableOpacity style={styles.bellIcon}>
          <Image 
          source={{ uri: 'https://cdn-icons-png.freepik.com/512/13136/13136422.png' }}
           style={styles.icon} />
        </TouchableOpacity>
      </View>

    
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search Destination"
          style={styles.searchInput}
        />
      </View>

     
      <View style={styles.tabs}>
        <Text style={styles.tab}>All</Text>
        <Text style={styles.tabActive}>Popular</Text>
           <Text style={styles.tab}>Top Visited</Text>
        <Text style={styles.tab}>Nearby</Text>
      </View>

      <ScrollView>
       
        <Text style={styles.sectionTitle}>Historical Places</Text>

        <FlatList
          data={historicalPlaces}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            
            <TouchableOpacity
            onPress={() => navigation.navigate('Detail', { place: item })} 
          >
            <View style={[styles.card, isVisited(item.id) && styles.visitedCard]}>
              <Image source={{ uri: item.image }} style={styles.placeImage} />
              <Text style={styles.placeName}>{item.name}</Text>
              <Text style={styles.placeLocation}>{item.description}</Text>
              <Text style={styles.placeRating}>⭐ ⭐ ⭐ ⭐ ⭐  {item.rating}</Text>

            
              <TouchableOpacity
                style={styles.visitedButton}
                onPress={() => toggleVisited(item)}
              >
                <Text style={styles.visitedButtonText}>
                  {isVisited(item.id) ? 'Unmark Visited' : 'Mark as Visited'}
                </Text>
              </TouchableOpacity>
            </View></TouchableOpacity>
          )}
          horizontal={true}  
          showsHorizontalScrollIndicator={false}
          style={styles.flatList}
        />

      
        <Text style={styles.sectionTitle}>Suggested Places</Text>
        <FlatList
               data={suggestedPlaces}  
             keyExtractor={item => item.id.toString()}
             renderItem={({ item }) => (
            <View style={styles.suggestedCard}>

              <Image source={{ uri: item.image }} style={styles.suggestedPlaceImage} />
              <Text style={styles.suggestedPlaceName}>{item.name}</Text>
              <Text style={styles.suggestedPlaceLocation}>{item.description}</Text>
              <Text style={styles.suggestedPlaceRating}>⭐ ⭐ ⭐ {item.rating}</Text>

            </View>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
         
          style={styles.flatList}
        />
      </ScrollView>
    </View>
  );
};



export default HomeScreen;

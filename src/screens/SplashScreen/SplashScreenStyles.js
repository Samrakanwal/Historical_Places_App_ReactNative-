import { View, Text, FlatList, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';


const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
        justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
     marginTop:100,
      alignItems: 'center',
      flex: 1,
    },
    title: {
      fontSize: 36,
      color: '#fff',
         fontWeight: 'bold',
      marginBottom: 20,
    },
    subtitle: {
      fontSize: 18,
      color: '#fff',
      marginBottom: 30,
    },
    exploreButton: {
      backgroundColor: '#fff',  
      paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 30,  
        shadowColor: '#000',
         shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 5, 
    },
    exploreButtonText: {
      color: '#8B4513',  
        fontSize: 18,
      fontWeight: 'bold',
    },
  });

  export default styles;
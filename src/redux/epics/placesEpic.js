// placesEpic.js
import { ofType } from 'redux-observable';
import { mapTo } from 'rxjs/operators';

export const fetchPlacesEpic = action$ => action$.pipe(

  ofType('FETCH_PLACES'),
  mapTo({
  
    type: 'FETCH_PLACES_SUCCESS',
    
    payload: {
      historicalPlaces: [
        { id: 1, name: 'Great Wall of China', description: 'Famous wall in China', image: 'https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638892506/EducationHub/photos/the-great-wall-of-china.jpg' },
        { id: 2, name: 'Colosseum', description: 'Ancient amphitheater in Rome', image: 'https://britannicaeducation.com/wp-content/uploads/2023/01/ImageQuest_Colosseum.jpg' },
        { id: 3, name: 'Egyptian pyramids', description: 'Egyptians who built the pyramids', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpnNN2SNtA1WfnnTeZZEUrn2oCNiRtE99t2A&s' },
        { id: 4, name: 'Taj Mahal', description: 'The Taj Mahal is an ivory-white marble mausoleum', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIMq0Utl9O-TUtLMs4xn6n1q0jyqAYN0YB3w&s' },
      ],
      suggestedPlaces: [
        { id: 5, name: 'Machu Picchu', description: 'Ancient Inca city', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKcntlnFMzTNk7Jl9HStjw82ByHy-opUvfPQ&s' },
        { id: 6, name: 'Statue of Liberty', description: 'Famous monument in the USA', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg' },
        { id: 7, name: 'Christ the Redeemer', description: 'Famous statue in Brazil', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpi0Mjj--DE26H3wczcO8MV7ErKK8li10Xgw&s' },
        { id: 8, name: 'Petra', description: 'Famous archaeological site in Jordan', image: 'https://cdn.britannica.com/88/189788-050-9B5DB3A4/Al-Dayr-Petra-Jordan.jpg' }
      ]
    }
  })
);

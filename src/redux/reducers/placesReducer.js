const initialState = {
  
  historicalPlaces: [],
  suggestedPlaces: [],
  visitedPlaces: []

};

export const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PLACES_SUCCESS':
      console.log('Payload:', action.payload);  
     
      return {
        ...state,
         historicalPlaces: action.payload.historicalPlaces,
         suggestedPlaces: action.payload.suggestedPlaces
     
      };
    case 'MARK_PLACE_VISITED':
      return {
        ...state,
        visitedPlaces: [...state.visitedPlaces, action.payload]
      };
    case 'UNMARK_PLACE_VISITED':
     
    return {
        ...state,
        visitedPlaces: state.visitedPlaces.filter(place => place.id !== action.payload.id)
      };
    default:
      return state;
  }
};

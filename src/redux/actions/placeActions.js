export const fetchPlaces = () => ({ type: 'FETCH_PLACES' });
export const markPlaceVisited = (place) => ({ type: 'MARK_PLACE_VISITED', payload: place });
export const unmarkPlaceVisited = (place) => ({ type: 'UNMARK_PLACE_VISITED', payload: place });

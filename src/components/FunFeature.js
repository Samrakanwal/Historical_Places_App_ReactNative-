import React from 'react';
import { Button } from 'react-native';

const FunFeature = ({ onRandomPlace }) => {
  
       return <Button 
       title="Suggest Random Place" 
       onPress={onRandomPlace} />;
};

export default FunFeature;

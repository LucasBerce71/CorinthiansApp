import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import Home from './src/screens/Home';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <Home />
    </>
  );
};

export default App;
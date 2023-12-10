import {SafeAreaView} from 'react-native';
import React from 'react';
import Toast from 'react-native-toast-message';
import Form from './src/components/Form';

const App = () => {
  return (
    <SafeAreaView className="flex-1 bg-white ">
      <Toast position="bottom" />
      <Form />
    </SafeAreaView>
  );
};

export default App;

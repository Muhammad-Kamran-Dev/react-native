import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Toast from 'react-native-toast-message';

const ButtonComponent = ({
  text,
  classNames,
}: {
  text: string;
  classNames: string;
}) => {
  const handleClick = () => {
    console.log("I'm pressed");
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋',
    });
  };
  return (
    <TouchableOpacity
      className={`bg-black px-6 py-3 rounded-md ${classNames} `}
      onPress={handleClick}>
      <Text className="text-white font-bold text-xl">{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

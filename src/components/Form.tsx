import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import ButtonComponent from './Button';
import {
  CameraOptions,
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
const Form = () => {
  const [selectedImage, setSelectedImage] = React.useState<
    string | undefined
  >();
  const openImagePicker = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('Image picker error: ', response.errorMessage);
      } else {
        let imageUri = response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };
  const handleCameraLaunch = () => {
    const options: CameraOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.errorMessage) {
        console.log('Camera Error: ', response.errorMessage);
      } else {
        let imageUri = response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        console.log(imageUri);
      }
    });
  };
  return (
    <ScrollView className="flex flex-col  gap-5   h-full shadow-md mx-2 ">
      <Text className="text-xl text-center font-semibold  text-green-500 py-10">
        Register Here !
      </Text>
      {selectedImage && (
        <Image
          source={{uri: selectedImage}}
          className="h-40 w-40 rounded-full self-center"
        />
      )}
      <TextInput
        placeholder="Enter Your Name"
        placeholderTextColor="gray"
        className="border-[1px] border-gray-300 rounded-md px-2 text-black"
      />
      <TextInput
        placeholder="Enter Your Name"
        placeholderTextColor="gray"
        className="border-[1px] border-gray-300 rounded-md px-2 text-black"
      />
      <TextInput
        placeholder="Enter Your Email"
        placeholderTextColor="gray"
        className="border-[1px] border-gray-300 rounded-md px-2 text-black"
      />
      <TextInput
        placeholder="Enter Your Mobile Number"
        placeholderTextColor="gray"
        className="border-[1px] border-gray-300 rounded-md px-2 text-black"
      />
      <TextInput
        placeholder="Enter Your Address"
        placeholderTextColor="gray"
        className="border-[1px] border-gray-300 rounded-md px-2 text-black"
      />
      <TextInput
        placeholder="Enter Password"
        placeholderTextColor="gray"
        className="border-[1px] border-gray-300 rounded-md px-2 text-black"
      />
      <TextInput
        placeholder="Enter Confirm Password"
        placeholderTextColor="gray"
        className="border-[1px] border-gray-300 rounded-md px-2 text-black"
      />
      <View className="flex items-center justify-between flex-row ">
        <TouchableOpacity
          onPress={openImagePicker}
          className="bg-blue-500 px-4 py-2 ">
          <Text className="text-sm text-white rounded-md font-bold ">
            Choose from Device
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleCameraLaunch}
          className="bg-blue-500 px-4 py-2 ">
          <Text className="text-sm text-white rounded-md font-bold ">
            Open Camera
          </Text>
        </TouchableOpacity>
      </View>

      <ButtonComponent
        classNames="self-end bg-green-500 hover:bg-green-600 my-5"
        text="Signup"
      />
    </ScrollView>
  );
};

export default Form;

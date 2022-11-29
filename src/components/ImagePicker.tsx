import React, { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useImagePicker } from '../hooks/useImagePicker';
import { Button } from './Button';
import { Picture } from './Picture';

export const ImagePicker = () => {
  const { pictureData, takePicture, choosePicture } = useImagePicker();

  return (
    <View style={styles.wrapper}>
      <Text style={styles.headline}>Welcome to ImagePicker!</Text>
      <Text style={styles.description}>Select an option for test it! 💪</Text>
      <View style={styles.optionsWrapper}>
        <View style={styles.optionContainer}>
          <Button text="Take a picture" onPress={() => takePicture()} />
        </View>
        <View style={styles.optionContainer}>
          <Button text="Choose a picture" onPress={() => choosePicture()} />
        </View>
      </View>
      {pictureData.uri && (
        <Fragment>
          <Picture uri={pictureData.uri} />
          <Text>Your picture has been loaded succesfully!</Text>
        </Fragment>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  headline: {
    color: 'white',
    fontSize: 30,
    marginBottom: 10,
  },
  description: {
    fontSize: 20,
    color: '#ffffffe9',
  },
  optionsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    width: '100%',
  },
  optionContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    height: 'auto',
    justifyContent: 'flex-start',
    width: '50%',
  },
  button: {
    alignItems: 'center',
    borderColor: 'white',
    borderRadius: 15,
    borderWidth: 1,
    height: 30,
    justifyContent: 'center',
    width: 150,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
});

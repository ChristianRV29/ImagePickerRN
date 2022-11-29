import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface Props {
  uri: string;
}

export const Picture: React.FC<Props> = ({ uri }) => {
  return (
    <View style={styles.pictureWrapper}>
      <Image source={{ uri: uri }} style={styles.image} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  pictureWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  image: {
    borderRadius: 20,
    height: 300,
    width: 300,
  },
});

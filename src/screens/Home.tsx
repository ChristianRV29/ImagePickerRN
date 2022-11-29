import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ImagePicker } from '../components/ImagePicker';
import { Permissions } from '../components/Permissions';

import { PermissionsContext } from './../context/PermissionsContext';

export const Home = () => {
  const { permissions } = useContext(PermissionsContext);

  return (
    <View style={styles.mainWrapper}>
      {permissions.cameraStatus !== 'granted' &&
      permissions.galleryStatus !== 'granted' ? (
        <Permissions />
      ) : (
        <ImagePicker />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: 'cornflowerblue',
    flex: 1,
  },
});

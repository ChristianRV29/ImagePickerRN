import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { PermissionsContext } from './../context/PermissionsContext';
import { Button } from './Button';

export const Permissions = () => {
  const { askPermissions } = useContext(PermissionsContext);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.headline}>We need to enable some permissions 🙇‍♂️</Text>
      <Button text="Ask them!" onPress={askPermissions} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  headline: {
    color: 'white',
    fontSize: 23,
    marginBottom: 15,
  },
});

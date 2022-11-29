import React, { createContext, useEffect, useState } from 'react';
import { AppState, Platform } from 'react-native';

import {
  check,
  openSettings,
  PERMISSIONS,
  PermissionStatus,
  request,
} from 'react-native-permissions';

import { PermissionsContextProps, PermissionState } from './../@types';

const initialState: PermissionState = {
  cameraStatus: 'unavailable',
  galleryStatus: 'unavailable',
};

export const PermissionsContext = createContext({} as PermissionsContextProps);

export const PermissionsProvider = ({ children }: any) => {
  const [permissions, setPermissions] = useState<PermissionState>(initialState);

  useEffect(() => {
    checkPermissions();

    AppState.addEventListener('change', state => {
      if (state === 'active') {
        return;
      }
      checkPermissions();
    });
  }, []);

  const askPermissions = async () => {
    let cameraPermissions: PermissionStatus;
    let galleryPermissions: PermissionStatus;

    if (Platform.OS === 'ios') {
      cameraPermissions = await request(PERMISSIONS.IOS.CAMERA);
      galleryPermissions = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
    } else {
      cameraPermissions = await request(PERMISSIONS.ANDROID.CAMERA);
      galleryPermissions = await request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
    }

    if (cameraPermissions === 'blocked' || galleryPermissions === 'blocked') {
      openSettings();
    }

    setPermissions({
      cameraStatus: cameraPermissions,
      galleryStatus: galleryPermissions,
    });
  };

  const checkPermissions = async () => {
    let cameraPermissions: PermissionStatus;
    let galleryPermissions: PermissionStatus;

    if (Platform.OS === 'ios') {
      cameraPermissions = await check(PERMISSIONS.IOS.CAMERA);
      galleryPermissions = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
    } else {
      cameraPermissions = await check(PERMISSIONS.ANDROID.CAMERA);
      galleryPermissions = await check(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
    }

    setPermissions({
      cameraStatus: cameraPermissions,
      galleryStatus: galleryPermissions,
    });
  };

  return (
    <PermissionsContext.Provider
      value={{
        askPermissions,
        checkPermissions,
        permissions,
      }}>
      {children}
    </PermissionsContext.Provider>
  );
};

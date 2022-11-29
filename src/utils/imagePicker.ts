import {
  Asset,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

export const executeCamera = () =>
  new Promise((resolve, reject): Asset | any => {
    launchCamera(
      {
        cameraType: 'back',
        mediaType: 'photo',
      },
      res => {
        if (res.didCancel) {
          reject('The user just cancelled it! 😪');
        } else if (res.errorCode) {
          reject(res.errorMessage);
        }
        resolve(res.assets![0]);
      },
    );
  });

export const openGallery = () =>
  new Promise((resolve, reject): Asset | any => {
    launchImageLibrary(
      {
        maxHeight: 300,
        maxWidth: 300,
        mediaType: 'photo',
        quality: 1,
      },
      res => {
        if (res.didCancel) {
          reject('The user just cancelled it! 😪');
        } else if (res.errorCode) {
          reject(res.errorMessage);
        }
        resolve(res.assets![0]);
      },
    );
  });

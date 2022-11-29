import { useState } from 'react';
import { Asset } from 'react-native-image-picker';
import { executeCamera, openGallery } from './../utils/imagePicker';

export const useImagePicker = () => {
  const [pictureData, setPictureData] = useState<Asset>({});

  const takePicture = async () => {
    try {
      const data = await executeCamera();
      setPictureData(data as Asset);
    } catch (err: any) {
      console.log('Something just happened: ', err?.message || err);
    }
  };

  const choosePicture = async () => {
    try {
      const data = await openGallery();
      setPictureData(data as Asset);
    } catch (err: any) {
      console.log('Something just happened: ', err?.message || err);
    }
  };

  return {
    choosePicture,
    pictureData,
    takePicture,
  };
};

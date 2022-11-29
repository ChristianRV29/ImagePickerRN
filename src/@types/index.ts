import { PermissionStatus } from 'react-native-permissions';

export interface PermissionState {
  cameraStatus: PermissionStatus;
  galleryStatus: PermissionStatus;
}

export type PermissionsContextProps = {
  askPermissions: () => void;
  checkPermissions: () => void;
  permissions: PermissionState;
};

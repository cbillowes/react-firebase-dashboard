import { app } from './config';
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage';

export const uploadFile = (path, file) => {
  return new Promise((resolve, reject) => {
    const storage = getStorage(app);
    const fileRef = ref(storage, path);
    uploadBytes(fileRef, file)
      .then((snapshot) => {
        const snapshotRef = snapshot.ref;
        getDownloadURL(snapshotRef)
          .then((url) => resolve(url))
          .catch((error) => reject(error));
      })
      .catch((error) => reject(error));
  })
}

export const getDownloadUrl = async (path) => {
  const storage = getStorage(app);
  const fileRef = ref(storage, path);
  return getDownloadURL(fileRef);
}

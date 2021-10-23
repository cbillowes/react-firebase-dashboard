import { app } from './config';
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  onSnapshot,
} from 'firebase/firestore';

export const createDocument = async (path, pathSegments, data) => {
  const db = getFirestore(app);
  const docRef = doc(db, path, ...pathSegments);
  return await setDoc(docRef, data);
}

export const getDocument = (path, pathSegments) => {
  const db = getFirestore(app);
  const docRef = doc(db, path, ...pathSegments);
  return docRef;
}

export const updateDocument = async (path, pathSegments, data) => {
  const db = getFirestore(app);
  const docRef = doc(db, path, ...pathSegments);
  return await updateDoc(docRef, data);
}

export const listenToDocument = (path, pathSegments, observer) => {
  const db = getFirestore(app);
  const docRef = doc(db, path, ...pathSegments);
  return onSnapshot(docRef, observer);
}

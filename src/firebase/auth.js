import { app } from './config';
import { createUser } from './user';
import {
  getAuth,
  updateProfile,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

export const signup = async ({ firstName, lastName, email, password }) => {
  const auth = getAuth(app);
  const resp = await createUserWithEmailAndPassword(auth, email, password);
  const user = resp.user;
  await updateProfile(user, { displayName: `${firstName} ${lastName}` });
  await createUser(user);
  return user;
};

export const logout = async () => {
  const auth = getAuth(app);
  await signOut(auth);
};

export const login = async ({ email, password }) => {
  const auth = getAuth(app);
  const resp = await signInWithEmailAndPassword(auth, email, password);
  return resp.user;
};

export const unsubscribeAuth = (observer) => {
  const auth = getAuth(app);
  return onAuthStateChanged(auth, (user) => observer(user));
}

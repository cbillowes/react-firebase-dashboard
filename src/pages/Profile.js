import React from 'react';
import { useSession } from '../firebase/UserProvider';

const Profile = () => {
  const { user } = useSession();

  if(user) {
    return (
      <div>
        <p>Name: {user.displayName}</p>
        <p>Email: {user.email}</p>
        <p>ID: {user.uid}</p>
      </div>
    )
  }

  return null;
}

export default Profile;

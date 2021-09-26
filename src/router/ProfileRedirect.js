import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSession }from '../firebase/UserProvider';

const RedirectToProfile = ({ user, location }) => {
  return (
    <Redirect to={{
      pathname: `/profile/${user.id}`,
      state: {
        from: location,
      },
    }} />
  );
};

const ProfileRedirect = ({ component: Component, ...rest }) => {
  const { user } = useSession();

  return (
    <Route
      {...rest}
      render={(props) =>
        !user
          ? (<Component {...props} />)
          : (<RedirectToProfile user={user} location={props.location} />)
      }
    />
  );
}

export default ProfileRedirect;

import { useState, useEffect, useContext, createContext } from 'react';
import { createUser } from './db';
import Router from 'next/router';
import cookie from 'js-cookie';
import firebase from './firebase';

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const handleUser = (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser);
      const { token, ...userWithoutToken } = user;


      createUser(user.uid, userWithoutToken);
      setUser(user);

      cookie.set('fast-feedback-auth', true, {
        expires: 1
      });

      return user;
    } else {
      Router.push('/');
      setUser(false);
      cookie.remove('fast-feedback-auth');

      return false;
    }
  };

  const signinWithGitHub = async () => {
    Router.push('/dashboard');

    const response = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider());
    return handleUser(response.user);
  };

  const signinWithGoogle = async () => {
    Router.push('/dashboard');

    const response = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());
    return handleUser(response.user);
  };

  const signout = async () => {
    await firebase
      .auth()
      .signOut();
    return handleUser(false);
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);

    return () => unsubscribe();
  }, []);

  return {
    user,
    signinWithGitHub,
    signinWithGoogle,
    signout
  };
}

const formatUser = (user) => {
  return {
    email: user.email,
    name: user.displayName,
    photoUrl: user.photoURL,
    provider: user.providerData[0].providerId,
    token: user.ya,
    uid: user.uid
  };
};

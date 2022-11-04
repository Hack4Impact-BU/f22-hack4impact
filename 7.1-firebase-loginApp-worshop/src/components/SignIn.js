import React, {useRef} from 'react';
import {auth} from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import './SignIn.css';
const Signin = () => {
  // 2. create hooks
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  // prevent page from refreshing
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // 1. create the form first
  return (
    <div className="signin">
      <form action="">
        <h1>Sign in</h1>
        <input ref={emailRef} type="email" />
        <input ref={passwordRef} type="password" />
        <button onClick={signIn}>Sign in </button>
        <h6>
          Not yet register?{' '}
          <button onClick={signUp} className="signin__link">
            Sign up
          </button>
        </h6>
      </form>
    </div>
  );
};

export default Signin;

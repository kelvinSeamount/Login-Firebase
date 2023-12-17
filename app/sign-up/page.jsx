"use client";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
const SignUp = () => { // TODO: Please add an empty row before a function declaration.
  const [email, setEmail] = useState(""); // TODO: Please define state type.
  const [password, setPassword] = useState(""); // TODO: Please define state type.
  const [confirmPassword, setConfirmPassword] = useState(""); // TODO: Please define state type.

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      //TODO: you should show a loader to the user while registration is in progress.

      const res = await createUserWithEmailAndPassword(
        email,
        password,
        confirmPassword
      );
      console.log({ res });
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      sessionStorage.setItem("user", true); // TODO: You are setting state to a type that is not initially used. Please define the state type and set it to a valid value;

      // TODO: when registration is completed, show user a success message and either show a button to go to login
      //   or automatically redirect the user to login page.
      // TODO: Bonus - after the registration is complete, not only do the above things but also already log the user
      //   in before the redirection so that once on the login page the user gets automatically logged in.
    } catch (e) {
      // TODO: Please show an error message to user.
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-200 to-gray-300">
      <form className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email
          </label>
          {/*TODO: Please define the input text color. Currently it renders white and is not visible.*/}
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-semibold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block text-gray-700 font-semibold mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          onClick={handleSubmit}
          type="button"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;

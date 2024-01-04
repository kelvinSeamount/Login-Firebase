import { useState, useEffect } from "react";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function useAuthStateChange() {
  const [user, setUser] = useState({});
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push("/sign-up");
      }
    });

    // Just return the unsubscribe function.  React will call it when it's
    // no longer needed.
    return unsubscribe;
  }, [user]);
  const handleLogOut = () => {
    console.log("log out");
    signOut(auth)
      .then(() => {
        router.push("/sign-in");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return { user, handleLogOut };
}

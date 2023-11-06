import "./App.css";
import { useState, useEffect } from "react";
import { auth } from "./config/firebase-config";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import ListOfTodo from "./components/ListOfTodo";

function App() {
  // set authentication state
  const [authStatus, setAuthStatus] = useState(
    false || window.localStorage.getItem("auth") === "true"
  );
  const [token, setToken] = useState("");

  // set useEffect
  useEffect(() => {
    const result = onAuthStateChanged(auth, (userCredential) => {
      if (result) {
        setAuthStatus(true);
        window.localStorage.setItem("auth", "true");
        userCredential.getIdToken().then((token) => {
          setToken(token);
        });
      }
    });
  }, []);

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      if (userCredential) {
        setAuthStatus(true);
        window.localStorage.setItem("auth", "true");
      }
    } catch (error) {
      console.error("Error while signing in with Google:", error);
    }
  };

  return (
    <div className="App">
      {authStatus ? (
        <ListOfTodo token={token} />
      ) : (
        <button onClick={loginWithGoogle}>Login with Google</button>
      )}
    </div>
  );
}

export default App;

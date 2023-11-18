import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";

const getLocalStorage = () => {
  return localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];
};

function App() {
  const [isSigning, setSigning] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(getLocalStorage());

  const handSignIn = () => {
    const newUser = { title: name, mail: email };
    setUser([...user, newUser]); 
  };
  

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(user))
  }, [user])
  return (
    <>
      <div>
        <Navbar isSigning={isSigning} setSigning={setSigning} />
        {isSigning && (
          <SignIn
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            handSignIn={handSignIn}
          />
        )}
      </div>
    </>
  );
}

export default App;

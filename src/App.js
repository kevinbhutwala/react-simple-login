import React, { useState } from "react";
import LoginForm from './components/LoginForm'

function App() {
  const adminUser = {
    email: "kevinbhutwala417@gmail.com",
    password: "417",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log("details", details);
    if(details.email === adminUser.email && details.password === adminUser.password){
      console.log("Logged in");
      setUser({
        name:details.name,
        email:details.email
      })
      setError("")
    }else{
      console.log("details do not match");
      setError("details do not match")
    }
  };

  const Logout = () => {
    console.log("Logout");
    setUser({name:'',email:''});
  };

  return (  
    <div className="App">
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome,<span>{user.name}</span>
          </h2>
          <button  onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;

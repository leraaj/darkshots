import React, { useState } from "react";

const Index = () => {
  // const api = "http://localhost:3001/api/";
  const api = "https://darkshot-server.onrender.com/";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!username || !password) {
        alert("All fields are required");
      } else {
        await fetch(`${api}/user/login`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        })
          .then(async (response) => {
            const data = await response.json();
            if (response.ok) {
              console.log(data);
            } else {
              console.log(data.message);
            }
          })
          .catch((error) => {
            alert(error.message);
            console.log({ error: error.message });
          });
      }
    } catch (error) {
      console.error("Login Error Message: " + error);
    }
  };
  return (
    <>
      <div className="container p-5">
        <label>Login</label>
        <form onSubmit={handleSubmit}>
          <div className="row mx-0 mt-2 gap-2">
            <input
              type="text"
              placeholder="username"
              className="form-control form-control-sm"
              value={username || ""}
              onChange={handleUsername}
            />
            <input
              type="password"
              placeholder="password"
              className="form-control form-control-sm"
              value={password || ""}
              onChange={handlePassword}
            />
            <div className="col">
              <button type="submit" className="btn btn-success">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Index;

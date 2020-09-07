import React, { useState } from "react";
import "./App.css";
import PostList from "./components/PostList";
import { AuthContext } from "./context/AuthContextProvider";

function App() {
  const [user, setUser] = useState({ name: "Test2" });

  const setUserHandler = (name) => {
    setUser({ name });
  };

  return (
    <div className="App">
      <main className="App-header">
        <AuthContext.Provider value={{ user: user, setUser: setUserHandler }}>
          <PostList />
        </AuthContext.Provider>
      </main>
    </div>
  );
}

export default App;

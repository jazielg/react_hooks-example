import React from "react";
import "./App.css";
import PostList from "./components/PostList";
import AuthContextProvider from "./context/AuthContextProvider";

function App() {
  return (
    <div className="App">
      <main className="App-header">
        <AuthContextProvider>
          <PostList />
        </AuthContextProvider>
      </main>
    </div>
  );
}

export default App;

import React, { useEffect } from "react";
import { Login } from "./components";

const App = () => {
  // runs code based on a given condition
  useEffect(() => {
    const token = getTokenFromUrl();
    
  }, []);

  return (
    <div className="app">
      <Login />
    </div>
  );
};

export default App;

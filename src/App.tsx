import React from "react";
import "./App.css";
import CounterReducer from "./app/CounterReducer";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>User Management</h1>
      <CounterReducer />
    </div>
  );
}

export default App;

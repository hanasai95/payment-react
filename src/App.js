import logo from "./logo.png";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <header>
        <form>
          <input type="float" id="amount" />
          <input type="submit" value="submit" />
        </form>
      </header>
    </div>
  );
}

export default App;

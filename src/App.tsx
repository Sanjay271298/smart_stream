import React from "react";
import "./App.css";
import PageRoutes from "./routes/page-routes";
import Header from "./layouts/header";
import Sidebar from "./layouts/Sidebar";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <main style={{ padding: '5px 20px',background:"#F5F6FA" }}>
          <PageRoutes />
        </main> 
      </div>
    </div>
  </Router>
  );
}

export default App;

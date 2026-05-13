import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Tickets } from "./pages/Tickets";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div><h1>Pride in Pontiac Dashboard</h1><a href="/tickets">View Tickets System</a></div>} />
        <Route path="/tickets" element={<Tickets />} />
      </Routes>
    </BrowserRouter>
  );
}

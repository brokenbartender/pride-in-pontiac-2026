import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Sponsors } from "./pages/Sponsors";
import { Vendors } from "./pages/Vendors";
import { Volunteers } from "./pages/Volunteers";
import { Performers } from "./pages/Performers";
import { Donate } from "./pages/Donate";
import { Accessibility } from "./pages/Accessibility";
import { GetInvolved } from "./pages/GetInvolved";
import { Operations } from "./pages/Operations";
import { CodeOfConduct } from "./pages/CodeOfConduct";
import { Resources } from "./pages/Resources";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/volunteers" element={<Volunteers />} />
          <Route path="/performers" element={<Performers />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/resources" element={<Resources />} />
          {/* Pre-event / merged pages retired now that Pride in Pontiac 2026 has happened */}
          <Route path="/tickets" element={<Navigate to="/" replace />} />
          <Route path="/schedule" element={<Navigate to="/performers" replace />} />
          <Route path="/map" element={<Navigate to="/operations" replace />} />
          <Route path="/event-info" element={<Navigate to="/operations" replace />} />
          <Route path="/contact" element={<Navigate to="/get-involved" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

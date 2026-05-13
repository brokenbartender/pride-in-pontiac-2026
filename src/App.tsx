import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { About } from "./pages/About";
import { Accessibility } from "./pages/Accessibility";
import { CodeOfConduct } from "./pages/CodeOfConduct";
import { Contact } from "./pages/Contact";
import { Donate } from "./pages/Donate";
import { EventInfo } from "./pages/EventInfo";
import { GetInvolved } from "./pages/GetInvolved";
import { Home } from "./pages/Home";
import { Map } from "./pages/Map";
import { Operations } from "./pages/Operations";
import { Performers } from "./pages/Performers";
import { Schedule } from "./pages/Schedule";
import { Sponsors } from "./pages/Sponsors";
import { Tickets } from "./pages/Tickets";
import { Vendors } from "./pages/Vendors";
import { Volunteers } from "./pages/Volunteers";

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/about" element={<About />} />
          <Route path="/event-info" element={<EventInfo />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/map" element={<Map />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/volunteers" element={<Volunteers />} />
          <Route path="/performers" element={<Performers />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

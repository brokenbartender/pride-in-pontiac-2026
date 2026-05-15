import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Tickets } from "./pages/Tickets";
import { About } from "./pages/About";
import { EventInfo } from "./pages/EventInfo";
import { Schedule } from "./pages/Schedule";
import { Map } from "./pages/Map";
import { Sponsors } from "./pages/Sponsors";
import { Vendors } from "./pages/Vendors";
import { Volunteers } from "./pages/Volunteers";
import { Performers } from "./pages/Performers";
import { Donate } from "./pages/Donate";
import { Accessibility } from "./pages/Accessibility";
import { Contact } from "./pages/Contact";
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
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/resources" element={<Resources />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

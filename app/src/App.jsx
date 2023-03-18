import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Films from "./pages/Home/films";
import People from "./pages/Home/people";
import Species from "./pages/Home/species";
import Vehicles from "./pages/Home/vehicles";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" element={<Films />} />
          <Route path="/people" element={<People />} />
          <Route path="/species" element={<Species />} />
          <Route path="/vehicles" element={<Vehicles />} />
          {/* <Route path="/" element={<Films />} /> */}
        </Switch>
      </Router>
    </>
  );
}

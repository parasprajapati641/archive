import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateArchive from "./pages/CreateArchive/CreateArchive";
import Dashboard from "./pages/Dashboard/Dashboard";
import {routes} from "./Routes/Routes"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.LoginUrl} element={<CreateArchive />} />
        <Route path={routes.DashboardUrl} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

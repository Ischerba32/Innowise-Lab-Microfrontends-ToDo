import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AuthRoute from "./components/AuthRoute";
import Home from "./components/Home";
import { useTheme } from "./hooks/useTheme";

export default function Root(props) {
  useTheme();

  return (
    <Router>
      <Routes>
        <Route
          path="/todo"
          element={
            <AuthRoute>
              <Home />
            </AuthRoute>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

import AuthRoute from "./components/AuthRoute";
import Home from "./components/Home";

export default function Root(props) {
  return (
    <AuthRoute>
      <Home />
    </AuthRoute>
  );
}

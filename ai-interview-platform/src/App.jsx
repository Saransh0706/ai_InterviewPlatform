import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

function App() {
  const [isLogin, setIsLogin] = useState(false); // Default: Show login first
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <div>
      {!isAuthenticated ? (
        isLogin ? (
          <Login toggleForm={() => setIsLogin(false)} handleLogin={handleLogin} />
        ) : (
          <Signup toggleForm={() => setIsLogin(true)} handleLogin={handleLogin} />
        )
      ) : (
        <Dashboard handleLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;

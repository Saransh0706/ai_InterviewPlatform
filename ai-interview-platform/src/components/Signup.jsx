import { useState } from "react";

const Signup = ({ toggleForm, handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    handleLogin(); // Simulate authentication
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" placeholder="Email" className="w-full p-3 bg-gray-700 rounded" required />
          <input type="password" placeholder="Password" className="w-full p-3 bg-gray-700 rounded" required />
          <input type="password" placeholder="Confirm Password" className="w-full p-3 bg-gray-700 rounded" required />
          <button type="submit" className="w-full bg-green-500 p-3 rounded hover:bg-green-600">
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account? <button onClick={toggleForm} className="text-blue-400 hover:underline">Login</button>
        </p>
      </div>
    </div>
  );
};

export default Signup;

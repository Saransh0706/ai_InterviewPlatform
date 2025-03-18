import { useState } from "react";

const Dashboard = ({ handleLogout }) => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [questions, setQuestions] = useState([]);

  const roles = [
    "Software Engineer",
    "Data Scientist",
    "Product Manager",
    "Cybersecurity Analyst",
    "AI/ML Engineer",
  ];

  // Simulate fetching AI-generated interview questions
  const fetchQuestions = (role) => {
    setSelectedRole(role);

    // Mock AI-generated questions (Replace this with OpenAI API call)
    const mockQuestions = {
      "Software Engineer": [
        "What is a closure in JavaScript?",
        "Explain the differences between React and Angular.",
        "How do you optimize database queries?",
      ],
      "Data Scientist": [
        "Explain bias-variance tradeoff in machine learning.",
        "How does a decision tree work?",
        "What are the assumptions of linear regression?",
      ],
      "Product Manager": [
        "How do you prioritize product features?",
        "Describe a time you handled a difficult stakeholder.",
        "What metrics would you track for a new product launch?",
      ],
      "Cybersecurity Analyst": [
        "What is SQL injection, and how can it be prevented?",
        "Explain the difference between symmetric and asymmetric encryption.",
        "How do firewalls enhance network security?",
      ],
      "AI/ML Engineer": [
        "What are the key differences between CNN and RNN?",
        "Explain the concept of backpropagation in neural networks.",
        "How do you handle imbalanced datasets in machine learning?",
      ],
    };

    setQuestions(mockQuestions[role] || []);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 shadow-lg flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400">AI Interview Prep</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-10">
        <h2 className="text-4xl font-extrabold">
          Ace Your Next Interview with AI-Powered Practice
        </h2>
        <p className="text-gray-400 mt-3">
          Get real-time AI feedback on coding, behavioral, and system design questions.
        </p>
      </header>

      {/* Role Selection */}
      <section className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-center mb-4">Select Your Role</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {roles.map((role, index) => (
            <button
              key={index}
              className={`p-4 border-2 rounded-lg ${
                selectedRole === role
                  ? "border-blue-500 bg-blue-600 text-white"
                  : "border-gray-600 text-gray-300 hover:bg-gray-700"
              } transition`}
              onClick={() => fetchQuestions(role)}
            >
              {role}
            </button>
          ))}
        </div>
        {selectedRole && (
          <p className="text-center mt-4 text-green-400">
            Selected Role: <span className="font-bold">{selectedRole}</span>
          </p>
        )}
      </section>

      {/* AI-Generated Questions Section */}
      {selectedRole && (
        <section className="max-w-4xl mx-auto bg-gray-800 mt-6 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-center mb-4">AI-Generated Questions</h3>
          <ul className="list-disc list-inside text-gray-300">
            {questions.map((question, index) => (
              <li key={index} className="mb-2">
                {question}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default Dashboard;

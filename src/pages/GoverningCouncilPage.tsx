// src/pages/GoverningCouncilPage.tsx
import { Link } from 'react-router-dom';

const GoverningCouncilPage = () => {
  return (
    <div className="min-h-screen bg-[#fefce8] p-10">
      <h1 className="text-3xl font-bold text-yellow-700 mb-4">Governing Council Members</h1>

      <div className="bg-white shadow rounded-lg p-6">
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>Dr. A. B. Sharma – Chairman</li>
          <li>Prof. Kavitha M. – Academic Expert</li>
          <li>Mr. Rajiv Menon – Industry Representative</li>
          <li>Mrs. Priya Das – UGC Nominee</li>
          <li>Dr. Sameer Jain – Institutional Head</li>
        </ul>
      </div>

      <div className="mt-6">
        <Link to="/" className="text-yellow-600 hover:underline">
          ← Back to Board of Governance
        </Link>
      </div>
    </div>
  );
};

export default GoverningCouncilPage;

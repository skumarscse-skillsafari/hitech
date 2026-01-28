import { useNavigate } from 'react-router-dom';

const CseSpecializedTraining = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Back Buttonn */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <i className="fas fa-arrow-left"></i>
          <span className="font-medium">Back</span>
        </button>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            CSE Specialized Industrial Training
          </h1>
          <div className="w-32 h-1 bg-yellow-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Exclusive training programs designed specifically for Computer Science Engineering students, 
            delivered by external technical experts from leading industry organizations.
          </p>
          <div className="mt-6 inline-block bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
            <p className="text-sm font-semibold text-gray-800">
              <span className="text-yellow-600">●</span> Specialized curriculum tailored for CSE students
            </p>
            <p className="text-sm font-semibold text-gray-800 mt-1">
              <span className="text-yellow-600">●</span> Industry experts with real-world experience
            </p>
            <p className="text-sm font-semibold text-gray-800 mt-1">
              <span className="text-yellow-600">●</span> Semester-wise structured learning path
            </p>
          </div>
        </div>

        {/* 3rd Semester Training Programs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            3rd Semester Programs
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Quantumnique - 3rd Sem */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-purple-500">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <img 
                    src="https://img.logo.dev/quantumniquesolutions.com?token=pk_K8u3uM3kQMik6ox3R29MqA" 
                    alt="Quantumnique" 
                    className="h-12 w-12 object-contain" 
                  />
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">3rd Sem</span>
                </div>
                
                <h6 className="text-xl font-bold text-gray-900 mb-2">Quantumnique</h6>
                <div className="border-b-2 border-purple-500 w-16 mb-4"></div>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-purple-600 uppercase mb-2">Training Program</p>
                  <p className="text-gray-700 text-sm">Java Programming & Advanced Data Structures</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-purple-600 uppercase mb-2">Course Modules</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Core Java Programming Fundamentals</li>
                    <li>• Object-Oriented Programming Concepts</li>
                    <li>• Advanced Data Structures (Trees, Graphs, Heaps)</li>
                    <li>• Algorithm Design & Analysis</li>
                    <li>• Problem Solving & Coding Practice</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-purple-600 uppercase mb-2">Duration & Mode</p>
                  <p className="text-gray-700 text-sm">3 Months | Offline Classroom</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-purple-600 uppercase mb-2">Target Students</p>
                  <p className="text-gray-700 text-sm">3rd Semester CSE Students Only</p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-600">
                    <strong>Certification:</strong> Quantumnique Certified Java & Data Structures Specialist
                  </p>
                </div>
              </div>
            </div>

            {/* IgenuineLearning - 3rd Sem */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-blue-500">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <img 
                    src="https://img.logo.dev/igenuinelearning.com?token=pk_K8u3uM3kQMik6ox3R29MqA" 
                    alt="IgenuineLearning" 
                    className="h-12 w-12 object-contain" 
                  />
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">3rd Sem</span>
                </div>
                
                <h6 className="text-xl font-bold text-gray-900 mb-2">IgenuineLearning</h6>
                <div className="border-b-2 border-blue-500 w-16 mb-4"></div>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-blue-600 uppercase mb-2">Training Program</p>
                  <p className="text-gray-700 text-sm">Java Programming & Advanced Data Structures</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-blue-600 uppercase mb-2">Course Modules</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Java Syntax, Data Types & Control Flow</li>
                    <li>• Classes, Objects & Inheritance</li>
                    <li>• Stacks, Queues, Linked Lists</li>
                    <li>• Binary Trees, AVL Trees, B-Trees</li>
                    <li>• Graph Algorithms & Dynamic Programming</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-blue-600 uppercase mb-2">Duration & Mode</p>
                  <p className="text-gray-700 text-sm">3 Months | Offline Classroom</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-blue-600 uppercase mb-2">Target Students</p>
                  <p className="text-gray-700 text-sm">3rd Semester CSE Students Only</p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-600">
                    <strong>Certification:</strong> IgenuineLearning Java & Advanced DS Certificate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4th Semester Training Program */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            4th Semester Program
          </h2>
          
          <div className="max-w-2xl mx-auto">
            {/* Quantumnique - 4th Sem */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-indigo-500">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <img 
                    src="https://img.logo.dev/quantumniquesolutions.com?token=pk_K8u3uM3kQMik6ox3R29MqA" 
                    alt="Quantumnique" 
                    className="h-12 w-12 object-contain" 
                  />
                  <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-bold">4th Sem</span>
                </div>
                
                <h6 className="text-xl font-bold text-gray-900 mb-2">Quantumnique</h6>
                <div className="border-b-2 border-indigo-500 w-16 mb-4"></div>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-indigo-600 uppercase mb-2">Training Program</p>
                  <p className="text-gray-700 text-sm">Database Management & Analysis of Algorithms</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-indigo-600 uppercase mb-2">Course Modules</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Relational Database Design & Normalization</li>
                    <li>• SQL Queries & Database Operations</li>
                    <li>• Indexing, Transactions & Concurrency Control</li>
                    <li>• Algorithm Complexity Analysis (Big O, Theta, Omega)</li>
                    <li>• Divide & Conquer, Greedy, Dynamic Programming</li>
                    <li>• Graph Algorithms & NP-Completeness</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-indigo-600 uppercase mb-2">Duration & Mode</p>
                  <p className="text-gray-700 text-sm">3 Months | Offline Classroom</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-indigo-600 uppercase mb-2">Target Students</p>
                  <p className="text-gray-700 text-sm">4th Semester CSE Students Only</p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-600">
                    <strong>Certification:</strong> Quantumnique DBMS & Algorithm Analysis Expert
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Program Benefits</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎓</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Expert Instruction</h4>
              <p className="text-sm text-gray-600">Learn from industry professionals with years of hands-on experience</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💼</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Industry-Aligned</h4>
              <p className="text-sm text-gray-600">Curriculum designed to meet current industry standards and requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏆</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Certification</h4>
              <p className="text-sm text-gray-600">Earn recognized certificates to boost your academic and professional profile</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CseSpecializedTraining;

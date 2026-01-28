import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';

const TrainingSyllabusPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageLayout 
      title="Training & Career Guidance - Hindusthan Institute of Technology"
      description="Comprehensive skill enhancement and pre-placement training programs"
    >
      {/* Back Button (standardized size) */}
      <button
        onClick={() => navigate(-1)}
        className="group fixed top-[200px] left-9 z-50 w-12 h-12 rounded-full bg-yellow-500 shadow-lg flex items-center justify-center cursor-pointer hover:bg-yellow-600 transition-all duration-300"
        aria-label="Back"
      >
        <ChevronLeft className="w-6 h-6 text-black" strokeWidth={3} />
        <span className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 px-3 py-1 rounded bg-black text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Back
        </span>
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-32">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-center">TRAINING & CAREER GUIDANCE</h2>
          <div className="w-32 h-1 bg-[#f59e0b] rounded-full mx-auto mb-8"></div>

          {/* Training Module Header */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Training Module</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our Skill Enhancement & Pre-placement training helps the students to make them 'Plug & Play' in industry areas of Technical knowledge. Training is given from 1st year onwards and the trainers are brought from various sectors to make the students active. The following training programs are offered to improve the employability skills.
            </p>
          </div>

          {/* Year-wise Training Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* 1st Year */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Ist Year</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <p className="text-gray-700">Basic English (speak, read & write)</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <p className="text-gray-700">Verbal & Non Verbal</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <p className="text-gray-700">Spoken English course for mediocre & Tamil medium students</p>
                </div>
              </div>
            </div>

            {/* IInd Year */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-6">IInd Year</h4>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <p className="text-gray-700">Intermediate English (Speak, Read & Write).</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <p className="text-gray-700">British English Course</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <p className="text-gray-700">Aptitude problem solving skills- Basic</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <p className="text-gray-700">Analytical & Reasoning</p>
                </div>
              </div>
            </div>
          </div>

          {/* Course 1: Aptitude - I */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-400 text-white p-4 rounded-t-xl">
              <h3 className="text-xl font-bold">APTITUDE - I</h3>
            </div>
            <div className="border border-gray-200 rounded-b-xl overflow-hidden">
              {/* Course Objectives */}
              <div className="border-b border-gray-200">
                <div className="grid md:grid-cols-4 bg-gray-50">
                  <div className="p-4 font-semibold text-gray-900 border-r border-gray-200">Course Objectives:</div>
                  <div className="p-4 md:col-span-3 text-gray-700">
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Solve Logical Reasoning questions of easy to intermediate level</li>
                      <li>Solve Quantitative Aptitude questions of easy to intermediate level</li>
                      <li>Solve Verbal Ability questions of easy to intermediate level</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Table Header */}
              <div className="grid md:grid-cols-12 bg-gray-100 border-b border-gray-200">
                <div className="p-3 font-semibold text-center border-r border-gray-200">Unit</div>
                <div className="p-3 font-semibold text-center md:col-span-10 border-r border-gray-200">Description</div>
                <div className="p-3 font-semibold text-center">Instructional Hours</div>
              </div>

              {/* Unit I */}
              <div className="grid md:grid-cols-12 border-b border-gray-200 hover:bg-gray-50 transition">
                <div className="p-4 text-center font-semibold border-r border-gray-200">I</div>
                <div className="p-4 md:col-span-10 border-r border-gray-200">
                  <p className="font-bold mb-2">Lessons on excellence</p>
                  <p className="text-gray-700">Skill introspection, Skill acquisition, consistent practice</p>
                </div>
                <div className="p-4 text-center font-semibold">2</div>
              </div>

              {/* Unit II */}
              <div className="grid md:grid-cols-12 border-b border-gray-200 hover:bg-gray-50 transition">
                <div className="p-4 text-center font-semibold border-r border-gray-200">II</div>
                <div className="p-4 md:col-span-10 border-r border-gray-200">
                  <p className="font-bold mb-2">Logical Reasoning</p>
                  <p className="text-gray-700">Problem Solving - Critical Thinking- Lateral Thinking - Coding and Decoding – Series – Analogy - Odd Man Out - Visual Reasoning - Sudoku puzzles - Attention to detail</p>
                </div>
                <div className="p-4 text-center font-semibold">11</div>
              </div>

              {/* Unit III */}
              <div className="grid md:grid-cols-12 border-b border-gray-200 hover:bg-gray-50 transition">
                <div className="p-4 text-center font-semibold border-r border-gray-200">III</div>
                <div className="p-4 md:col-span-10 border-r border-gray-200">
                  <p className="font-bold mb-2">Quantitative Aptitude</p>
                  <p className="text-gray-700">Addition and Subtraction of bigger numbers - square and square roots - Cubes and cube roots - Vedic maths techniques - Multiplication Shortcuts - Multiplication of 3 and higher digit numbers – Simplifications - Comparing fractions - Shortcuts to find HCF and LCM - Divisibility tests shortcuts - Algebra and functions</p>
                </div>
                <div className="p-4 text-center font-semibold">11</div>
              </div>

              {/* Unit IV */}
              <div className="grid md:grid-cols-12 border-b border-gray-200 hover:bg-gray-50 transition">
                <div className="p-4 text-center font-semibold border-r border-gray-200">IV</div>
                <div className="p-4 md:col-span-10 border-r border-gray-200">
                  <p className="font-bold mb-2">Recruitment Essentials</p>
                  <p className="text-gray-700">Resume Building - Impression Management</p>
                </div>
                <div className="p-4 text-center font-semibold">2</div>
              </div>

              {/* Unit V */}
              <div className="grid md:grid-cols-12 border-b border-gray-200 hover:bg-gray-50 transition">
                <div className="p-4 text-center font-semibold border-r border-gray-200">V</div>
                <div className="p-4 md:col-span-10 border-r border-gray-200">
                  <p className="font-bold mb-2">Verbal Ability</p>
                  <p className="text-gray-700">Nouns and Pronouns – Verbs - Subject-Verb Agreement - Pronoun-Antecedent – Agreement - Punctuations</p>
                </div>
                <div className="p-4 text-center font-semibold">4</div>
              </div>

              {/* Total */}
              <div className="grid md:grid-cols-12 bg-gray-100">
                <div className="p-4 md:col-span-11 text-right font-bold border-r border-gray-200">Total Instructional Hours</div>
                <div className="p-4 text-center font-bold">30</div>
              </div>
            </div>
          </div>

          {/* Course 2: Aptitude - II */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-400 text-white p-4 rounded-t-xl">
              <h3 className="text-xl font-bold">APTITUDE - II</h3>
            </div>
            <div className="border border-gray-200 rounded-b-xl overflow-hidden">
              {/* Course Objectives */}
              <div className="border-b border-gray-200">
                <div className="grid md:grid-cols-4 bg-gray-50">
                  <div className="p-4 font-semibold text-gray-900 border-r border-gray-200">Course Objectives:</div>
                  <div className="p-4 md:col-span-3 text-gray-700">
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Solve Logical Reasoning questions of easy to intermediate level</li>
                      <li>Solve Quantitative Aptitude questions of easy to intermediate level</li>
                      <li>Solve Verbal Ability questions of easy to intermediate level</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Table Header */}
              <div className="grid md:grid-cols-12 bg-gray-100 border-b border-gray-200">
                <div className="p-3 font-semibold text-center border-r border-gray-200">Unit</div>
                <div className="p-3 font-semibold text-center md:col-span-10 border-r border-gray-200">Description</div>
                <div className="p-3 font-semibold text-center">Instructional Hours</div>
              </div>

              {/* Unit I */}
              <div className="grid md:grid-cols-12 border-b border-gray-200 hover:bg-gray-50 transition">
                <div className="p-4 text-center font-semibold border-r border-gray-200">I</div>
                <div className="p-4 md:col-span-10 border-r border-gray-200">
                  <p className="font-bold mb-2">Logical Reasoning</p>
                  <p className="text-gray-700">Word group categorization questions - Cryptarithmetic - Data arrangements - Blood relations.</p>
                </div>
                <div className="p-4 text-center font-semibold">8</div>
              </div>

              {/* Unit II */}
              <div className="grid md:grid-cols-12 border-b border-gray-200 hover:bg-gray-50 transition">
                <div className="p-4 text-center font-semibold border-r border-gray-200">II</div>
                <div className="p-4 md:col-span-10 border-r border-gray-200">
                  <p className="font-bold mb-2">Quantitative Aptitude</p>
                  <p className="text-gray-700">Ratio and Proportion: Ratio, Proportion, Variation, Simple equations, Problems on Ages, Mixtures and allegations - Percentages, Simple and Compound Interest: Percentages as Fractions and Decimals, Percentage Increase / Decrease, Simple Interest, Compound Interest, Relation Between Simple and Compound Interest - Number System</p>
                </div>
                <div className="p-4 text-center font-semibold">12</div>
              </div>

              {/* Unit III */}
              <div className="grid md:grid-cols-12 border-b border-gray-200 hover:bg-gray-50 transition">
                <div className="p-4 text-center font-semibold border-r border-gray-200">III</div>
                <div className="p-4 md:col-span-10 border-r border-gray-200">
                  <p className="font-bold mb-2">Verbal Ability</p>
                  <p className="text-gray-700">Essential grammar for placements: Prepositions, Adjectives and Adverbs, Tenses, Forms and Speech and Voice, Idioms and Phrasal Verbs, Collocations, Gerund and Infinitives - Reading Comprehension for placements: Types of questions, Comprehension strategies - Articles, Prepositions and Interrogatives: Definite and Indefinite Articles, Omission of Articles, Prepositions, Compound Prepositions and Prepositional Phrases, Interrogatives - Vocabulary for placements: Exposure to solving questions of Synonyms, Antonyms, Analogy, Confusing words and Spelling correctness</p>
                </div>
                <div className="p-4 text-center font-semibold">10</div>
              </div>

              {/* Total */}
              <div className="grid md:grid-cols-12 bg-gray-100">
                <div className="p-4 md:col-span-11 text-right font-bold border-r border-gray-200">Total Instructional Hours</div>
                <div className="p-4 text-center font-bold">30</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TrainingSyllabusPage;

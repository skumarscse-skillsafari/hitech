import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';

const TrainingDetailsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageLayout 
      title="Training & Skill Development - Hindusthan Institute of Technology"
      description="Comprehensive training programs to make students industry-ready"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-32">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-center">Training & Skill Development</h2>
          <div className="w-32 h-1 bg-[#f59e0b] rounded-full mx-auto mb-8"></div>
          
          <div className="flex items-center justify-between mt-4 mb-8">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
            >
              <span className="text-lg">←</span>
              <span>Back to Department</span>
            </button>
          </div>

          {/* Student's Learning Tree Flowchart */}
          <div className="my-12 bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
              STUDENT'S LEARNING TREE
            </h3>
            
            <div className="relative max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Year 1 */}
                <div className="flex flex-col items-center">
                  <div className="bg-yellow-500 text-white px-6 py-3 rounded-xl text-xl font-bold shadow-lg mb-4">
                    I Year
                  </div>
                  <div className="bg-white border-2 border-gray-300 rounded-xl p-4 shadow-md h-full">
                    <ul className="space-y-2 text-xs text-gray-700">
                      <li>• English Language Communication Training</li>
                      <li>• Basic Computer and Mathematics Training</li>
                      <li>• Basic Programming Skills</li>
                    </ul>
                  </div>
                </div>

                {/* Year 2 */}
                <div className="flex flex-col items-center">
                  <div className="bg-green-500 text-white px-6 py-3 rounded-xl text-xl font-bold shadow-lg mb-4">
                    II Year
                  </div>
                  <div className="bg-white border-2 border-green-300 rounded-xl p-4 shadow-md h-full">
                    <ul className="space-y-2 text-xs text-gray-700">
                      <li>• Advanced Programming Skills</li>
                      <li>• Aptitude
                        <ul className="ml-4 mt-1">
                          <li>- Verbal</li>
                          <li>- Numeric</li>
                          <li>- Logical and Nonverbal Reasoning</li>
                        </ul>
                      </li>
                      <li>• Foreign Language Training</li>
                    </ul>
                  </div>
                </div>

                {/* Year 3 */}
                <div className="flex flex-col items-center">
                  <div className="bg-teal-500 text-white px-6 py-3 rounded-xl text-xl font-bold shadow-lg mb-4">
                    III Year
                  </div>
                  <div className="bg-white border-2 border-teal-300 rounded-xl p-4 shadow-md h-full">
                    <ul className="space-y-2 text-xs text-gray-700">
                      <li>• Technology Based Industrial Training</li>
                      <li>• Certification in Latest Technology</li>
                      <li>• Special Training on Additional Programming Languages</li>
                      <li>• Software Testing</li>
                      <li>• Specific training on IT Enabled Services</li>
                      <li>• Campus Recruitment Training</li>
                    </ul>
                  </div>
                </div>

                {/* Year 4 */}
                <div className="flex flex-col items-center">
                  <div className="bg-blue-600 text-white px-6 py-3 rounded-xl text-xl font-bold shadow-lg mb-4">
                    IV Year
                  </div>
                  <div className="bg-white border-2 border-blue-300 rounded-xl p-4 shadow-md h-full">
                    <ul className="space-y-2 text-xs text-gray-700">
                      <li>• Company Specific Training</li>
                      <li>• Placements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Syllabus Section - Split into 2 Halves */}
          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">Training Syllabus</h3>
            
            {/* 1st and 2nd Semester */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* 1st Semester - APTITUDE I */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-400 text-white p-4">
                  <h4 className="text-xl font-bold text-center">APTITUDE - I (1st Semester)</h4>
                </div>
                
                <div className="p-4">
                  {/* Course Objectives */}
                  <div className="mb-4 bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Course Objectives:</h5>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                      <li>Solve Logical Reasoning questions of easy to intermediate level</li>
                      <li>Solve Quantitative Aptitude questions of easy to intermediate level</li>
                      <li>Solve Verbal Ability questions of easy to intermediate level</li>
                    </ol>
                  </div>

                  {/* Units */}
                  <div className="space-y-3">
                    {/* Unit I */}
                    <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition">
                      <p className="font-bold text-gray-900 mb-2">Unit I - Lessons on excellence</p>
                      <p className="text-sm text-gray-700">Skill introspection, Skill acquisition, consistent practice</p>
                    </div>

                    {/* Unit II */}
                    <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition">
                      <p className="font-bold text-gray-900 mb-2">Unit II - Logical Reasoning</p>
                      <p className="text-sm text-gray-700">Problem Solving - Critical Thinking- Lateral Thinking - Coding and Decoding – Series – Analogy - Odd Man Out - Visual Reasoning - Sudoku puzzles - Attention to detail</p>
                    </div>

                    {/* Unit III */}
                    <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition">
                      <p className="font-bold text-gray-900 mb-2">Unit III - Quantitative Aptitude</p>
                      <p className="text-sm text-gray-700">Addition and Subtraction of bigger numbers - square and square roots - Cubes and cube roots - Vedic maths techniques - Multiplication Shortcuts - Multiplication of 3 and higher digit numbers – Simplifications - Comparing fractions - Shortcuts to find HCF and LCM - Divisibility tests shortcuts - Algebra and functions</p>
                    </div>

                    {/* Unit IV */}
                    <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition">
                      <p className="font-bold text-gray-900 mb-2">Unit IV - Recruitment Essentials</p>
                      <p className="text-sm text-gray-700">Resume Building - Impression Management</p>
                    </div>

                    {/* Unit V */}
                    <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition">
                      <p className="font-bold text-gray-900 mb-2">Unit V - Verbal Ability</p>
                      <p className="text-sm text-gray-700">Nouns and Pronouns – Verbs - Subject-Verb Agreement - Pronoun-Antecedent – Agreement - Punctuations</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2nd Semester - APTITUDE II */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-400 text-white p-4">
                  <h4 className="text-xl font-bold text-center">APTITUDE - II (2nd Semester)</h4>
                </div>
                
                <div className="p-4">
                  {/* Course Objectives */}
                  <div className="mb-4 bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Course Objectives:</h5>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                      <li>Solve Logical Reasoning questions of easy to intermediate level</li>
                      <li>Solve Quantitative Aptitude questions of easy to intermediate level</li>
                      <li>Solve Verbal Ability questions of easy to intermediate level</li>
                    </ol>
                  </div>

                  {/* Units */}
                  <div className="space-y-3">
                    {/* Unit I */}
                    <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition">
                      <p className="font-bold text-gray-900 mb-2">Unit I - Logical Reasoning</p>
                      <p className="text-sm text-gray-700">Word group categorization questions - Cryptarithmetic - Data arrangements - Blood relations.</p>
                    </div>

                    {/* Unit II */}
                    <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition">
                      <p className="font-bold text-gray-900 mb-2">Unit II - Quantitative Aptitude</p>
                      <p className="text-sm text-gray-700">Ratio and Proportion: Ratio, Proportion, Variation, Simple equations, Problems on Ages, Mixtures and allegations - Percentages, Simple and Compound Interest: Percentages as Fractions and Decimals, Percentage Increase / Decrease, Simple Interest, Compound Interest, Relation Between Simple and Compound Interest - Number System</p>
                    </div>

                    {/* Unit III */}
                    <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition">
                      <p className="font-bold text-gray-900 mb-2">Unit III - Verbal Ability</p>
                      <p className="text-sm text-gray-700">Essential grammar for placements: Prepositions, Adjectives and Adverbs, Tenses, Forms and Speech and Voice, Idioms and Phrasal Verbs, Collocations, Gerund and Infinitives - Reading Comprehension for placements: Types of questions, Comprehension strategies - Articles, Prepositions and Interrogatives: Definite and Indefinite Articles, Omission of Articles, Prepositions, Compound Prepositions and Prepositional Phrases, Interrogatives - Vocabulary for placements: Exposure to solving questions of Synonyms, Antonyms, Analogy, Confusing words and Spelling correctness</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3rd and 4th Semester */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* 3rd Semester - APTITUDE III */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-400 text-white p-4">
                  <h4 className="text-xl font-bold text-center">SOFT SKILLS AND APTITUDE III (3rd Semester)</h4>
                </div>
                
                <div className="p-4">
                  {/* Course Objectives */}
                  <div className="mb-4 bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Course Objectives:</h5>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                      <li>Solve Logical Reasoning questions of easy to intermediate level</li>
                      <li>Solve Quantitative Aptitude questions of easy to intermediate level</li>
                      <li>Solve Verbal Ability questions of easy to intermediate level</li>
                      <li>Display good writing skills while dealing with essays</li>
                    </ol>
                  </div>

                  {/* Units */}
                  <div className="space-y-3">
                    {/* Unit I */}
                    <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition">
                      <p className="font-bold text-gray-900 mb-2">Unit I - Logical Reasoning</p>
                      <p className="text-sm text-gray-700">Clocks - Calendars - Direction Sense - Cubes - Data Interpretation: Tables, Pie Chart, Bar Graph - Data Sufficiency</p>
                    </div>

                    {/* Unit II */}
                    <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition">
                      <p className="font-bold text-gray-900 mb-2">Unit II - Quantitative Aptitude</p>
                      <p className="text-sm text-gray-700">Time and work: Work with different efficiencies, Pipes and cisterns, Work equivalence, Division of wages - Time, Speed and Distance: Basics of time, speed and distance, Relative speed, Problems based on trains, Problems based on boats and streams, Problems based on races - Profit and loss, Partnerships and averages: Basic terminologies in profit and loss - Partnership - Averages - Weighted average</p>
                    </div>

                    {/* Unit III */}
                    <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition">
                      <p className="font-bold text-gray-900 mb-2">Unit III - Verbal Ability</p>
                      <p className="text-sm text-gray-700">Sentence Correction: Subject-Verb Agreement, Modifiers, Parallelism, Pronoun-Antecedent Agreement, Verb Time Sequences, Comparisons, Prepositions, Determiners - Sentence Completion and Para-jumbles: Pro-active thinking, Reactive thinking (signpost words, root words, prefix suffix, sentence structure clues), Fixed jumbles, Anchored jumbles.</p>
                    </div>

                    {/* Unit IV */}
                    <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition">
                      <p className="font-bold text-gray-900 mb-2">Unit IV - Writing skills for placements</p>
                      <p className="text-sm text-gray-700">Essay writing: Idea generation for topics, best practices, Practice and feedback</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4th Semester - APTITUDE IV */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-400 text-white p-4">
                  <h4 className="text-xl font-bold text-center">APTITUDE - IV (4th Semester)</h4>
                </div>
                
                <div className="p-4">
                  {/* Course Objectives */}
                  <div className="mb-4 bg-gray-50 p-4 rounded-lg">
                    <h5 className="font-semibold text-gray-900 mb-2">Course Objectives:</h5>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                      <li>Solve Logical Reasoning questions of easy to intermediate level</li>
                      <li>Solve Quantitative Aptitude questions of easy to intermediate level</li>
                      <li>Solve Verbal Ability questions of easy to intermediate level</li>
                      <li>Crack mock interviews with ease</li>
                      <li>Be introduced to problem-solving techniques and algorithms</li>
                    </ol>
                  </div>

                  {/* Units */}
                  <div className="space-y-3">
                    {/* Unit I */}
                    <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition">
                      <p className="font-bold text-gray-900 mb-2">Unit I - Logical Reasoning</p>
                      <p className="text-sm text-gray-700">Logical Connectives - Syllogisms - Venn Diagrams: Interpretation - Venn Diagrams - Solving</p>
                    </div>

                    {/* Unit II */}
                    <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition">
                      <p className="font-bold text-gray-900 mb-2">Unit II - Quantitative Aptitude</p>
                      <p className="text-sm text-gray-700">Logarithm - Arithmetic Progression - Geometric Progression - Geometry - Mensuration - Coded inequalities - Quadratic Equations - Permutation, Combination: Fundamental Counting Principle, Permutation and Combination, Computation of Permutation, Circular Permutations, Computation of Combination - Probability</p>
                    </div>

                    {/* Unit III */}
                    <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition">
                      <p className="font-bold text-gray-900 mb-2">Unit III - Verbal Ability</p>
                      <p className="text-sm text-gray-700">Critical Reasoning: Argument – Identifying the Different Parts (Premise, assumption, conclusion), Strengthening statement, weakening statement, Mimic the pattern.</p>
                    </div>

                    {/* Unit IV */}
                    <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition">
                      <p className="font-bold text-gray-900 mb-2">Unit IV - Recruitment Essentials</p>
                      <p className="text-sm text-gray-700">Cracking interviews - demonstration through a few mocks - Sample mock interviews to demonstrate how to crack the: HR interview, MR interview, technical interview - Cracking other kinds of interviews: Skype/ Telephonic interviews, Panel interviews, Stress interviews - Resume building – workshop: A workshop to make students write an accurate resume</p>
                    </div>

                    {/* Unit V */}
                    <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition">
                      <p className="font-bold text-gray-900 mb-2">Unit V - Problem solving and Algorithmic skills</p>
                      <p className="text-sm text-gray-700">Logical methods to solve problem statements in Programming - Basic algorithms introduced</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TrainingDetailsPage;

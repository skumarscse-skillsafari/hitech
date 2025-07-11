import React from 'react';
import pbl from "../../public/projectbasedlearning.jpg";
import fl from "../../public/flippedclass.jpg";
import gm from "../../public/AIGamification.jpg";
import gp from "../../public/grp.jpg";
import cs from "../../public/case.jpg";
import rp from "../../public/role.jpg";

interface Method {
  title: string;
  description: string;
  image: string;
}

const methods: Method[] = [
  {
    title: 'Project-Based Learning',
    description: 'Students work on real-world projects to gain deep knowledge.',
    image: pbl,
  },
  {
    title: 'Flipped Classroom',
    description: 'Students study theory at home and apply it during class.',
    image: fl,
  },
  {
    title: 'Gamification',
    description: 'Game elements like points and challenges keep students engaged.',
    image: gm,
  },
  {
    title: 'Group Discussions',
    description: 'Encourages communication, collaboration, and critical thinking.',
    image: gp,
  },
  {
    title: 'Case Studies',
    description: 'Students analyze real-life problems to make decisions.',
    image: cs,
  },
  {
    title: 'Role Play & Simulation',
    description: 'Simulated environments and role-playing for experiential learning.',
    image: rp,
  },
];

const InnovativeMethods: React.FC = () => {
  return (
    <div className="max-w-7xl m-auto px-4 pt-40 pb-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Innovative Teaching Methodologies
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        These modern methods enhance engagement, creativity, and practical understanding among students.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {methods.map((method, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src={method.image}
              alt={method.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{method.title}</h2>
              <p className="text-gray-600 text-sm">{method.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InnovativeMethods;

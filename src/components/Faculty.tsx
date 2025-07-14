import React from 'react';
import { Mail, BookOpen, Award } from 'lucide-react';

interface FacultyMember {
  id: number;
  name: string;
  designation: string;
  department: string;
  specialization: string;
  experience: string;
  education: string;
  image: string;
  email: string;
  publications: number;
}

interface FacultyProps {
  faculty: FacultyMember[];
}

const Faculty: React.FC<FacultyProps> = ({ faculty }) => {
  return (
    <section id="faculty" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Faculty Members
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from renowned experts and researchers who are shaping the future of engineering education
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member) => (
            <div 
              key={member.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2"
            >
              {/* Faculty Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Contact Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={`mailto:${member.email}`}
                    className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
                  >
                    <Mail className="h-5 w-5 text-blue-600" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold">
                    {member.designation}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.department}
                  </p>
                </div>

                {/* Specialization */}
                <div>
                  <p className="text-gray-700 font-medium text-sm">
                    Specialization: {member.specialization}
                  </p>
                </div>

                {/* Education & Experience */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-orange-500" />
                    <span className="text-sm text-gray-600">{member.education}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-600">{member.experience} Experience</span>
                  </div>
                </div>

                {/* Publications */}
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{member.publications}</div>
                    <div className="text-sm text-blue-700">Publications</div>
                  </div>
                </div>

                {/* View Profile Button */}
                <button className="w-full bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 font-semibold py-2 rounded-lg transition-all duration-300">
                  View Full Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Faculty Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
            View All Faculty Members
          </button>
        </div>

      </div>
    </section>
  );
};

export default Faculty;
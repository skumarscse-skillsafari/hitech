// src/pages/Admissions.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, FileText, CheckCircle2, Clock, MapPin, Phone, Mail } from 'lucide-react';

interface AdmissionsProps {
  admissions: {
    process: Array<{
      step: number;
      title: string;
      description: string;
    }>;
    requirements: string[];
    deadlines: {
      applicationStart: string;
      applicationEnd: string;
    };
  };
}

const Admissions: React.FC<AdmissionsProps> = ({ admissions }) => {
  const navigate = useNavigate();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="admissions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Admissions Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Begin your journey towards engineering excellence with our streamlined admission process
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Admission Process */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">How to Apply</h3>
            <div className="space-y-6">
              {admissions.process.map((step, index) => (
                <div key={step.step} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                  {index < admissions.process.length - 1 && (
                    <div className="absolute left-5 mt-10 w-0.5 h-8 bg-gray-300"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Apply Now Button */}
            <div className="mt-8">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                Start Your Application
              </button>
            </div>
          </div>

          {/* Requirements & Deadlines */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <FileText className="h-6 w-6 text-gray-600" />
                <span>Eligibility Requirements</span>
              </h3>
              <div className="space-y-3">
                {admissions.requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <Calendar className="h-6 w-6 text-yellow-500" />
                <span>Important Dates</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Application Opens</span>
                  <span className="text-gray-600 font-semibold">
                    {formatDate(admissions.deadlines.applicationStart)}
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">Application Deadline</span>
                  <span className="text-red-600 font-semibold">
                    {formatDate(admissions.deadlines.applicationEnd)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visit Campus & Contact Section */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Our Campus & Get in Touch</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Experience our world-class facilities firsthand or reach out to our admissions team for personalized guidance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Campus Visit */}
            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <MapPin className="h-6 w-6 text-yellow-600" />
                <span>Schedule a Campus Visit</span>
              </h4>
              <p className="text-gray-700 mb-6">
                Take a guided tour of our campus, visit our state-of-the-art laboratories, interact with faculty, and get a feel for student life.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-yellow-600" />
                  <span className="text-sm text-gray-700">Monday - Saturday: 9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-4 w-4 text-yellow-600" />
                  <span className="text-sm text-gray-700">Advance booking recommended</span>
                </div>
              </div>
              <button
                onClick={() => navigate('/contact')}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Book Campus Tour
              </button>
            </div>

            {/* Contact Admissions */}
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <Phone className="h-6 w-6 text-blue-600" />
                <span>Contact Admissions Office</span>
              </h4>
              <p className="text-gray-700 mb-6">
                Our admissions counselors are here to help you with any questions about programs, eligibility, or the application process.
              </p>
              {/* contact info blocks */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700"> +91 97152 601184  (Admissions Helpline)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">admissions@hit.edu.in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">Monday - Saturday: 9:00 AM - 5:00 PM</span>
                </div>
              </div>
              <button
                onClick={() => navigate('/contact')}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Contact Admissions Team
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Admissions;

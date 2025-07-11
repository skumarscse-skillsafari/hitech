import React from 'react';

const recruiterLogos = [
  'https://upload.wikimedia.org/wikipedia/commons/5/51/Infosys_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/5/5e/TCS_New_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/8/8e/Wipro_Primary_Logo_Color_RGB.svg',
  'https://upload.wikimedia.org/wikipedia/commons/0/05/Accenture_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/4b/Cognizant_logo_2022.svg',
  'https://upload.wikimedia.org/wikipedia/commons/3/33/HCL_Technologies_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/e/e4/TechMahindraLogo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/f/fa/Capgemini_201x_logo.svg',
];

const TopRecruiters: React.FC = () => {
  return (
    <div className="w-full overflow-hidden py-8 bg-gray-50 border border-yellow-400 rounded-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Our Top Recruiters
      </h2>
      <div className="relative w-full h-24">
        <div className="flex items-center gap-12 animate-slide whitespace-nowrap">
          {recruiterLogos.concat(recruiterLogos).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Recruiter ${index + 1}`}
              className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRecruiters;
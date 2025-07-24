import React from 'react';

interface TeachingMethodology {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface TeachingMethodologyCardsProps {
  methodologies?: TeachingMethodology[];
  departmentName?: string;
}

// Define fallback image path
const fallbackImage = '/image.png'; // Directly in public folder

// Your JSON data
const jsonMethodologies: TeachingMethodology[] = [
  {
    id: 1,
    title: "Active Learning with Technology",
    description: "Students engage in hands-on learning using interactive tools, virtual labs, and coding platforms in ICT-enabled classrooms.",
    image: "/Collaborative Learning with Digital Collaboration Tools.jpg" // Updated path
  },
  {
    id: 2,
    title: "Problem-Based Learning with Digital Tools",
    description: "Students solve real-world problems using collaboration tools, project management platforms, and cloud-based deployment resources.",
    image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 3,
    title: "Flipped Classrooms with Online Resources",
    description: "Flipped Classroom enhances learning via digital content, discussions, expert talks, and active student engagement.",
    image: "../flippedcls.jpg" // Will fall back to fallbackImage
  }
];

// Default methodologies if none are provided
const defaultMethodologies: TeachingMethodology[] = jsonMethodologies;

const TeachingMethodologyCards: React.FC<TeachingMethodologyCardsProps> = ({
  methodologies = defaultMethodologies,
  departmentName = "Department",
}) => {
  // Function to process image paths
  const getImageSrc = (imgPath: string) => {
    if (!imgPath) return fallbackImage;
    // If it's an external URL, use as-is
    if (imgPath.startsWith('http')) return imgPath;
    // For local paths, ensure they point to public folder correctly
    return imgPath.startsWith('/') ? imgPath : `/${imgPath}`;
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      {/* Header */}
      <div className="text-center mb-12">
        <h4 className="text-2xl font-bold text-gray-900 mb-4">
          Innovative Teaching Methodologies
        </h4>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Discover our cutting-edge teaching approaches that bridge theory and practice,
          preparing students for real-world challenges in {departmentName}.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {methodologies.slice(0, 3).map((methodology) => (
          <div
            key={methodology.id}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={getImageSrc(methodology.image)}
                alt={methodology.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  // Fallback if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = fallbackImage;
                }}
              />
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <h5 className="text-xl font-bold text-gray-900 group-hover:text-yellow-700 transition-colors">
                {methodology.title}
              </h5>
              <p className="text-gray-600 mb-4">
                {methodology.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="mt-12 bg-yellow-50 p-6 rounded-xl border border-yellow-200 text-center">
        <h5 className="font-bold text-gray-900 mb-3">Experience Innovation in Learning</h5>
        <p className="text-gray-700 leading-relaxed">
          Our teaching methodologies are continuously updated to incorporate the latest educational
          technologies and industry best practices, ensuring our students receive world-class education.
        </p>
      </div>
    </div>
  );
};

export default TeachingMethodologyCards;
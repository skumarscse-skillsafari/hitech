import React, { useState } from 'react';

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

const fallbackImage = '/image.png';

const jsonMethodologies: TeachingMethodology[] = [
  {
    id: 1,
    title: "Active Learning with Technology",
    description: "Students engage in hands-on learning using interactive tools, virtual labs, and coding platforms in ICT-enabled classrooms.",
    image: "/Collaborative Learning with Digital Collaboration Tools.jpg"
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
    image: "../flippedcls.jpg"
  }
];

const defaultMethodologies: TeachingMethodology[] = jsonMethodologies;

const methodologyDetails: Record<number, React.ReactNode> = {
  1: (
    <div className="space-y-3">
      <h4 className="text-lg font-semibold text-gray-800">Key Features</h4>
      <ul className="list-disc list-inside text-gray-600">
        <li>Our institution is dedicated to creating a learner-centric environment by integrating technology with active learning pedagogies...</li>
      </ul>
    </div>
  ),
  2: (
    <div className="space-y-3">
      <h4 className="text-lg font-semibold text-gray-800">Tools Used</h4>
      <ul className="list-disc list-inside text-gray-600">
        <li>Our institution adopts Problem-Based Learning (PBL) supported by digital tools...</li>
      </ul>
    </div>
  ),
  3: (
    <div className="space-y-3">
      <h4 className="text-lg font-semibold text-gray-800">Approach</h4>
      <ul className="list-disc list-inside text-gray-600">
        <li>Our department implements the Flipped Classroom model to promote active, student-centered learning...</li>
      </ul>
    </div>
  )
};

const TeachingMethodologyModal: React.FC<{
  methodology: TeachingMethodology;
  onClose: () => void;
}> = ({ methodology, onClose }) => {
  const getImageSrc = (imgPath: string) => {
    if (!imgPath) return fallbackImage;
    if (imgPath.startsWith('http')) return imgPath;
    return imgPath.startsWith('/') ? imgPath : `/${imgPath}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-3xl p-8 rounded-2xl shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-xl"
        >
          &times;
        </button>
        <h3 className="text-2xl font-bold mb-4">{methodology.title}</h3>
        <img
          src={getImageSrc(methodology.image)}
          alt={methodology.title}
          className="w-full h-56 object-cover rounded-lg mb-4"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = fallbackImage;
          }}
        />
        <p className="text-gray-700 mb-4">{methodology.description}</p>
        {methodologyDetails[methodology.id] || (
          <p className="text-sm text-gray-500">More information coming soon.</p>
        )}
      </div>
    </div>
  );
};

const TeachingMethodologyCards: React.FC<TeachingMethodologyCardsProps> = ({
  methodologies = defaultMethodologies,
  departmentName = "Department",
}) => {
  const [selectedMethodology, setSelectedMethodology] = useState<TeachingMethodology | null>(null);

  const getImageSrc = (imgPath: string) => {
    if (!imgPath) return fallbackImage;
    if (imgPath.startsWith('http')) return imgPath;
    return imgPath.startsWith('/') ? imgPath : `/${imgPath}`;
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg relative">
      <div className="text-center mb-12">
        <h4 className="text-2xl font-bold text-gray-900 mb-4">
          Innovative Teaching Methodologies
        </h4>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Discover our cutting-edge teaching approaches that bridge theory and practice,
          preparing students for real-world challenges in {departmentName}.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {methodologies.slice(0, 3).map((methodology) => (
          <div
            key={methodology.id}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group active:scale-95 sm:hover:-translate-y-2 cursor-pointer flex flex-col justify-between"
            onClick={() => setSelectedMethodology(methodology)}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={getImageSrc(methodology.image)}
                alt={methodology.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 sm:scale-100 scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = fallbackImage;
                }}
              />
            </div>

            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h5 className="text-xl font-bold text-gray-900 group-hover:text-yellow-700 transition-colors">
                  {methodology.title}
                </h5>
                <p className="text-gray-600 mb-4">{methodology.description}</p>
              </div>
              <div className="text-right">
                <span className="text-sm px-4 py-2 bg-yellow-500 text-white rounded-lg">
                  View More
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-yellow-50 p-6 rounded-xl border border-yellow-200 text-center">
        <h5 className="font-bold text-gray-900 mb-3">Experience Innovation in Learning</h5>
        <p className="text-gray-700 leading-relaxed">
          Our teaching methodologies are continuously updated to incorporate the latest educational
          technologies and industry best practices, ensuring our students receive world-class education.
        </p>
      </div>

      {selectedMethodology && (
        <TeachingMethodologyModal
          methodology={selectedMethodology}
          onClose={() => setSelectedMethodology(null)}
        />
      )}
    </div>
  );
};

export default TeachingMethodologyCards;

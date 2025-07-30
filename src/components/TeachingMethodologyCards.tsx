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

// Sample data for cards
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

// ✅ Custom modal content for each card
const methodologyDetails: Record<number, React.ReactNode> = {
  1: (
    <div className="space-y-3">
      
      <ul className="list-disc list-inside text-gray-600">
        Our institution is dedicated to creating a learner-centric environment by integrating technology with active learning pedagogies. We utilize interactive tools like Kahoot, Mentimeter, and Poll Everywhere to foster engagement, real-time feedback, and reflection. Virtual labs such as Infosys Springboard, Amrita Virtual Labs, and Cisco Packet Tracer provide hands-on experience, bridging theory and practice. Coding platforms like HackerRank, LeetCode, and Codecademy develop programming skills, logical reasoning, and problem-solving abilities. These tools transform traditional classrooms into collaborative, data-driven learning spaces that encourage continuous assessment, peer interaction, and self-paced learning—empowering students to take ownership of their education and preparing them for future careers.
      </ul>
    </div>
  ),
  2: (
    <div className="space-y-3">
      
      <ul className="list-disc list-inside text-gray-600">
        Our institution adopts Problem-Based Learning (PBL) supported by digital tools to empower students as real-world problem solvers. Learners collaborate using Google Workspace and Microsoft Teams, manage projects via Trello and Asana, and deploy solutions on platforms like AWS, GCP, and GitHub. This approach promotes critical thinking, teamwork, and project execution in realistic, technology-driven environments. Students gain hands-on experience with industry-standard tools, fostering digital fluency, self-directed learning, and professional readiness. By solving open-ended, interdisciplinary challenges, they develop into innovative thinkers and effective collaborators, equipped to lead and drive meaningful impact in today’s complex, fast-evolving professional landscape.
      </ul>
    </div>
  ),
  3: (
    <div className="space-y-3">
     
      <ul className="list-disc list-inside text-gray-600">
        Our department implements the Flipped Classroom model to promote active, student-centered learning. Students engage with pre-recorded lectures and materials via YouTube, Google Drive, and the LMS before class, enabling in-class time for collaborative discussions, problem-solving, and interactive activities. Platforms like Google Classroom, Zoom, and Google Meet support ongoing communication and engagement. Weekly expert talks provide real-world context, linking theory to industry practice. This approach enhances participation, conceptual clarity, digital fluency, and self-directed learning. By reversing traditional teaching, the department creates a dynamic academic environment that better prepares students for professional challenges and evolving technological landscapes.
      </ul>
    </div>
  )
};

// Modal component inside same file
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

        {/* Close Button */}
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

        {/* Custom content block */}
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
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 flex flex-col justify-between"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={getImageSrc(methodology.image)}
                alt={methodology.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
                <button
                  className="bg-[#e6b200] text-black text-sm font-semibold px-6 py-2 rounded-md hover:brightness-95 transition"
                  onClick={() => setSelectedMethodology(methodology)}
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-12 bg-yellow-50 p-6 rounded-xl border border-yellow-200 text-center">
        <h5 className="font-bold text-gray-900 mb-3">Experience Innovation in Learning</h5>
        <p className="text-gray-700 leading-relaxed">
          Our teaching methodologies are continuously updated to incorporate the latest educational
          technologies and industry best practices, ensuring our students receive world-class education.
        </p>
      </div>

      {/* Modal popup */}
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

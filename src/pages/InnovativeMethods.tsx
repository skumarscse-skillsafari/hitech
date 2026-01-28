import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

// PDF Report Mapping
const reportPaths: Record<number, string> = {
  0: `${import.meta.env.BASE_URL}teachMethod/Active Learning with Technology-IOT.pdf`,
  1: `${import.meta.env.BASE_URL}teachMethod/Problem based learnign.pdf`,
  2: `${import.meta.env.BASE_URL}teachMethod/Flipped Classrooms.pdf`,
  3: `${import.meta.env.BASE_URL}teachMethod/collabrative_learning.pdf`,
  4: `${import.meta.env.BASE_URL}teachMethod/Competency_Based_Learning_IOT.pdf`,
  5: `${import.meta.env.BASE_URL}teachMethod/Life long learning.pdf`,
  6: `${import.meta.env.BASE_URL}teachMethod/Online and blended learning.pdf`,
  7: `${import.meta.env.BASE_URL}teachMethod/Multimedia and visualization (colab)- Copy (1).pdf`,
  8: `${import.meta.env.BASE_URL}teachMethod/Industry Aligned.pdf`,
};

interface Method {
  title: string;
  description: string;
  image: string;
  moreInfo: string;
}

/* ---------------- PDF POPUP MODAL ---------------- */
const PDFPopupModal: React.FC<{
  reportPath: string;
  onClose: () => void;
}> = ({ reportPath, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[100]"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-5xl h-[90vh] rounded-2xl shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 text-3xl bg-white rounded-full w-10 h-10 flex items-center justify-center"
        >
          ×
        </button>

        <iframe
          src={reportPath}
          className="w-full h-full border-0 rounded-2xl"
          title="PDF Report"
        />
      </div>
    </div>
  );
};
/* ------------------------------------------------ */

const methods: Method[] = [
  {
    title: "Active Learning with Technology",
    description:
      "Students engage in hands-on learning using interactive tools, virtual labs, and coding platforms in ICT-enabled classrooms.",
    image: "public/activebas.jpg.png",
    moreInfo:
      "Our institution is dedicated to creating a learner-centric environment by integrating technology with active learning pedagogies. Interactive tools such as Kahoot, Mentimeter, and Poll Everywhere are used to foster student engagement, real-time feedback, and reflective learning. Virtual laboratories including Infosys Springboard, Amrita Virtual Labs, and Cisco Packet Tracer provide practical exposure that bridges theoretical knowledge and real-world application. Coding platforms like HackerRank, LeetCode, and Codecademy enhance programming proficiency, logical reasoning, and problem-solving skills. These approaches transform traditional classrooms into collaborative and data-driven learning environments, empowering students to take ownership of their learning and preparing them for future careers."
  },
  {
    title: "Problem-Based Learning with Digital Tools",
    description:
      "Students solve real-world problems using collaboration tools, project management platforms, and cloud-based deployment resources.",
    image: "public/problembas.jpg.png",
    moreInfo:
      "The institution adopts Problem-Based Learning supported by digital tools to encourage analytical thinking and collaborative problem-solving. Students work in teams using platforms such as Google Workspace and Microsoft Teams, manage tasks through Trello and Asana, and deploy solutions using cloud services like AWS and Google Cloud. This methodology emphasizes independent research, teamwork, and practical execution. Learners gain experience with industry-standard tools and develop professional competencies that prepare them for real-world technological challenges."
  },
  {
    title: "Flipped Classrooms with Online Resources",
    description:
      "Flipped Classroom enhances learning via digital content, discussions, expert talks, and active student engagement.",
    image: "flippedcls.jpg",
    moreInfo:
      "The department implements the Flipped Classroom model to promote active and student-centered learning. Students access pre-recorded lectures and learning materials through YouTube, Google Drive, and the institutional LMS prior to class sessions. Classroom time is dedicated to collaborative discussions, problem-solving activities, and interactive engagement. Platforms such as Google Classroom, Zoom, and Google Meet support continuous interaction, while expert talks provide industry insights. This approach enhances conceptual clarity, participation, and self-directed learning."
  },
  {
    title: "Collaborative Learning with Digital Collaboration Tools",
    description:
      "Students build teamwork skills via collaborative tools, coding platforms, whiteboards, and expert-guided group activities.",
    image: "public/colab.png",
    moreInfo:
      "Collaborative learning is fostered through team-based projects, peer reviews, and group assignments using tools such as Google Workspace, Microsoft Teams, and Slack. Version control systems like GitHub and GitLab enable collaborative coding practices, while digital whiteboards such as Miro and Jamboard support brainstorming and planning. Industry mentors provide guidance and feedback, ensuring students gain real-world teamwork and communication skills essential for modern professional environments."
  },
  {
    title: "Competency-Based Learning with Online Assessments",
    description:
      "Skill mastery is emphasized through practical projects, online assessments, coding challenges, and industry-aligned training.",
    image: "public/colab.png",
    moreInfo:
      "The Competency-Based Learning model focuses on measurable skill development rather than rote learning. Students complete real-world tasks and assessments using platforms such as Google Forms, Moodle, and the institutional LMS. Coding challenges through Infosys Springboard, LeetCode, and HackerRank test technical proficiency. Regular evaluations and expert-led sessions ensure continuous improvement and alignment with industry expectations."
  },
  {
    title: "Lifelong Learning with Micro-Credentials",
    description:
      "Students pursue certifications via MOOCs, industry courses, and professional visits, promoting continuous learning.",
    image: "public/lifelon.png",
    moreInfo:
      "Lifelong learning is encouraged through integration of micro-credentials and professional certifications. Students engage with platforms such as Coursera, edX, NPTEL, LinkedIn Learning, and Udemy. Industry-supported programs like Infosys Springboard and ServiceNow offer structured learning pathways. Industry visits, alumni interactions, and expert talks reinforce continuous upskilling, enhancing employability and career growth."
  },
  {
    title: "Online and Blended Learning with LMS Integration",
    description:
      "Blended learning combines LMS platforms, live sessions, self-paced modules, and industry input.",
    image: "public/online.png",
    moreInfo:
      "A blended learning approach integrates online resources with traditional classroom instruction. The Learning Management System centralizes course materials, assessments, and communication. Live sessions via Zoom complement recorded lectures and discussion forums. The flipped classroom strategy enhances engagement, while industry-aligned modules through Infosys Springboard extend learning beyond the curriculum."
  },
  {
    title: "Multimedia and Visualization with Digital Content",
    description:
      "Visual aids and multimedia tools enhance conceptual clarity and engagement.",
    image: "public/multimed.png",
    moreInfo:
      "Multimedia and visualization tools are integrated to enhance teaching effectiveness. Faculty use Canva, Adobe Spark, and PowerPoint to create engaging visual content. Data visualization tools such as Tableau, Matplotlib, and Seaborn support analytical learning, while Blender and Unity enable 3D modeling and simulation. These tools help students develop creativity, technical fluency, and practical visualization skills."
  },
  {
    title: "Industry-Aligned Courses and Professional Development",
    description:
      "Industry collaboration provides specialized training, certifications, and real-world exposure.",
    image: "public/industryall.png",
    moreInfo:
      "The department collaborates with industry leaders to deliver specialized training and certifications in emerging technologies. Programs include MongoDB, ServiceNow, and Infosys Springboard. Guest lectures, industry visits, and professional mentoring bridge academic learning with workplace expectations, ensuring students graduate with relevant skills and confidence."
  },
];

const InnovativeMethods: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<Method | null>(null);
  const [selectedMethodIndex, setSelectedMethodIndex] = useState<number | null>(null);
  const [showPDFPopup, setShowPDFPopup] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative bg-white">
      <button
        onClick={() => navigate(-1)}
        className="fixed top-[200px] left-9 z-50 w-12 h-12 rounded-full bg-yellow-500 shadow-lg flex items-center justify-center"
      >
        <ChevronLeft className="w-6 h-6 text-black" strokeWidth={3} />
      </button>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {methods.map((method, index) => {
            // Handle image paths - remove 'public/' prefix and add BASE_URL
            const imageSrc = method.image.startsWith('public/') 
              ? `${import.meta.env.BASE_URL}${method.image.slice(7)}` 
              : `${import.meta.env.BASE_URL}${method.image}`;
            
            return (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
              <img src={imageSrc} className="h-48 w-full object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2">{method.title}</h2>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{method.description}</p>
                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      setSelectedMethod(method);
                      setSelectedMethodIndex(index);
                      setShowPDFPopup(false);
                    }}
                    className="bg-[#e6b200] text-black px-6 py-2 rounded-md font-semibold"
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          );
          })}
        </div>

        {selectedMethod && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              onClick={() => setSelectedMethod(null)}
            >
              <div
                className="bg-white rounded-xl shadow-2xl max-w-4xl w-full p-8 relative max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedMethod(null)}
                  className="absolute top-4 right-4 text-gray-500 text-2xl"
                >
                  ×
                </button>

                <h2 className="text-3xl font-semibold mb-6">{selectedMethod.title}</h2>

                <img
                  src={selectedMethod.image}
                  className="w-full h-64 object-cover rounded-md mb-6"
                />

                <p className="text-gray-700 mb-6">{selectedMethod.moreInfo}</p>

                {selectedMethodIndex !== null && reportPaths[selectedMethodIndex] && (
                  <div className="flex justify-end">
                    <button
                      onClick={() => setShowPDFPopup(true)}
                      className="bg-[#e6b200] text-black px-6 py-2 rounded-md font-semibold"
                    >
                      Show Report
                    </button>
                  </div>
                )}
              </div>
            </div>

            {showPDFPopup &&
              selectedMethodIndex !== null &&
              reportPaths[selectedMethodIndex] && (
                <PDFPopupModal
                  reportPath={reportPaths[selectedMethodIndex]}
                  onClose={() => setShowPDFPopup(false)}
                />
              )}
          </>
        )}
      </div>
    </div>
  );
};

export default InnovativeMethods;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

import col from "../../public/Collaborative Learning with Digital Collaboration Tools.jpg";
import com from "../../public/Competency-Based Learning with Online Assessments.jpg";
import Life from "../../public/Lifelong Learning with Micro-Credentials.jpg";
import online from "../../public/Online and Blended Learning with LMS Integration.jpg.png";
import Multi from "../../public/Multimedia and Visualization with Digital Content.jpg";
import Indust from "../../public/Industry-Aligned Courses and Professional Development.jpg";

const extraMethods = [
  {
    title: "Active Learning with Technology",
    description: "Students engage in hands-on learning using interactive tools, virtual labs, and coding platforms in ICT-enabled classrooms.",
    image: "/Collaborative Learning with Digital Collaboration Tools.jpg",
    moreInfo:
      "Our institution is dedicated to creating a learner-centric environment by integrating technology with active learning pedagogies. We utilize interactive tools like Kahoot, Mentimeter, and Poll Everywhere to foster engagement, real-time feedback, and reflection. Virtual labs such as Infosys Springboard, Amrita Virtual Labs, and Cisco Packet Tracer provide hands-on experience, bridging theory and practice. Coding platforms like HackerRank, LeetCode, and Codecademy develop programming skills, logical reasoning, and problem-solving abilities. These tools transform traditional classrooms into collaborative, data-driven learning spaces that encourage continuous assessment, peer interaction, and self-paced learning—empowering students to take ownership of their education and preparing them for future careers.",
  },
  {
    title: "Problem-Based Learning with Digital Tools",
    description: "Students solve real-world problems using collaboration tools, project management platforms, and cloud-based deployment resources.",
    image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400",
    moreInfo:
      "Our institution adopts Problem-Based Learning (PBL) supported by digital tools to empower students as real-world problem solvers. Learners collaborate using Google Workspace and Microsoft Teams, manage projects via Trello and Asana, and deploy solutions on platforms like AWS, GCP, and GitHub. This approach promotes critical thinking, teamwork, and project execution in realistic, technology-driven environments. Students gain hands-on experience with industry-standard tools, fostering digital fluency, self-directed learning, and professional readiness. By solving open-ended, interdisciplinary challenges, they develop into innovative thinkers and effective collaborators, equipped to lead and drive meaningful impact in today’s complex, fast-evolving professional landscape.",
  },
  {
    title: "Flipped Classrooms with Online Resources",
    description: "Flipped Classroom enhances learning via digital content, discussions, expert talks, and active student engagement.",
    image: "../flippedcls.jpg",
    moreInfo:
      "Our department implements the Flipped Classroom model to promote active, student-centered learning. Students engage with pre-recorded lectures and materials via YouTube, Google Drive, and the LMS before class, enabling in-class time for collaborative discussions, problem-solving, and interactive activities. Platforms like Google Classroom, Zoom, and Google Meet support ongoing communication and engagement. Weekly expert talks provide real-world context, linking theory to industry practice. This approach enhances participation, conceptual clarity, digital fluency, and self-directed learning. By reversing traditional teaching, the department creates a dynamic academic environment that better prepares students for professional challenges and evolving technological landscapes.",
  },
];

interface Method {
  title: string;
  description: string;
  image: string;
  moreInfo?: string;
}

const methods: Method[] = [
  ...extraMethods,
  {
    title: 'Collaborative Learning with Digital Collaboration Tools',
    description: 'Students build teamwork skills via collaborative tools, coding platforms, whiteboards, and expert-guided group activities.',
    image: col,
    moreInfo: 'The department fosters collaborative learning through team-based projects, peer reviews, and assignments using tools like Google Workspace, Microsoft Teams, and Slack. Platforms such as GitHub and GitLab support collaborative coding and version control, while virtual whiteboards like Miro and Jamboard enhance brainstorming and planning. Students gain real-time experience in communication, teamwork, and project coordination, reflecting industry practices. Regular mentorship from industry professionals adds valuable feedback and insight. This approach builds workplace-ready skills, promotes peer learning, and prepares students to thrive in collaborative, technology-driven environments essential for modern careers.',
  },
  {
    title: 'Competency-Based Learning with Online Assessments',
    description: 'The department emphasizes skill mastery through practical projects, online assessments, coding challenges, and industry training.',
    image: com,
    moreInfo: 'The department adopts a Competency-Based Learning (CBL) model that emphasizes practical skill mastery through real-world tasks and continuous assessments. Digital platforms like Google Forms, Moodle, and the internal LMS track progress, while coding platforms such as Infosys Springboard, LeetCode, and HackerRank test programming proficiency. Students engage in hands-on assignments, coding challenges, and industry-relevant projects. Weekly expert-led training sessions offer insights into real-world applications. This approach boosts student engagement, aligns with academic outcomes, and cultivates job-ready skills. By focusing on skill acquisition over rote learning, the department ensures students are well-prepared for placements, internships, and technical careers.',
  },
  {
    title: 'Lifelong Learning with Micro-Credentials',
    description: 'Students pursue certifications via MOOCs, industry courses, and visits, promoting continuous, lifelong, and specialized learning.',
    image: Life,
    moreInfo: 'Our department promotes lifelong learning by integrating micro-credentialing and online certifications into the academic experience. Students engage with MOOC platforms like Coursera, edX, and NPTEL for credit transfer and certification, while LinkedIn Learning and Udemy support personalized skill development. Industry-endorsed platforms such as Infosys Springboard and ServiceNow offer structured, job-ready training. Industry visits, expert talks, and alumni interactions reinforce the value of continuous upskilling. This approach cultivates self-directed learning, builds strong portfolios of micro-credentials, and enhances employability. Our students graduate with current, industry-relevant skills that support long-term career success in an evolving tech landscape.',
  },
  {
    title: 'Online and Blended Learning with LMS Integration',
    description: 'Blended learning combines LMS, live sessions, self-paced modules, and industry input for flexible, enriched education.',
    image: online,
    moreInfo: 'Our department adopts a blended learning approach by integrating online tools with face-to-face teaching, supported by a robust Learning Management System (LMS). The LMS centralizes course materials, assessments, and communication. Synchronous tools like Zoom enable live sessions, while asynchronous resources such as recorded lectures and discussion forums promote self-paced learning. The flipped classroom model enhances classroom engagement through pre-shared materials and active learning. Infosys Springboard extends learning beyond the curriculum with industry-aligned modules and certifications. This approach fosters flexibility, critical thinking, and continuous learning, aligning with NEP 2020 and preparing students for hybrid work environments and real-world collaboration.',
  },
  {
    title: 'Multimedia and Visualization with Digital Content',
    description: 'Visual aids and tools enhance concept clarity, with expert-led sessions demonstrating real-world data visualization applications.',
    image: Multi,
    moreInfo: 'Our department integrates multimedia and visualization tools to enhance teaching effectiveness and student engagement. Faculty use Canva, Adobe Spark, and PowerPoint to simplify complex concepts through infographics and animated content. Tools like Tableau, Matplotlib, and Seaborn aid data visualization, while Blender and Unity support 3D modeling and simulation. Students gain hands-on experience with industry-standard platforms in coursework and projects. Guest lectures by industry experts demonstrate real-world applications, bridging classroom learning with professional practice. This approach fosters critical thinking, creativity, technical fluency, and prepares students for modern, visually-driven, and cross-disciplinary work environments.',
  },
  {
    title: 'Industry-Aligned Courses and Professional Development',
    description: 'Industry collaboration offers specialized training, real-world exposure, and expert insights, boosting students career readiness.',
    image: Indust,
    moreInfo: 'Our department partners with industry leaders to provide students with specialized training and certifications in high-demand technologies. Programs include MongoDB for NoSQL database management, ServiceNow for IT service workflows, and Infosys Springboard for coding and emerging tech skills. Guest lectures by professionals offer real-world insights, while industry visits expose students to live production environments. These initiatives help bridge academic learning with workplace expectations, enhance employability, and build confidence in applying technical knowledge. With practical experience and recognized certifications, our graduates are equipped to meet industry demands and transition seamlessly into technology-driven careers.',
  },
];

const InnovativeMethods: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<Method | null>(null);
  const navigate = useNavigate();

  return (
    <div className="relative mt-0 bg-white">
      {/* Back Button */}
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

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          Innovative Teaching Methodologies
        </h1>
        <div className="w-32 h-1 bg-yellow-400 rounded-full mx-auto mt-4"></div>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          These modern methods enhance engagement, creativity, and practical understanding among students.
        </p>
</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              <img
                src={method.image}
                alt={method.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2">{method.title}</h2>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{method.description}</p>
                <div className="flex justify-end mt-auto">
                  <button
                    onClick={() => setSelectedMethod(method)}
                    className="bg-[#e6b200] text-black text-sm font-semibold px-6 py-2 rounded-md hover:brightness-95 transition"
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedMethod && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full p-8 relative overflow-y-auto max-h-[90vh]">
              <button
                onClick={() => setSelectedMethod(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
              >
                ×
              </button>
              <h2 className="text-3xl font-semibold mb-6">{selectedMethod.title}</h2>
              <img
                src={selectedMethod.image}
                alt={selectedMethod.title}
                className="w-full h-64 object-cover rounded-md mb-6"
              />
              <p className="text-gray-700 text-base leading-relaxed">
                {selectedMethod.moreInfo || selectedMethod.description}
              </p>
            </div>
          </div>
        )}
                <section className="bg-gradient-to-r from-yellow-500 to-orange-500 p-12 rounded-2xl text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Educational Legacy</h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of an institution that has been shaping futures for over three decades
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Explore Programs
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
              Contact Us
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InnovativeMethods;

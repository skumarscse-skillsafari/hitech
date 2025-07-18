import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import SectionWrapper from '../components/layout/SectionWrapper';
import { Award, Users, Heart, Star, Crown, Trophy, Shield, Lightbulb } from 'lucide-react';

const AboutTrustPage: React.FC = () => {
  const trustInfo = {
    title: "About The Trust",
    subtitle: "Hindusthan Educational and Charitable Trust",
    description: "One of the finest in education and teaching, strategically placed in the heart of the city since 1992",
    content: "Hindusthan Educational and Charitable Trust, one of the finest in education and teaching is strategically placed in the heart of the city, and since 1992 has established itself firmly in the fields of Arts, Science, Education and Technical Education. The Trust aims at providing education that is world-class and on par with global standards.",
    managementContent: "The Management has always stood by its commitment to the betterment of the student community and had at first established itself as a brand in the 'power sector', and today in the field of Education has reigned supreme with the 'Life Time Education Achievement Award' for giving back to society. The Management believes in leading and has set new trends/ innovative training methodologies in all its Institutions that will assist students towards the road to success.",
    image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800"
  };

  const leadership = [
    {
      id: 1,
      name: "Shri. T.S.R. Khannaiyann",
      position: "Chairman",
      image: " /images/chairmanog.jpg ",
      description: "In 1975, Shri.T.S.R. Khannaiyann began his career in trading Electromagnetic Equipments. Later he became a successful industrialist by manufacturing power transformers. His concentration, innovation, organization and communication skills earned him the \"Best Entrepreneur\" award. In 1992 he started \"The Hindusthan Educational and Charitable Trust\" to serve the youth and humanity and this vision is being fulfilled through the Hindusthan Educational Institutions. His outstanding caliber has rewarded him with the \"Kongu Rathna\" Award. In 2010, \"The Life Time Education Achievement Award\" was conferred on him for the service to the student community.",
      awards: ["Best Entrepreneur Award", "Kongu Rathna Award", "Life Time Education Achievement Award"],
      icon: Crown,
      color: "bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200"
    },
    {
      id: 2,
      name: "Smt. Sarasuwathi Khannaiyann",
      position: "Managing Trustee",
      image: "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Smt. Sarasuwathi Khannaiyann's hardwork to see big pictures and not getting stuck with ego has made her the legend in the success story of Hindusthan Educational Institutions. Her multi skill personality, with administrative power has made her an icon among women in managing educational affairs. She believes that whatever we do should be done with passion and this has earned her the 'Best Women Entrepreneur' of Coimbatore in 2006. Her individual achievement has been recognized through the 'Rajiv Gandhi Shiromani' award and 'Bharat Gavrar and Sadbhavana' award in 2010 for her distinguished service to the nation.",
      awards: ["Best Women Entrepreneur 2006", "Rajiv Gandhi Shiromani Award", "Bharat Gavrar and Sadbhavana Award"],
      icon: Star,
      color: "bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200"
    },
    {
      id: 3,
      name: "Mr. K. Sakthivel",
      position: "Trustee",
      image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Mr.K. Sakthivel, graduated as an Engineer but turned outstanding young administrator. He has created a revolution in Youth education. An enthusiastic and energetic engineer has played a major role in muting the HIECT. His contribution by motivating the youth to participate and his play is phenomenal and adds to the success of Hindusthan Educational Institutions.",
      awards: ["Outstanding Young Administrator", "Youth Education Revolutionary"],
      icon: Lightbulb,
      color: "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200"
    },
    {
      id: 4,
      name: "Dr. Priya Satish Prabhu",
      position: "Secretary & Executive Trustee",
      image: "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Dr. Priya Satish Prabhu an engineer with an MBA, is a pleasant and pleasing personality with high managerial skills. Her respect for human values and encouragement for innovative ideas is an important factor for the growth of Hindusthan Educational Institutions. Her effort in empowering and employing the youth should be highly appreciated. As a young women icon, she leads the academics with confidence and courage.",
      awards: ["Young Women Icon", "Academic Leadership Excellence"],
      icon: Shield,
      color: "bg-gradient-to-br from-green-50 to-emerald-50 border-green-200"
    }
  ];

  const achievements = [
    {
      year: "1975",
      title: "Foundation in Power Sector",
      description: "Started trading Electromagnetic Equipments"
    },
    {
      year: "1992",
      title: "Trust Establishment",
      description: "Founded Hindusthan Educational and Charitable Trust"
    },
    {
      year: "2006",
      title: "Women Entrepreneurship Recognition",
      description: "Best Women Entrepreneur Award"
    },
    {
      year: "2010",
      title: "Lifetime Achievement",
      description: "Life Time Education Achievement Award"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Commitment to Excellence",
      description: "Dedicated to providing world-class education on par with global standards"
    },
    {
      icon: Users,
      title: "Student-Centric Approach",
      description: "Always standing by the commitment to betterment of student community"
    },
    {
      icon: Lightbulb,
      title: "Innovation in Education",
      description: "Setting new trends and innovative training methodologies"
    },
    {
      icon: Trophy,
      title: "Recognized Leadership",
      description: "Multiple awards for contribution to education and society"
    }
  ];

  return (
    <PageLayout 
      title="About The Trust - Hindusthan Institute of Technology"
      description="Learn about Hindusthan Educational and Charitable Trust, our leadership, and commitment to excellence in education since 1992."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <SectionWrapper lazy lazyHeight="400px" lazyDelay={300} className="">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About The Trust
            </h1>
            <p className="text-2xl text-yellow-600 font-semibold mb-4">
              {trustInfo.subtitle}
            </p>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {trustInfo.description}
            </p>
          </div>
        </SectionWrapper>

        {/* Trust Overview */}
        <SectionWrapper lazy lazyHeight="500px" lazyDelay={500} className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <Award className="h-8 w-8 text-yellow-500" />
                <h2 className="text-3xl font-bold text-gray-900">Our Legacy</h2>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                {trustInfo.content}
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                {trustInfo.managementContent}
              </p>

              <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-yellow-600" />
                  <span>Key Achievements</span>
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Established in 1992 with a vision to serve youth and humanity</li>
                  <li>• Leading brand in power sector before entering education</li>
                  <li>• Life Time Education Achievement Award recipient</li>
                  <li>• Pioneer in innovative training methodologies</li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={trustInfo.image} 
                  alt="Trust Campus" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">15+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Core Values */}
        <SectionWrapper lazy lazyHeight="300px" lazyDelay={700} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">Principles that guide our educational mission</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-yellow-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                    <IconComponent className="h-10 w-10 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </SectionWrapper>

        {/* Timeline */}
        <SectionWrapper lazy lazyHeight="400px" lazyDelay={900} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Milestones in our educational legacy</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-200"></div>
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                      <div className="text-2xl font-bold text-yellow-600 mb-2">{achievement.year}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h3>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Leadership Section */}
        <SectionWrapper lazy lazyHeight="800px" lazyDelay={1100} className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionary leaders who have shaped our educational legacy and continue to guide our mission
            </p>
          </div>

          <div className="space-y-12">
            {leadership.map((leader, index) => {
              const IconComponent = leader.icon;
              return (
                <div key={leader.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  
                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="bg-yellow-100 p-3 rounded-lg">
                        <IconComponent className="h-8 w-8 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{leader.name}</h3>
                        <p className="text-lg text-yellow-600 font-semibold">{leader.position}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {leader.description}
                    </p>

                    {/* Awards */}
                    <div className="space-y-3">
                      <h4 className="font-bold text-gray-900 flex items-center space-x-2">
                        <Award className="h-5 w-5 text-yellow-600" />
                        <span>Recognition & Awards</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {leader.awards.map((award, awardIndex) => (
                          <span key={awardIndex} className="bg-yellow-50 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium border border-yellow-200">
                            {award}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className={`${leader.color} p-8 rounded-2xl border-2 hover:shadow-xl transition-all duration-300`}>
                      <div className="relative overflow-hidden rounded-xl">
                        <img 
                          src={leader.image} 
                          alt={leader.name}
                          className="w-full h-80 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                      
                      {/* Position Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 px-4 py-2 rounded-full">
                        <span className="font-bold text-gray-900 text-sm">{leader.position}</span>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </SectionWrapper>

        {/* Call to Action */}
        <SectionWrapper lazy lazyHeight="200px" lazyDelay={1300} className="">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-12 rounded-2xl text-center text-white">
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
          </div>
        </SectionWrapper>

      </div>
    </PageLayout>
  );
};

export default AboutTrustPage;
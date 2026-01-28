import React from 'react';
import {
  TrendingUp,
  Award,
  Building,
  Trophy,
  ArrowRight
} from 'lucide-react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

interface PlacementStats {
  placementRate: number;
  averagePackage: number;
  highestPackage: number;
  companiesVisited: number;
}

interface PlacementProcess {
  step: number;
  title: string;
  description: string;
}

const Placements: React.FC = () => {
  const placementStats: PlacementStats = {
    placementRate: 90,
    averagePackage: 4.5,
    highestPackage: 42,
    companiesVisited: 150,
  };

  const topRecruiters = [
    { name: 'Google', logo: `${import.meta.env.BASE_URL}logos/googl.png`, package: '35–45 LPA' },
    { name: 'Microsoft', logo: `${import.meta.env.BASE_URL}logos/microsof.png`, package: '28–40 LPA' },
    { name: 'Amazon', logo: `${import.meta.env.BASE_URL}logos/amazon.png`, package: '25–35 LPA' },
    { name: 'TCS', logo: `${import.meta.env.BASE_URL}logos/tcs.png`, package: '4–8 LPA' },
    { name: 'Infosys', logo: `${import.meta.env.BASE_URL}logos/infosys.jpg`, package: '4–7 LPA' },
    { name: 'Wipro', logo: `${import.meta.env.BASE_URL}logos/wipro.png`, package: '4–6 LPA' },
  ];

  const placementProcess: PlacementProcess[] = [
    {
      step: 1,
      title: 'Pre-placement Training',
      description: 'Aptitude, communication skills & technical prep through mock sessions.',
    },
    {
      step: 2,
      title: 'Resume Building',
      description: 'Workshops and expert mentoring to help craft impressive resumes.',
    },
    {
      step: 3,
      title: 'Company Registration',
      description: 'Students register for companies based on their eligibility & interest.',
    },
    {
      step: 4,
      title: 'On-Campus Interviews',
      description: 'Recruiters conduct tests, interviews, and group discussions.',
    },
    {
      step: 5,
      title: 'Final Offers',
      description: 'Selected candidates receive offer letters and join dates.',
    },
  ];

  const statVariants = {
    hidden: { opacity: 0, y: 50 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section id="placements" className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Placement Excellence</h2>
          <div className="w-32 h-1 bg-yellow-400 rounded-full mx-auto mt-4 mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our strong industry partnerships and comprehensive training programs ensure exceptional career opportunities for our graduates.
          </p>
        </div>

        {/* Placement Stats with Animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              Icon: TrendingUp,
              value: placementStats.placementRate,
              suffix: '%',
              label: 'Placement Rate',
            },
            {
              Icon: Award,
              value: placementStats.averagePackage,
              suffix: ' LPA',
              label: 'Average Package',
            },
            {
              Icon: Trophy,
              value: placementStats.highestPackage,
              suffix: ' LPA',
              label: 'Highest Package',
            },
            {
              Icon: Building,
              value: placementStats.companiesVisited,
              suffix: '+',
              label: 'Companies Visited Current Year',
            },
          ].map(({ Icon, value, suffix, label }, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={statVariants}
              className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Icon className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                <CountUp end={value} duration={2} enableScrollSpy scrollSpyDelay={300} />
                {suffix}
              </div>
              <div className="text-gray-600 font-medium">{label}</div>
            </motion.div>
          ))}
        </div>

        {/* Recruiters and Process */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Top Recruiters */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Top Recruiters</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {topRecruiters.map((recruiter, index) => (
                <div
                  key={index}
                  className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={recruiter.logo}
                      alt={recruiter.name}
                      className="w-12 h-12 object-contain rounded-md border bg-white"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{recruiter.name}</h4>
                      <p className="text-yellow-600 font-medium text-sm">{recruiter.package}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Placement Process */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Placement Process</h3>
            <div className="space-y-6">
              {placementProcess.map((step) => (
                <div key={step.step} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-yellow-500 text-gray-900 rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={`${import.meta.env.BASE_URL}pdf/Placed0.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-base px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 w-fit mx-auto"
          >
            <span>View Detailed Placement Report</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Placements;

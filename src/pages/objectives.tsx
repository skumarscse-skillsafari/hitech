
`NPM RUN DEVimport React from 'react';

const Objective = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <div>
          <img
            src="https://hindusthan.net/hitech/wp-content/uploads/sites/3/2020/02/college-e1581343895067.png"
            alt="Hindusthan Institute of Technology"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
            Our History
          </h2>
          <hr className="border-blue-200 mb-6" />

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Hindusthan Institute of Technology (HITECH) was started in the year of 2007 by the great industrialist and philanthropist, Thiru.T.S.R.Khannaiyann.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            It is an Autonomous Institution. The primary objective of the Hindusthan Institute of Technology is to educate and prepare men and women for leadership in industry, government, and educational institutions; to advance the knowledge base of the engineering professions; and to influence the future directions of engineering education and practice.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            The College has well-furnished classrooms, state-of-the-art laboratories, computer centers and a well-stocked library. Separate Hostels with all the modern amenities are provided for men and women. The campus consists of lush green lawns, a playground, GYM and also facilities for indoor games. A fleet of vehicles caters to the transport needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Objective;

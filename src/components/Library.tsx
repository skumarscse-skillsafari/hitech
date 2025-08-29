import React from 'react';

const Library: React.FC = () => {
  const libraryPhotos = [
    { id: 1, url: '/data/Lib1.JPG', alt: 'Library bookshelf with books', title: 'Extensive Book Collection' },
    { id: 2, url: '/data/Lib10.JPG', alt: 'Students studying in library', title: 'Study Areas' },
    { id: 3, url: '/data/Lib6.JPG', alt: 'Modern library interior', title: 'Modern Reading Spaces' },
    { id: 4, url: '/data/Lib3.JPG', alt: 'Digital library resources', title: 'Digital Resources' },
    { id: 5, url: '/data/Lib4.JPG', alt: 'Library reading area', title: 'Quiet Reading Zones' },
    { id: 6, url: '/data/Lib5.JPG', alt: 'Group study area in library', title: 'Collaborative Spaces' },
    { id: 7, url: '/data/Lib2.JPG', alt: 'Library computer section', title: 'Computer Lab' },
    { id: 8, url: '/data/Lib7.JPG', alt: 'Academic research area', title: 'Research Support Center' },
    { id: 9, url: '/data/Lib9.JPG', alt: 'Library entrance and reception', title: 'Library Entrance' },
    { id: 10, url: '/data/Lib8.JPG', alt: 'Library study tables', title: 'Individual Study Areas' },
    { id: 11, url: '/data/Lib11.JPG', alt: 'Library archive section', title: 'Archive & Special Collections' },
    { id: 12, url: '/data/Lib12.JPG', alt: 'Open books and reading materials', title: 'Academic Literature' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Central Library</h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Take a visual tour of our well-equipped resource center, housing thousands of academic and reference materials to support your educational journey.
          </p>
        </div>

        
        {/* Photo Gallery Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {libraryPhotos.map((photo) => (
              <div
                key={photo.id}
                className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 bg-white border-4 border-yellow-500"
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-sm">{photo.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

          {/* Library Resources Card */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Library Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full mt-3"></div>
              <span className="text-gray-700">50,000+ books across various disciplines</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full mt-3"></div>
              <span className="text-gray-700">Access to IEEE, Springer, Elsevier, and more</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full mt-3"></div>
              <span className="text-gray-700">Digital library and e-learning content</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full mt-3"></div>
              <span className="text-gray-700">Quiet reading zones and research support</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full mt-3"></div>
              <span className="text-gray-700">Extended hours during exams</span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full mt-3"></div>
              <span className="text-gray-700">Professional research assistance</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-10 text-center max-w-4xl mx-auto">
  <h3 className="text-2xl font-bold text-white mb-4">Visit Our Library Today</h3>
  <p className="text-white/90 mb-6 max-w-2xl mx-auto">
    Discover a world of knowledge and resources. Our library is open to all students and faculty members with extended hours during exam periods.
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <button className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
      Library Hours
    </button>
    <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors">
      Digital Catalogue
      
    </button>
  </div>
</div>

        </div>
      </div>
  
  );
};

export default Library;

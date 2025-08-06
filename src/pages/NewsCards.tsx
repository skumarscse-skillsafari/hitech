import React, { useState } from 'react';
import { Calendar, Tag } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  featured: boolean;
}

interface NewsCardsProps {
  news: NewsItem[];
}

const fallbackImage = '/image.png';

const NewsCards: React.FC<NewsCardsProps> = ({ news }) => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const getImageSrc = (img: string) => {
    if (!img) return fallbackImage;
    if (img.startsWith('http')) return img;
    return img.startsWith('/') ? img : `/${img}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'TBA';
    return date.toLocaleDateString('en-GB');
  };

  return (
    <div className="bg-white px-6 md:px-10 py-10 rounded-2xl shadow-lg">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2 relative inline-block">
          Campus News
          <span className="block w-20 h-1 bg-yellow-400 mx-auto mt-2 rounded-full"></span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Stay informed with the latest news and announcements from our campus.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-gray-50 border border-yellow-500 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
            onClick={() => setSelectedNews(item)}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={getImageSrc(item.image)}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = fallbackImage;
                }}
              />
              <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                {item.category}
              </span>
            </div>
            <div className="p-4">
              <div className="text-sm text-gray-500 mb-2">{formatDate(item.date)}</div>
              <h4 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-yellow-600">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm line-clamp-3">{item.excerpt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* News Modal */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white max-w-2xl w-full p-6 md:p-8 rounded-xl relative shadow-2xl">
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2 relative inline-block">
              {selectedNews.title}
              <span className="block w-20 h-1 bg-yellow-400 mt-2 rounded-full"></span>
            </h3>
            <img
              src={getImageSrc(selectedNews.image)}
              alt={selectedNews.title}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700 mb-4">{selectedNews.content}</p>
            <div className="flex flex-wrap gap-3 text-sm mt-4">
              <div className="flex items-center gap-1 bg-yellow-400 text-yellow-700 font-semibold px-3 py-1 rounded-full">
                <Calendar size={16} />
                {formatDate(selectedNews.date)}
              </div>
              <div className="flex items-center gap-1 bg-gray-100 text-gray-700 font-semibold px-3 py-1 rounded-full">
                <Tag size={16} />
                {selectedNews.category}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsCards;

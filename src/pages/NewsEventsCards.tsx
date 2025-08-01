import React, { useState } from 'react';

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

interface EventItem {
  id: number;
  title: string;
  description: string;
  date: string;
  endDate?: string;
  time: string;
  venue: string;
  type: string;
  registrationOpen: boolean;
  organizer: string;
  image: string;
}

interface Props {
  news: NewsItem[];
  events: EventItem[];
}

const fallbackImage = '/image.png';

const NewsEventsCards: React.FC<Props> = ({ news, events }) => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const getImageSrc = (img: string) => {
    if (!img) return fallbackImage;
    if (img.startsWith('http')) return img;
    return img.startsWith('/') ? img : `/${img}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'TBA';
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg relative">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest News & Events</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Explore the latest updates, achievements, and activities from our campus.
        </p>
      </div>

      {/* News Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Campus News</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group active:scale-95 sm:hover:-translate-y-2 cursor-pointer"
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
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{item.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Events Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Events</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gradient-to-br from-yellow-50 to-white border border-yellow-200 rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-44">
                <img
                  src={getImageSrc(event.image)}
                  alt={event.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = fallbackImage;
                  }}
                />
              </div>
              <div className="p-4">
                <span className="block text-xs font-semibold text-yellow-600 mb-1">
                  {formatDate(event.date)}
                </span>
                <h4 className="text-lg font-bold text-gray-800 mb-1">{event.title}</h4>
                <p className="text-gray-600 text-sm line-clamp-2">{event.description}</p>
                <div className="mt-2 text-xs text-gray-500">
                  <strong>Time:</strong> {event.time} <br />
                  <strong>Venue:</strong> {event.venue}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* News Modal */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white max-w-2xl p-8 rounded-xl relative shadow-xl">
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedNews.title}</h3>
            <img
              src={getImageSrc(selectedNews.image)}
              alt={selectedNews.title}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700 mb-4">{selectedNews.content}</p>
            <div className="text-sm text-gray-500">
              <strong>Date:</strong> {formatDate(selectedNews.date)} <br />
              <strong>Category:</strong> {selectedNews.category}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsEventsCards;

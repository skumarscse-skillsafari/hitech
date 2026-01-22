import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, User, ArrowRight, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  featured: boolean;
  author: string;
  readTime: string;
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

interface NewsEventsSectionProps {
  news: NewsItem[];
  events: EventItem[];
}

const NewsEventsSection: React.FC<NewsEventsSectionProps> = ({ news, events }) => {
  const navigate = useNavigate();
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEventIndex((prevIndex) =>
        prevIndex >= events.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [events.length]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatEventDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  const featuredNews = news.filter((item) => item.featured).slice(0, 3);
  const regularNews = news.filter((item) => !item.featured).slice(0, 4);

  return (
    <section id="news-events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest News & Events
          </h2>
           <div className="w-32 h-1 bg-yellow-400 rounded-full mx-auto mt-4 mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest achievements, announcements, and upcoming events at our institution
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* News Section */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Latest News</h3>
              <div className="space-y-6">
                {featuredNews.map((item, index) => (
                  <article
                    key={item.id}
                    className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                      index === 0 ? 'lg:flex' : ''
                    }`}
                  >
                    <div className={`relative overflow-hidden ${index === 0 ? 'lg:w-1/2' : 'h-48'}`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-4 left-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {item.category}
                      </div>
                    </div>
                    <div className={`p-6 ${index === 0 ? 'lg:w-1/2' : ''}`}>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <span>{formatDate(item.date)}</span>
                        <span>{item.author}</span>
                        <span>{item.readTime}</span>
                      </div>
                      <h3 className={`font-bold text-gray-900 group-hover:text-yellow-600 transition-colors mb-3 ${index === 0 ? 'text-xl' : 'text-lg'}`}>
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{item.excerpt}</p>
                      <button className="flex items-center space-x-2 text-yellow-600 hover:text-yellow-700 font-semibold group/btn">
                        <span>Read Full Story</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Events Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-8">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Upcoming Events</h3>
                <p className="text-gray-600 text-sm">Don't miss these important events</p>
              </div>

              <div className="relative h-96 overflow-hidden">
                <div
                  className="absolute transition-transform duration-700 ease-in-out"
                  style={{
                    transform: `translateY(-${currentEventIndex * 100}px)`,
                  }}
                >
                  {events.map((event, index) => (
                    <div
                      key={event.id}
                      className={`p-4 border-b border-gray-100 last:border-b-0 transition-all duration-300 ${
                        index === currentEventIndex ? 'bg-yellow-50' : 'hover:bg-gray-50'
                      }`}
                      style={{ height: '100px' }}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="bg-yellow-500 text-gray-900 p-2 rounded-lg text-center min-w-[50px]">
                            <div className="text-xs font-semibold">
                              {formatEventDate(event.date).split(' ')[0]}
                            </div>
                            <div className="text-lg font-bold">
                              {formatEventDate(event.date).split(' ')[1]}
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 text-sm line-clamp-1 mb-1">{event.title}</h4>
                          <p className="text-gray-600 text-xs line-clamp-2 mb-2">{event.description}</p>
                          <div className="flex items-center text-xs text-gray-500 space-x-3">
                            <span>{event.time}</span>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-3 w-3" />
                              <span className="truncate">{event.venue}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-4 right-4">
                  <div className="bg-gray-200 rounded-full p-1">
                    <ChevronUp className="h-4 w-4 text-gray-600 animate-bounce" />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <button
                  onClick={() => navigate('/events')}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 rounded-lg transition-colors text-sm"
                >
                  View All Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEventsSection;

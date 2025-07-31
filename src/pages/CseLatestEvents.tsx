import React, { useState } from 'react';
import { CalendarDays, Users } from 'lucide-react';
import eventsData from '../data/cseLatestEventsData.json';

interface Event {
  title: string;
  date: string;
  description: string;
  participants: string;
  image: string;
}

const fallbackImage = '/fallback.jpg';

const CseLatestEvents: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const events: Event[] = eventsData || [];

  const getImageSrc = (imgPath: string) => {
    if (!imgPath) return fallbackImage;
    if (imgPath.startsWith('http')) return imgPath;
    return imgPath.startsWith('/') ? imgPath : `/${imgPath}`;
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg relative max-w-7xl mx-auto px-4 py-12 relative sm:px-6">
      <div className="text-center mb-12">
        <h4 className="text-3xl font-bold text-yellow-500 mb-4">
          CSE Latest Events
        </h4>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Stay updated with the latest events and happenings in the Department of Computer Science and Engineering. Explore highlights, activities, and key moments from our recent engagements.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group active:scale-95 sm:hover:-translate-y-2 cursor-pointer flex flex-col justify-between"
            onClick={() => setSelectedEvent(event)}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={getImageSrc(event.image)}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 sm:scale-100 scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = fallbackImage;
                }}
              />
            </div>

            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h5 className="text-xl font-bold text-gray-900 group-hover:text-yellow-700 transition-colors">
                  {event.title}
                </h5>
                <p className="text-gray-600 mb-4">{event.description}</p>
              </div>
              <div className="flex justify-between text-sm">
                <span className="flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                  <CalendarDays size={16} />
                  {event.date}
                </span>
                <span className="flex items-center gap-2 bg-gray-200 text-gray-700 px-3 py-1 rounded-full">
                  <Users size={16} />
                  {event.participants}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-yellow-50 p-6 rounded-xl border border-yellow-200 text-center">
        <h5 className="font-bold text-gray-900 mb-3">Join the Movement</h5>
        <p className="text-gray-700 leading-relaxed">
          Our events bring together students, faculty, and industry experts for knowledge sharing,
          innovation, and collaboration. Be part of the journey that shapes future tech leaders.
        </p>
      </div>

      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-3xl p-8 rounded-2xl shadow-2xl relative">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-600 text-xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedEvent.title}</h3>
            <img
              src={getImageSrc(selectedEvent.image)}
              alt={selectedEvent.title}
              className="w-full h-56 object-cover rounded-lg mb-4"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = fallbackImage;
              }}
            />
            <p className="text-gray-700 mb-4">{selectedEvent.description}</p>
            <div className="flex justify-between text-sm text-gray-600">
              <span className="flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                <CalendarDays size={16} />
                {selectedEvent.date}
              </span>
              <span className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                <Users size={16} />
                {selectedEvent.participants}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CseLatestEvents;

import React from 'react';
import { CalendarDays, Users } from 'lucide-react';
import eventsData from '../data/cseLatestEventsData.json';

interface Event {
  title: string;
  date: string;
  description: string;
  participants: string;
  image: string;
}

const CseLatestEvents = () => {
  const events: Event[] = eventsData.events;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-yellow-700">CSE Latest Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden border">
            <img src={event.image} alt={event.title} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{event.title}</h2>
              <p className="text-gray-700">{event.description}</p>
              <div className="flex justify-between text-sm text-gray-600 mt-4">
                <span className="flex items-center gap-1">
                  <CalendarDays size={16} />
                  {event.date}
                </span>
                <span className="flex items-center gap-1">
                  <Users size={16} />
                  {event.participants}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CseLatestEvents;

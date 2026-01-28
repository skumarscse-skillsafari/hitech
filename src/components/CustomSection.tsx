import React from 'react';
import { BarChart3, Users, Image, FileText, Star, Quote } from 'lucide-react';

interface SectionData {
  id: string;
  title: string;
  content: any;
  type: string;
  order?: number;
}

interface CustomSectionProps {
  section: SectionData;
}

const CustomSection: React.FC<CustomSectionProps> = ({ section }) => {
  const renderContent = () => {
    switch (section.type) {
      case 'text':
        return (
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="h-6 w-6 text-yellow-500" />
              <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">{section.content}</p>
          </div>
        );

      case 'list':
        return (
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <BarChart3 className="h-6 w-6 text-yellow-500" />
              <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {section.content.map((item: string, index: number) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'stats':
        return (
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3 mb-8">
              <BarChart3 className="h-6 w-6 text-yellow-500" />
              <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {section.content.map((stat: any, index: number) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-md transition-shadow">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'testimonials':
        return (
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3 mb-8">
              <Quote className="h-6 w-6 text-yellow-500" />
              <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {section.content.map((testimonial: any, index: number) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 hover:border-yellow-300 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-yellow-600 font-medium text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 italic leading-relaxed">
                    "{testimonial.testimonial}"
                  </blockquote>
                  <div className="flex items-center mt-4 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'gallery':
        return (
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3 mb-8">
              <Image className="h-6 w-6 text-yellow-500" />
              <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.content.map((item: any, index: number) => (
                <div key={index} className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="aspect-w-4 aspect-h-3">
                    <img 
                      src={item.url} 
                      alt={item.caption}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-medium text-sm">{item.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>
            <p className="text-gray-600">Content type "{section.type}" is not supported yet.</p>
          </div>
        );
    }
  };

  return renderContent();
};

export default CustomSection;
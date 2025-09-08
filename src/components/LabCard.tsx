import React, { useEffect, useState } from 'react';
import { Users, ArrowRight } from 'lucide-react';
import ImageGallery from './ImageGallery';
import cseLabs from '../data/labs/cseLabs.json';

interface Image {
  url: string;
  caption: string;
}

interface LabCardProps {
  name: string;
  description: string;
  keyFeatures: string[];
  studentCapacity: number;
}

const LabCard: React.FC<LabCardProps> = ({
  name,
  description,
  keyFeatures,
  studentCapacity,
}) => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const lab = cseLabs.subcategories.find(l => l.name === name);
    setImages(lab?.images ?? []);
  }, [name]);

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="p-6 pb-4">
        <ImageGallery labName={name} images={images} />
      </div>

      <div className="p-6 pt-2">
        <div className="inline-flex items-center gap-1 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
          <Users className="w-4 h-4" />
          {studentCapacity} Students
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors duration-200">
          {name}
        </h3>

        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {keyFeatures.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {feature}
              </span>
            ))}
            {keyFeatures.length > 3 && (
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                +{keyFeatures.length - 3} more
              </span>
            )}
          </div>
        </div>

        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-yellow-600">
          Explore Facility
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
};

export default LabCard;

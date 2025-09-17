import React from 'react';
import PlacementCarousel from '../components/PlacementCarousel';

const PlacementPage: React.FC = () => {
  const students = [
    {
      id: 1,
      name: "John Doe",
      photo: "/photos/john.jpg",
      companyName: "Amazon",
      companyLogo: "/logos/amazon.png",
      packageLPA: "18",
    },
    {
      id: 2,
      name: "Priya Singh",
      photo: "/photos/priya.jpg",
      companyName: "Google",
      companyLogo: "/logos/google.png",
      packageLPA: "24",
    },
    {
      id: 3,
      name: "Rahul Kumar",
      photo: "/photos/rahul.jpg",
      companyName: "Microsoft",
      companyLogo: "/logos/microsoft.png",
      packageLPA: "21",
    },
    // Add more students here as needed
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10 mb-6">Our Star Placements</h1>
      <PlacementCarousel students={students} />
    </div>
  );
};

export default PlacementPage;

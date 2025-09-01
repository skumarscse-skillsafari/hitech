import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, ArrowLeft, Grid, List, Heart, Share2, Download, Camera } from 'lucide-react';
import galleryData from '../data/galleryData.json';

interface GalleryImage {
  url: string;
  caption: string;
}

const CategoryGallery: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');
  const [imageLoadStates, setImageLoadStates] = useState<{ [key: number]: boolean }>({});
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const currentCategory = galleryData.categories.find(
    cat => cat.name.toLowerCase().replace(/\s+/g, '-') === categoryName
  );

  const images = currentCategory?.images || [];

  useEffect(() => {
    if (!currentCategory) {
      navigate('/gallery');
    }
  }, [currentCategory, navigate]);

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (currentImageIndex - 1 + images.length) % images.length
      : (currentImageIndex + 1) % images.length;
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const handleImageLoad = (index: number) => {
    setImageLoadStates(prev => ({ ...prev, [index]: true }));
  };

  const toggleFavorite = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(index)) {
        newFavorites.delete(index);
      } else {
        newFavorites.add(index);
      }
      return newFavorites;
    });
  };

  const handleShare = (image: GalleryImage, e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: image.caption,
        url: image.url,
      });
    }
  };

  if (!currentCategory) {
    return null;
  }

  // Generate random heights for masonry layout
  const getRandomHeight = (index: number) => {
    const heights = ['h-64', 'h-80', 'h-96', 'h-72', 'h-88'];
    return heights[index % heights.length];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Matching HIT Theme */}
      <div className="relative bg-white/30 text-gray-900 py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Camera className="h-12 w-12 text-gray-800 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold">
                {currentCategory.name}
              </h1>
            </div>
            <div className="w-32 h-1 bg-yellow-400 rounded-full mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto mb-8">
              Discover {images.length} stunning images from our {currentCategory.name.toLowerCase()} collection
            </p>
            
            {/* View Mode Toggle */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  viewMode === 'grid' 
                    ? 'bg-gray-800 text-white' 
                    : 'bg-white/20 text-gray-800 hover:bg-white/30'
                }`}
              >
                <Grid className="h-5 w-5" />
                Grid View
              </button>
              <button
                onClick={() => setViewMode('masonry')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  viewMode === 'masonry' 
                    ? 'bg-gray-800 text-white' 
                    : 'bg-white/20 text-gray-800 hover:bg-white/30'
                }`}
              >
                <List className="h-5 w-5" />
                Masonry View
              </button>
            </div>

            <button
              onClick={() => navigate('/gallery')}
              className="group flex items-center gap-2 mx-auto px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Back to Gallery</span>
            </button>
          </div>
        </div>
      </div>

      {/* Images Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
                onClick={() => openLightbox(image, index)}
              >
                <div className="relative">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    onLoad={() => handleImageLoad(index)}
                  />
                  {!imageLoadStates[index] && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
                  )}
                </div>

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      onClick={(e) => toggleFavorite(index, e)}
                      className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                        favorites.has(index) 
                          ? 'bg-red-500 text-white' 
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      <Heart className={`h-4 w-4 ${favorites.has(index) ? 'fill-current' : ''}`} />
                    </button>
                    <button
                      onClick={(e) => handleShare(image, e)}
                      className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm transition-all duration-300"
                    >
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-medium text-sm mb-2">{image.caption}</p>
                    <div className="w-full h-1 bg-white/30 rounded-full">
                      <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full w-0 group-hover:w-full transition-all duration-1000 delay-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white break-inside-avoid mb-6"
                onClick={() => openLightbox(image, index)}
              >
                <div className="relative">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${getRandomHeight(index)}`}
                    onLoad={() => handleImageLoad(index)}
                  />
                  {!imageLoadStates[index] && (
                    <div className={`absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse ${getRandomHeight(index)}`}></div>
                  )}
                </div>

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      onClick={(e) => toggleFavorite(index, e)}
                      className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                        favorites.has(index) 
                          ? 'bg-red-500 text-white' 
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      <Heart className={`h-4 w-4 ${favorites.has(index) ? 'fill-current' : ''}`} />
                    </button>
                    <button
                      onClick={(e) => handleShare(image, e)}
                      className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm transition-all duration-300"
                    >
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-medium text-sm mb-2">{image.caption}</p>
                    <div className="w-full h-1 bg-white/30 rounded-full">
                      <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full w-0 group-hover:w-full transition-all duration-1000 delay-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      
    </div>
  );
};

export default CategoryGallery;
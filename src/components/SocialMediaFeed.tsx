import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, Linkedin, Twitter, Youtube, Heart, MessageCircle, Share, ExternalLink, Play } from 'lucide-react';

interface SocialPost {
  id: number;
  image?: string;
  caption?: string;
  title?: string;
  content?: string;
  likes: number;
  comments?: number;
  shares?: number;
  date: string;
  videoUrl?: string;
}

interface SocialMediaFeedProps {
  platform: 'instagram' | 'facebook' | 'linkedin' | 'twitter' | 'youtube';
  posts: SocialPost[];
  showHeader?: boolean;
}

const SocialMediaFeed: React.FC<SocialMediaFeedProps> = ({
  platform,
  posts,
  showHeader = true
}) => {
  const [currentPosts, setCurrentPosts] = useState<SocialPost[]>([]);

  // Simulate real-time social media posts
  useEffect(() => {
    // In a real implementation, this would fetch from social media APIs
    setCurrentPosts(posts);
  }, [posts]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const getPlatformIcon = () => {
    switch (platform) {
      case 'instagram': return Instagram;
      case 'facebook': return Facebook;
      case 'linkedin': return Linkedin;
      case 'twitter': return Twitter;
      case 'youtube': return Youtube;
      default: return Instagram;
    }
  };

  const getPlatformColor = () => {
    switch (platform) {
      case 'instagram': return 'text-pink-600 bg-pink-50 border-pink-200';
      case 'facebook': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'linkedin': return 'text-blue-700 bg-blue-50 border-blue-300';
      case 'twitter': return 'text-sky-600 bg-sky-50 border-sky-200';
      case 'youtube': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const IconComponent = getPlatformIcon();
  const colorClasses = getPlatformColor();

  const renderInstagramPosts = () => (
    <div className="grid grid-cols-2 gap-4">
      {currentPosts.slice(0, 4).map((post) => (
        <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
          <div className="relative">
            <img 
              src={post.image} 
              alt="Instagram post"
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-medium line-clamp-2">{post.caption}</p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Heart className="h-4 w-4" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="h-4 w-4" />
                  <span>{post.comments}</span>
                </div>
              </div>
              <span>{formatDate(post.date)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderFacebookPosts = () => (
    <div className="space-y-6">
      {currentPosts.slice(0, 2).map((post) => (
        <div key={post.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
          <h4 className="font-bold text-gray-900 mb-3">{post.title}</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p>
          {post.image && (
            <img 
              src={post.image} 
              alt="Facebook post"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
          )}
          <div className="flex items-center justify-between text-sm text-gray-600 pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <Heart className="h-4 w-4" />
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="h-4 w-4" />
                <span>{post.comments}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Share className="h-4 w-4" />
                <span>{post.shares}</span>
              </div>
            </div>
            <span>{formatDate(post.date)}</span>
          </div>
        </div>
      ))}
    </div>
  );

  const renderLinkedinPosts = () => (
    <div className="space-y-6">
      {currentPosts.slice(0, 2).map((post) => (
        <div key={post.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
          <h4 className="font-bold text-gray-900 mb-3">{post.title}</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p>
          {post.image && (
            <img 
              src={post.image} 
              alt="LinkedIn post"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
          )}
          <div className="flex items-center justify-between text-sm text-gray-600 pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <Heart className="h-4 w-4" />
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="h-4 w-4" />
                <span>{post.comments}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Share className="h-4 w-4" />
                <span>{post.shares}</span>
              </div>
            </div>
            <span>{formatDate(post.date)}</span>
          </div>
        </div>
      ))}
    </div>
  );

  const renderTwitterPosts = () => (
    <div className="space-y-4">
      {currentPosts.slice(0, 3).map((post) => (
        <div key={post.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
          <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p>
          <div className="flex items-center justify-between text-sm text-gray-600 pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                <Heart className="h-4 w-4" />
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="h-4 w-4" />
                <span>{post.comments}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Share className="h-4 w-4" />
                <span>{post.shares}</span>
              </div>
            </div>
            <span>{formatDate(post.date)}</span>
          </div>
        </div>
      ))}
    </div>
  );

  const renderYoutubePosts = () => (
    <div className="space-y-6">
      {currentPosts.slice(0, 2).map((post) => (
        <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <div className="flex flex-col md:flex-row">
            <div className="relative md:w-64 h-48 md:h-32">
              <img 
                src={post.image} 
                alt="YouTube video"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors cursor-pointer">
                <Play className="h-12 w-12 text-white" />
              </div>
            </div>
            <div className="p-4 flex-1">
              <h4 className="font-bold text-gray-900 mb-2">{post.title}</h4>
              <p className="text-gray-700 text-sm mb-3">{post.content}</p>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Heart className="h-4 w-4" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>{post.comments}</span>
                  </div>
                </div>
                <span>{formatDate(post.date)}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderPosts = () => {
    switch (platform) {
      case 'instagram': return renderInstagramPosts();
      case 'facebook': return renderFacebookPosts();
      case 'linkedin': return renderLinkedinPosts();
      case 'twitter': return renderTwitterPosts();
      case 'youtube': return renderYoutubePosts();
      default: return renderInstagramPosts();
    }
  };

  return (
    <div className={`${colorClasses} rounded-2xl border-2 overflow-hidden`}>
      {showHeader && (
        <div className="p-6 border-b border-current/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <IconComponent className="h-6 w-6" />
              <h3 className="text-xl font-bold capitalize">{platform}</h3>
            </div>
            <a
              href={`#${platform}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm font-medium hover:underline"
            >
              <span>View All</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}

      <div className="p-6">
        {renderPosts()}
      </div>
    </div>
  );
};

export default SocialMediaFeed;
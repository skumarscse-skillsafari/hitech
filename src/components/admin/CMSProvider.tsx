import React, { createContext, useContext, useState, useEffect } from 'react';

interface CMSContent {
  [key: string]: any;
}

interface CMSContextType {
  content: CMSContent;
  updateContent: (section: string, data: any) => void;
  isEditing: boolean;
  setIsEditing: (editing: boolean) => void;
  userRole: string;
  setUserRole: (role: string) => void;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
};

interface CMSProviderProps {
  children: React.ReactNode;
}

export const CMSProvider: React.FC<CMSProviderProps> = ({ children }) => {
  const [content, setContent] = useState<CMSContent>({});
  const [isEditing, setIsEditing] = useState(false);
  const [userRole, setUserRole] = useState('viewer');

  // Load content from localStorage or API
  useEffect(() => {
    const loadContent = async () => {
      try {
        // In a real CMS, this would be an API call
        const savedContent = localStorage.getItem('cmsContent');
        if (savedContent) {
          setContent(JSON.parse(savedContent));
        }
      } catch (error) {
        console.error('Failed to load CMS content:', error);
      }
    };

    loadContent();
  }, []);

  const updateContent = (section: string, data: any) => {
    const newContent = {
      ...content,
      [section]: data
    };
    setContent(newContent);
    
    // Save to localStorage (in real CMS, this would be an API call)
    localStorage.setItem('cmsContent', JSON.stringify(newContent));
  };

  const value = {
    content,
    updateContent,
    isEditing,
    setIsEditing,
    userRole,
    setUserRole
  };

  return (
    <CMSContext.Provider value={value}>
      {children}
    </CMSContext.Provider>
  );
};
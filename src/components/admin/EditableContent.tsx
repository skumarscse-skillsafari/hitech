import React, { useState } from 'react';
import { Edit3, Save, X } from 'lucide-react';
import { useCMS } from './CMSProvider';

interface EditableContentProps {
  section: string;
  field: string;
  children: React.ReactNode;
  type?: 'text' | 'textarea' | 'image' | 'json';
  className?: string;
}

const EditableContent: React.FC<EditableContentProps> = ({
  section,
  field,
  children,
  type = 'text',
  className = ''
}) => {
  const { content, updateContent, isEditing, userRole } = useCMS();
  const [isFieldEditing, setIsFieldEditing] = useState(false);
  const [editValue, setEditValue] = useState('');

  const canEdit = ['admin', 'editor', 'contributor'].includes(userRole);
  const currentValue = content[section]?.[field] || '';

  const handleEdit = () => {
    setEditValue(currentValue);
    setIsFieldEditing(true);
  };

  const handleSave = () => {
    const sectionContent = content[section] || {};
    updateContent(section, {
      ...sectionContent,
      [field]: editValue
    });
    setIsFieldEditing(false);
  };

  const handleCancel = () => {
    setEditValue('');
    setIsFieldEditing(false);
  };

  if (!isEditing || !canEdit) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`relative group ${className}`}>
      {isFieldEditing ? (
        <div className="space-y-2">
          {type === 'textarea' ? (
            <textarea
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
              rows={4}
            />
          ) : (
            <input
              type={type === 'image' ? 'url' : 'text'}
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
              placeholder={type === 'image' ? 'Enter image URL' : 'Enter text'}
            />
          )}
          <div className="flex space-x-2">
            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-colors"
            >
              <Save className="h-4 w-4" />
            </button>
            <button
              onClick={handleCancel}
              className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : (
        <>
          {children}
          <button
            onClick={handleEdit}
            className="absolute top-2 right-2 bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Edit3 className="h-4 w-4" />
          </button>
        </>
      )}
    </div>
  );
};

export default EditableContent;
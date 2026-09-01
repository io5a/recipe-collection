import React, { useState } from 'react';
 
interface DragAndDropProps {
  onFilesSelected: (files: FileList) => void;
}
 
const DragAndDrop: React.FC<DragAndDropProps> = ({ onFilesSelected }) => {
  const [isDragging, setIsDragging] = useState(false);
 
  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
 
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };
 
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
 
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      onFilesSelected(files);
    }
  };
 
  return (
    <div
      style={{
        border: '2px dashed red',
        padding: '20px',
        textAlign: 'center'
      }}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {isDragging ? 'Drop files here...' : 'Drag and drop files here'}
    </div>
  );
};
 
export default DragAndDrop;

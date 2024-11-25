import React from 'react';
import { BookOpen } from 'lucide-react';

interface SummaryProps {
  text: string;
}

const Summary: React.FC<SummaryProps> = ({ text }) => {
  return (
    <div className="mt-6">
      <div className="bg-indigo-50 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <BookOpen className="w-6 h-6 text-indigo-600 mr-2" />
          <h3 className="text-xl font-semibold text-gray-900">Summary</h3>
        </div>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Summary;

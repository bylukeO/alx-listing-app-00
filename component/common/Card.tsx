import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ 
  title, 
  image, 
  price, 
  location, 
  rating, 
  onClick 
}) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
      <div className="relative h-48 w-full">
        <img
          src={image || '/assets/placeholder.jpg'}
          alt={title || 'Property listing'}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 truncate">{title}</h3>
          {rating && (
            <div className="flex items-center">
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span className="ml-1 text-sm text-gray-600">{rating}</span>
            </div>
          )}
        </div>
        {location && (
          <p className="text-sm text-gray-600 mb-2">{location}</p>
        )}
        {price && (
          <p className="text-base font-medium text-gray-900">${price} <span className="text-sm text-gray-600">night</span></p>
        )}
        <button 
          onClick={onClick}
          className="mt-3 text-sm text-blue-600 hover:text-blue-800 font-medium"
        >
          View details
        </button>
      </div>
    </div>
  );
};

export default Card;

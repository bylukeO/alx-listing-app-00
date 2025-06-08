import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { PROPERTYLISTINGSAMPLE } from '../constants';
const backgroundImage = "/assets/background-image.png";

// Pill component
interface PillProps {
  label: string;
  onClick?: () => void;
  selected?: boolean;
}
const Pill: React.FC<PillProps> = ({ label, onClick, selected }) => (
  <button
    className={`px-4 py-1 rounded-full border text-sm font-medium mr-2 mb-2 transition ${
      selected
        ? 'bg-blue-600 text-white border-blue-600'
        : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'
    }`}
    onClick={onClick}
    type="button"
  >
    {label}
  </button>
);

// Filter labels
const FILTER_LABELS = [
  'Top Villa',
  'Self Checkin',
  'Pet Friendly',
  'Beachfront',
  'Free Parking',
  'Mountain View',
  'Private Pool',
  'City Center',
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>ALX Listing App</title>
        <meta name="description" content="A modern Airbnb clone built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-[350px] md:h-[420px] flex items-center justify-center mb-8">
        <Image
          src={backgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center drop-shadow-lg">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-2xl text-white text-center drop-shadow">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="container mx-auto px-4 mb-8">
        <div className="flex flex-wrap">
          {FILTER_LABELS.map((label) => (
            <Pill key={label} label={label} />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Featured Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property, idx) => (
            <div
              key={property.name + idx}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <img
                  src={property.image}
                  alt={property.name}
                  className="object-cover w-full h-full"
                />
                {property.discount && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {property.discount}% OFF
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800 truncate">{property.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-blue-600 font-bold text-base">
                    ${property.price.toLocaleString()}
                  </span>
                  <span className="flex items-center text-yellow-500 font-medium text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.176 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                    {property.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
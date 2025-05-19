// API URLs
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com';
export const API_ENDPOINTS = {
  LISTINGS: '/listings',
  FEATURED: '/listings/featured',
  POPULAR: '/listings/popular',
};

// UI Constants
export const UI_CONFIG = {
  MAX_LISTINGS_PER_PAGE: 12,
  DEFAULT_CURRENCY: 'USD',
  DEFAULT_CURRENCY_SYMBOL: '$',
};

// Navigation
export const ROUTES = {
  HOME: '/',
  LISTING_DETAILS: '/listing',
  SEARCH: '/search',
  PROFILE: '/profile',
};

// Filter options (for future implementation)
export const FILTER_OPTIONS = {
  PROPERTY_TYPES: [
    'House',
    'Apartment',
    'Guesthouse',
    'Hotel',
    'Cabin',
  ],
  PRICE_RANGES: [
    { min: 0, max: 50, label: 'Under $50' },
    { min: 50, max: 100, label: '$50 - $100' },
    { min: 100, max: 200, label: '$100 - $200' },
    { min: 200, max: 500, label: '$200 - $500' },
    { min: 500, max: null, label: '$500+' },
  ],
};

// Sample data for development (remove in production)
export const SAMPLE_LISTINGS = [
  {
    id: '1',
    title: 'Modern Studio in Downtown',
    description: 'Bright and stylish studio apartment in the heart of downtown.',
    image: '/assets/listing1.jpg',
    price: 120,
    location: 'Downtown, New York',
    rating: 4.8,
    amenities: ['Wifi', 'Kitchen', 'Workspace', 'Washer'],
    hostName: 'John Doe',
    guests: 2,
    bedrooms: 0,
    beds: 1,
    baths: 1,
  },
  {
    id: '2',
    title: 'Cozy Beach House',
    description: 'Beautiful beach house with amazing ocean views and private access.',
    image: '/assets/listing2.jpg',
    price: 250,
    location: 'Malibu, California',
    rating: 4.9,
    amenities: ['Beach access', 'Ocean view', 'Kitchen', 'Free parking'],
    hostName: 'Jane Smith',
    guests: 6,
    bedrooms: 3,
    beds: 3,
    baths: 2,
  },
];

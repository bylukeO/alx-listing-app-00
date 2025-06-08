// Card component interfaces
export interface CardProps {
  title?: string;
  image?: string;
  price?: number;
  location?: string;
  rating?: number;
  onClick?: () => void;
}

// Button component interfaces
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

// Property listing interfaces (for future use)
export interface PropertyListing {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  location: string;
  rating: number;
  amenities: string[];
  hostName: string;
  hostImage?: string;
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
}

// PropertyProps interface for PROPERTYLISTINGSAMPLE
export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}

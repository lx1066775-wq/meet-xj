import React from 'react';

export interface Destination {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  tag: string;
}

export interface Itinerary {
  id: string;
  title: string;
  days: number;
  price: number;
  route: string[];
  highlights: string[];
  image: string;
}

export interface ServiceFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
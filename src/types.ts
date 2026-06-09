/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ActiveView = 'home' | 'about' | 'what-we-do' | 'sdgs' | 'contact' | 'donate';

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface Programme {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string; // Lucide icon name matching
  bullets: string[];
  imageUrl: string;
}

export interface SDGItem {
  number: number;
  name: string;
  color: string; // Official SDG HEX color
  contribution: string;
}

export interface CoreValue {
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  location: string;
}

export interface DonationTier {
  id: string;
  amount: number;
  title: string;
  description: string;
}

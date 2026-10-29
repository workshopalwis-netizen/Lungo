export interface CoffeeExperienceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  mood: string;
  image: string;
  badge: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  isBrandAsset?: boolean;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

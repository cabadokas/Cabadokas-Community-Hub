export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface AffiliateProgram {
  name: string;
  url: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  affiliateLinks?: { label: string; url: string }[];
}

export interface SalesFunnelStep {
  id: number;
  question: string;
  options: string[];
}
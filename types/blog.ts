export interface AffiliateOffer {
  title: string;
  description: string;
  link: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  affiliateOffer?: AffiliateOffer;
  content: string;
  faqs?: FAQ[];
}

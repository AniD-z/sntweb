export type ArticleType = {
  id: number;
  author?: string;  // add this field
  job: string;
  city: string;
  avatar: string;
  imgAlt: string;
  slug: string;
  biography?: {     // add this field too if present
    summary: string;
    body: string;
  };
  articles: Array<{
    title: string;
    popular: boolean;
    popularity?: number;  // make optional if missing sometimes
    description: string;
    date: string;
    read: string;
    label: string;
    img: string;
    imgAlt: string;
    slug: string;
    content: Array<{
      img: string;
      summary: string;
      section1: string;
      quote: Array<string>;
      summary2: string;
      section2: string;
    }>;
  }>;
};


import articles from "@/json/articles.json";

export async function getArticles(): Promise<ArticleType[]> {
  return articles as unknown as ArticleType[];
}

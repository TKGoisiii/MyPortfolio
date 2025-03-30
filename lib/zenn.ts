export interface ZennArticle {
  id: number;
  title: string;
  slug: string;
  published_at: string;
  path: string;
  body_updated_at: string;
  comments_count: number;
  liked_count: number;
  emoji: string;
  body_letters_count: number;
  user: {
    id: number;
    username: string;
    name: string;
    avatar_small_url: string;
  };
}

export async function getZennArticles(limit: number = 3): Promise<ZennArticle[]> {
  try {
    const response = await fetch('https://zenn.dev/api/articles?username=tkay');
    if (!response.ok) {
      throw new Error(`Zenn API request failed with status ${response.status}`);
    }
    const data = await response.json();
    return data.articles.slice(0, limit);
  } catch (error) {
    console.error('Error fetching Zenn articles:', error);
    return [];
  }
}

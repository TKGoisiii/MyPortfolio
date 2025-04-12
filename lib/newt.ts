import { createClient } from 'newt-client-js'
import type { BlogArticle, WorkProject } from './types';

const checkEnvVariable = (variable: string | undefined, name: string): string => {
  if (!variable) {
    throw new Error(`Environment variable ${name} is not defined.`);
  }
  return variable;
};

const spaceUid = checkEnvVariable(process.env.NEWT_SPACE_UID, 'NEWT_SPACE_UID');
const apiToken = checkEnvVariable(process.env.NEWT_CDN_API_TOKEN, 'NEWT_CDN_API_TOKEN');
export const blogAppUid = checkEnvVariable(process.env.NEWT_BLOG_APP_UID, 'NEWT_BLOG_APP_UID');
export const worksAppUid = checkEnvVariable(process.env.NEWT_WORKS_APP_UID, 'NEWT_WORKS_APP_UID');

export const newtClient = createClient({
  spaceUid: spaceUid,
  token: apiToken,
  apiType: 'cdn', 
});

//ブログ記事一覧取得
export const getBlogArticles = async (limit: number = 3): Promise<BlogArticle[]> => {
  try {
    const { items } = await newtClient.getContents<BlogArticle>({
      appUid: blogAppUid,
      modelUid: 'article',
      query: {
        select: ['_id', '_sys', 'title', 'publishDate', 'categoryName', 'body', 'slug'], 
        order: ['-_sys.customOrder'],
        limit: limit,
      },
    });
    return items;
  } catch (error) {
    console.error("Failed to fetch blog articles:", error);
    return [];
  }
};

//ブログ記事詳細取得
export const getBlogArticleBySlug = async (slug: string): Promise<BlogArticle | null> => {
  try {
    const { items } = await newtClient.getContents<BlogArticle>({
      appUid: blogAppUid,
      modelUid: 'article',
      query: {
        slug,
        select: [
          '_id',
          '_sys',
          'title',
          'slug',
          'meta',
          'body',
          'coverImage',
          'author',
          'tags'
        ],
      },
    });
    return items[0] || null;
  } catch (error) {
    console.error(`Failed to fetch blog article with slug ${slug}:`, error);
    return null;
  }
};

//作品一覧取得
export const getWorkProjects = async (limit: number = 6): Promise<WorkProject[]> => {
  try {
    const { items } = await newtClient.getContents<WorkProject>({
      appUid: worksAppUid,
      modelUid: 'portfolio',
      query: {
        select: ['_id', '_sys', 'title', 'categoryName', 'image', 'description'],
        order: ['-_sys.customOrder'],
        limit: limit,
      },
    });
    return items;
  } catch (error) {
    console.error("Failed to fetch work projects:", error);
    return [];
  }
};

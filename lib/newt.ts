import { createClient } from 'newt-client-js'

// Type guard for environment variables
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

// Import types
import type { BlogArticle, WorkProject } from './types';

// Function to fetch blog articles
export const getBlogArticles = async (limit: number = 3): Promise<BlogArticle[]> => {
  try {
    const { items } = await newtClient.getContents<BlogArticle>({
      appUid: blogAppUid,
      modelUid: 'article', // Assuming your Blog model UID is 'article' - CHANGE IF DIFFERENT
      query: {
        // Select body instead of excerpt
        select: ['_id', '_sys', 'title', 'publishDate', 'categoryName', 'body', 'slug'], 
        order: ['-publishDate'], // Order by publish date descending
        limit: limit,
      },
    });
    return items;
  } catch (error) {
    console.error("Failed to fetch blog articles:", error);
    return []; // Return empty array on error
  }
};

// Function to fetch single blog article by ID
export const getBlogArticleById = async (id: string): Promise<BlogArticle | null> => {
  try {
    const article = await newtClient.getContent<BlogArticle>({
      appUid: blogAppUid,
      modelUid: 'article',
      contentId: id,
    });
    return article;
  } catch (error) {
    console.error(`Failed to fetch blog article with ID ${id}:`, error);
    return null;
  }
};

// Function to fetch single blog article by slug
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

// Function to fetch work projects
export const getWorkProjects = async (limit: number = 6): Promise<WorkProject[]> => {
  try {
    const { items } = await newtClient.getContents<WorkProject>({
      appUid: worksAppUid,
      modelUid: 'portfolio', // Changed model UID from 'project' to 'portfolio'
      query: {
        select: ['_id', '_sys', 'title', 'categoryName', 'image', 'description'], // Select necessary fields
        order: ['-_sys.createdAt'], // Order by creation date descending
        limit: limit,
      },
    });
    return items;
  } catch (error) {
    console.error("Failed to fetch work projects:", error);
    return []; // Return empty array on error
  }
};

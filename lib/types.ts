// Newtから取得する画像オブジェクトの型
export interface NewtImage {
  _id: string;
  src: string;
  fileName: string;
  fileType: string;
  fileSize: number;
  width: number;
  height: number;
  title: string;
  altText: string;
  description: string;
  metadata: Record<string, unknown>;
}

// メタ情報の型
export interface MetaData {
  title?: string;
  description?: string;
  ogImage?: NewtImage;
}

// Blog記事の型
export interface BlogArticle {
  _id: string;
  _sys: {
    createdAt: string;
    updatedAt: string;
    customOrder?: number;
    raw: {
      createdAt: string;
      updatedAt: string;
      firstPublishedAt: string;
      publishedAt: string;
    };
  };
  title: string;
  slug: string;
  meta?: MetaData;
  body: string;
  coverImage?: NewtImage;
  author?: Author;
  tags?: Tag[];
  publishDate?: string;
  categoryName?: string;
}

// Works (制作物) の型
export interface WorkProject {
  _id: string;
  _sys: {
    createdAt: string;
    updatedAt: string;
    raw: {
      createdAt: string;
      updatedAt: string;
      firstPublishedAt: string;
      publishedAt: string;
    };
  };
  title: string;
  categoryName?: string;
  image?: NewtImage;
  description: string;
}

// Tag (タグ) の型
export interface Tag {
  _id: string
  _sys: {
    createdAt: string
    updatedAt: string
    customOrder: number
    raw: {
      createdAt: string
      updatedAt: string
      firstPublishedAt: string
      publishedAt: string
    }
  }
  name: string
  slug: string
}

export interface Author {
  _id: string
  _sys: {
    createdAt: string
    updatedAt: string
    customOrder?: number
    raw: {
      createdAt: string
      updatedAt: string
      firstPublishedAt: string
      publishedAt: string
    }
  }
  fullName: string
  slug: string
  biography: string
  profileImage?: NewtImage
}

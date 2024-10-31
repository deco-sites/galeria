import { ImageWidget } from "apps/admin/widgets.ts";
import { VideoWidget } from "apps/admin/widgets.ts";
import { Section } from "deco/blocks/section.ts";
import { PageInfo } from "apps/commerce/types.ts";

/**
 * @titleBy name
 * @widget author
 */
export interface Author {
  name: string;
  email: string;
  avatar?: ImageWidget;
  jobTitle?: string;
  company?: string;
}

export interface Category {
  /**
   * @title Nome
   */
  name: string;
  /**
   * @title Slug
   * @description Termo que formará a url. Exemplo: https://dominio.com.br/slug-da-categoria
   */
  slug: string;
}

export interface BlogPost {
  /**
   * @title Categorias
   * @widget blog
   * @collection categories
   */
  categories: Category[];
  /**
   * @title Título da Campanha
   */
  title: string;
  /**
   * @title Slug da Campanha
   * @description Termo que formará a url. Exemplo: https://dominio.com.br/slug-da-campanha
   */
  slug: string;
  /**
   * @title Ano da Campanha
   */
  year: string;
  /**
   * @title Cliente da Campanha
   */
  company: string;
  /**
   * @title Capa da Campanha
   */
  image: ImageWidget;
  /**
   * @title Vídeo de Capa
   */
  video?: VideoWidget;
  /**
   * @title Conteúdo
   */
  content: Section[];
  /**
   * @title SEO
   */
  seo?: Seo;
  /**
   * @title Tempo de Leitura
   */
  readTime?: number;
  /**
   * @title Opções Avançadas
   */
  extraProps?: ExtraProps[];
}

export interface ExtraProps {
  key: string;
  value: string;
}

export interface Seo {
  /**
   * @title Título da Página
   */
  title?: string;
  /**
   * @title Descrição da Página
   */
  description?: string;
  /**
   * @title Imagem de Compartilhamento
   */
  image?: ImageWidget;
  /**
   * @title Canonical
   */
  canonical?: string;
  /**
   * @title NoIndex?
   */
  noIndexing?: boolean;
}

export interface BlogPostPage {
  "@type": "BlogPostPage";
  post: BlogPost;
  seo?: Seo | null;
}

export type SortBy =
  | "date_desc"
  | "date_asc"
  | "title_asc"
  | "title_desc";

export interface BlogPostListingPage {
  posts: BlogPost[];
  pageInfo: PageInfo;
  seo: Seo;
}

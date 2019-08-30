/**
 * Esta interface la cree apartir de un plugin de vs code
 * 
 * con ya haver copiado todo el json y seleccionar este plugin me crea la interfaz
 * ctrl + shift + p // y buscar json to ts: converse from clipcopy
 */

export interface RespuestaToHeadlines {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: Source;
  author?: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content?: string;
}

export interface Source {
  id?: string;
  name: string;
}
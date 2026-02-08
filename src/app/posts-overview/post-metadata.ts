export interface PostMetadata {
 fullPath: string
  folder: string
  fileName:string
  attributes: Attributes
}

export interface Attributes {
  layout: string
  title: string
  date: string
  categories: string
  excerpt: string
  header: Header
}

export interface Header {
  teaser: string
}
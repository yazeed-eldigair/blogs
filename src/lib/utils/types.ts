export type NoUndefinedField<T> = { [P in keyof T]-?: NoUndefinedField<NonNullable<T[P]>> };

export type SparkleType = {
  id: string,
  createdAt: number,
  color: string,
  size: number,
  style: any
}

export type TagType = {
  label: string,
  color?: 'primary' | 'secondary'
}

export type ExternalLink = {
  label: string,
  href: string
}

export type SocialLink = {

}

export type Project = {
  name: string,
  description: string,
  externalLink?: ExternalLink,
  githubLink: string,
  image: string,
  tags: TagType[]
}

export type BlogPost = {
  tags: string[],
  keywords: string[],
  hidden: boolean,
  slug: string,
  title: string,
  date: string,
  updated: string,
  excerpt: string,
  html: string | undefined,
  readingTime: string,
  relatedPosts: BlogPost[],
  coverImage: string | undefined
}
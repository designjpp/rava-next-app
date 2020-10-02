export type Image = {
  alternativeText: string
  url: string
}

export type Images = {
  alternativeText: string
  url: string
}

export type categories = {
  name: string
  url: string
}

export type AllPosts = {
  photo: Image
  name: string
  id: Number
  url: string
  images: Images[]
  categories: categories[]
}
export type InstaFeed = {
  src: string
  alt: string
  url: string
}

export type LandingPageProps = {
  allPosts: AllPosts[]
  instaFeed: InstaFeed[]
}

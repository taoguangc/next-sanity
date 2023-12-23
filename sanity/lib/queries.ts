import { groq } from 'next-sanity'
import { client } from './client'
import { Post } from '@/types/Post'
import { Page } from '@/types/Page'

// Construct our "image meta" GROQ
export const imageMeta = `
  "alt": coalesce(alt, asset->altText),
  asset,
  crop,
  customRatio,
  hotspot,
  "id": asset->assetId,
  "type": asset->mimeType,
  "aspectRatio": asset->metadata.dimensions.aspectRatio,
  "lqip": asset->metadata.lqip
`

// Construct our "portable text content" GROQ
export const ptContent = `
  ...,
  markDefs[]{
    ...,
    _type == "link" => {
      "url": @.url,
      "isButton": @.isButton,
      "styles": @.styles{style, isLarge, isBlock},
      "page":@.page->{
         "type": _type,
         "slug": slug.current,
      }
    }
  },
  _type == "photo" => {
    ${imageMeta}
  }
`

// Construct our "blocks" GROQ
export const blocks = `
  _type == 'freeform' => {
    _type,
    _key,
    content[]{
      ${ptContent}
    },
    textAlign,
    maxWidth
  },
  _type == 'accordions' => {
    _type,
    _key,
    items[]{
      "id": _key,
      title,
      content[]{
        ${ptContent}
      }
    }
  }
`

// Construct our content "modules" GROQ
export const modules = `
  _type == 'grid' => {
    _type,
    _key,
    size,
    columns[]{
      sizes[]{
        breakpoint,
        width,
        justify,
        align,
        start
      },
      blocks[]{
        ${blocks}
      }
    }
  },
  _type == 'hero' => {
    _type,
    _key,
    title,
  },
  _type == 'marquee' => {
    _type,
    _key,
    items[]{
      _type == 'simple' => {
        _type,
        text
      },
      _type == 'photo' => {
        _type,
        "photo": {
          ${imageMeta}
        }
      },
    },
    speed,
    reverse,
    pausable
  },
  _type == 'dividerPhoto' => {
    _type,
    _key,
    photo{
      ${imageMeta}
    }
  },
  _type == 'productHero' => {
    _type,
    _key,
  },
  _type == 'collectionGrid' => {
    _type,
    _key,
    "title": ^.title,
    "paginationLimit": *[_type == "shopSettings"][0].paginationLimit,
    "filter": *[_type == "shopSettings"][0].filter{
      isActive,
      groups[]{
        "id": _key,
        title,
        "slug": slug.current,
        display,
        options[]->{
          type,
          title,
          "slug": slug.current,
          "color": color->color
        }
      }
    },
    "noFilterResults": *[_type == "shopSettings"][0].noFilterResults[]{
      ${ptContent}
    },
  }
`

export async function getPosts(): Promise<Post[]> {
  return client.fetch(
    groq`*[_type == "post"]{
      _id,
      _createdAt,
      title,
      'slug': slug.current,
      'asset': image.asset->,
      'mainImage': image.asset->url,
      categories,
      body
    }`
  )
}

export async function getPost(slug: string): Promise<Post> {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      'slug': slug.current,
      'mainImage': image.asset->url,
      'lqip': image.asset->metadata.lqip,
      categories,
      body
    }`,
    { slug }
  )
}

export async function getPage(slug: string): Promise<Page> {
  return client.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      title,
      'slug': slug.current,
      pageBuilder,
    }`,
    { slug }
  )
}

export async function getHomepage(slug: string): Promise<Page> {
  return client.fetch(
    groq`*[_type == "page" && slug.current == '/'][0]{
      _id,
      _createdAt,
      title,
      'slug': slug.current,
      "modules" : modules[_type == "hero"]{
        _id,
        title,
        'image': image.asset->url,
      }
    }`,
    { slug }
  )
}

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
    _id, title, slug
  }`

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title, mainImage, body
  }`

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`

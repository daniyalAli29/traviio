import { SidebarSectionExports } from './Sidebar/Sidebar'
import featured_blogs_section from './FeaturedBlogSection'
import featured_place_blogs_section from './FeaturedPlaceBlogsSection'
import interests_section from './InterestsSection'

export const BlogSectionExports = [
  featured_blogs_section,
  interests_section,
  featured_place_blogs_section,
  // sidebar
  ...SidebarSectionExports,
]

export const BlogSections = [
  'featured_blogs_section',
  'image_header_section',
  'content_section',
  'newsletter_section',
  'interests_section',
  'featured_place_blogs_section',
] as const
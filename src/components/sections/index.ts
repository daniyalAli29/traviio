import { FunctionComponent } from 'react'

import { SanityDestinationSectionNames, SanitySectionNames } from '@/sanity/types'

import BlogSection from './BlogSection'
import ContentSection from './ContentSection'
import DealsSection from './DealsSection'
import FAQSection from './FAQSection'
import FeatureSection from './FeatureSection'
import GallerySection from './GallerySection'
import HeroSection from './HeroSection'
import NewsletterSection from './NewsletterSection'
import OfficeLocationSection from './OfficeLocationSection'
import ReviewSection from './ReviewSection'
import Testimonial from './Testimonial'
import ImageHeaderSection from './ImageHeaderSection'
import AtAGlanceSection from './AtAGlanceSection'

export const SectionMap: { [name in SanitySectionNames]?: FunctionComponent<any> } = {
  hero_section: HeroSection,
  feature_section: FeatureSection,
  newsletter_section: NewsletterSection,
  faq_section: FAQSection,
  deals_section: DealsSection,
  testimonial_section: Testimonial,
  featured_blogs_section: BlogSection,
  gallery_section: GallerySection,
  content_section: ContentSection,
  reviews_section: ReviewSection,
  office_locations_section: OfficeLocationSection,
  // blog_section,
  // content_section,
  // deals_section,
  // gallery_section,
  // index_section,
  // newsletter_section,
  // testimonial_section
}

export const DestinationSectionsMap: { [name in SanityDestinationSectionNames]?: FunctionComponent<any> } = {
  image_header_section:ImageHeaderSection,
  reviews_section: ReviewSection,
  faq_section: FAQSection,
  all_blogs_section:BlogSection,
  featured_tours_section:DealsSection,
  at_glance_section:AtAGlanceSection


}

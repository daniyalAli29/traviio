import layout_group from './atoms/content/Group'
import content_image from './atoms/content/Image'
import content_link_card from './atoms/content/LinkCard'
import rich_text from './atoms/content/Richtext'
import layout_stack from './atoms/content/Stack'
import content_text from './atoms/content/Text'
import { form_button, form_input_field } from './atoms/Form'
import icon from './atoms/Icon'
import link from './atoms/Link'
import link_button from './atoms/LinkButton'
import { locale_rich_text } from './atoms/locale/LocaleRichtext'
import locale_string from './atoms/locale/LocaleString'
import locale_text from './atoms/locale/LocaleText'
import meta_data from './atoms/MetaData'
import photo from './atoms/Photo'
import promo_banner from './atoms/PromoBanner'
import Article from './documents/Article'
import blog_page from './documents/BlogPage'
import Page from './documents/Page'
import Tag from './documents/Tag'
import tour_page from './documents/TourPage'
import { BlogSectionExports } from './sections/Blog'
import content_section from './sections/ContentSection'
import deals_section from './sections/DealsSection'
import { faq, faq_section } from './sections/FAQSection'
import { feature, feature_section } from './sections/FeatureSection'
import gallery_section from './sections/GallerySection'
import hero_section from './sections/HeroSection'
import image_header_section from './sections/ImageHeaderSection'
import index_section from './sections/IndexSection'
import newsletter_section from './sections/NewsletterSection'
import office_locations_section from './sections/OfficeLocationsSection'
import reviews_section from './sections/ReviewsSection'
import { testimonial, testimonial_section } from './sections/TestimonialSection'
import { TourSectionExports } from './sections/Tours'

export const schemaTypes = [
  // atoms
  locale_string,
  locale_text,
  locale_rich_text,
  form_button,
  form_input_field,
  icon,
  link,
  link_button,
  photo,
  meta_data,
  promo_banner,
  // content
  content_text,
  content_image,
  layout_group,
  layout_stack,
  content_link_card,
  rich_text,
  // sections
  content_section,
  deals_section,
  faq_section,
  faq,
  feature_section,
  feature,
  gallery_section,
  hero_section,
  image_header_section,
  index_section,
  newsletter_section,
  office_locations_section,
  reviews_section,
  testimonial_section,
  testimonial,
  // Blog Sections
  ...BlogSectionExports,
  ...TourSectionExports,
  // documents
  Article,
  blog_page,
  tour_page,
  Page,
  Tag,
]

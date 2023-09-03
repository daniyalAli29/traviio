import { defineArrayMember, defineField, defineType } from 'sanity'

import { ShootingStar } from '@phosphor-icons/react'

export default defineType({
  name: 'memorable_experiences_section',
  title: 'Memorable Experiences Section',
  icon: ShootingStar,
  description: 'A section with memorable experiences',
  type: 'object',
  fields: [
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'locale_string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'locale_string',
    }),
    defineField({
      name: 'experience_cards',
      title: 'Experience Cards',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'experience_card',
          title: 'Experience Card',
          icon: ShootingStar,
          description: 'A card with an experience',
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'locale_string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'locale_text',
            }),
          ],
        }),
      ],
    }),
  ],
})
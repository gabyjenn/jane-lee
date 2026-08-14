export default {
  name: 'artwork',
  title: 'Artwork',
  type: 'document',
  fields: [
    // 1. DUAL LANGUAGE TITLE
    {
      name: 'titleEn',
      title: 'Title (English)',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'titleKo',
      title: 'Title (Korean / 한국어)',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'titleEn', maxLength: 96 } // Generates slug from English title
    },
    {
      name: 'type',
      title: 'Type (Category)',
      type: 'string',
      options: {
        list: [
          { title: 'Installation', value: 'installation' },
          { title: 'Painting', value: 'painting' },
          { title: 'Publication', value: 'publication' },
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    // 2. DUAL LANGUAGE DESCRIPTION
    {
      name: 'descriptionEn',
      title: 'Description (English)',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [],
          marks: {
            decorators: [
              { title: 'Italic', value: 'em' },
            ],
            annotations: [],
          },
        },
      ],
    },
    {
      name: 'descriptionKo',
      title: 'Description (Korean / 한국어)',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [],
          marks: {
            decorators: [
              { title: 'Italic', value: 'em' },
            ],
            annotations: [],
          },
        },
      ],
    },
    {
      name: 'captionEn',
      title: 'Caption (English)',
      type: 'string',
    },
    {
      name: 'captionKo',
      title: 'Caption (Korean / 한국어)',
      type: 'string',
    },
    {
      name: 'gallery',
      title: 'Image / Video Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
        {
          type: 'file',
          name: 'video',
          title: 'Video',
          options: {
            accept: 'video/*',
          },
        },
      ],
      validation: Rule => Rule.required().min(1),
    },
  ],
  orderings: [
    {
      title: 'Year, Newest',
      name: 'yearDesc',
      by: [{ field: 'year', direction: 'desc' }]
    }
  ],

  preview: {
    select: {
      title: 'titleEn', 
      media: 'gallery.0', 
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title || 'Untitled Artwork',
        media: media,
      };
    },
  },
}
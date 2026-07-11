export default {
    name: 'artwork',
    title: 'Artwork',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: 'title', maxLength: 96 }
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
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'caption',
        title: 'Caption',
        type: 'string',
      },
      {
        name: 'gallery',
        title: 'Image Gallery',
        type: 'array',
        of: [{ type: 'image', options: { hotspot: true } }],
        validation: Rule => Rule.required().min(1),
      },
    ],
    orderings: [
      {
        title: 'Year, Newest',
        name: 'yearDesc',
        by: [{ field: 'year', direction: 'desc' }]
      }
    ]
  }
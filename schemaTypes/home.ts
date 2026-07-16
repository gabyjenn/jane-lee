export default {
  name: "home",
  title: "Home",
  type: "document",

  fields: [
    {
      name: "testField",
      title: "🚨 TEST FIELD 🚨",
      type: "string",
    },
    {
      name: "featuredWorks",
      title: "Featured Works",
      type: "array",

      of: [
        {
          type: "object",
          fields: [
            {
              name: "artwork",
              title: "Artwork",
              type: "reference",
              to: [{ type: "artwork" }],
            },
            {
              name: "imageNumber",
              title: "Image Number",
              type: "number",
              initialValue: 1,
              validation: Rule => Rule.required().min(1),
            },
          ],

          preview: {
            select: {
              title: "artwork.titleEn",
              imageNumber: "imageNumber",
            },
            prepare({ title, imageNumber }) {
              return {
                title: title || "Untitled",
                subtitle: `Image ${imageNumber}`,
              };
            },
          },
        },
      ],

      validation: Rule => Rule.max(24),
    },
  ],
}
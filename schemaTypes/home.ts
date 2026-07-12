export default {
    name: "home",
    title: "Home",
    type: "document",
  
    fields: [
  
      {
        name: "featuredWorks",
        title: "Featured Works",
        type: "array",
  
        of: [
          {
            type: "reference",
            to: [
              {
                type: "artwork"
              }
            ]
          }
        ],
  
        validation: Rule => Rule.max(24),
      }
  
    ]
  }
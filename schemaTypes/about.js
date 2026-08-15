export default {
    name: "about",
    title: "About",
    type: "document",
  
    fields: [
  
      // BIO
  
      {
        name: "bioEn",
        title: "Bio (English)",
        type: "array",
        of: [
          {
            type: "block",
            styles: [],
            lists: [],
            marks: {
              decorators: [
                { title: "Italic", value: "em" },
              ],
              annotations: [],
            },
          },
        ],
      },
  
      {
        name: "bioKo",
        title: "Bio (Korean)",
        type: "text",
      },
  
  
      // EDUCATION
  
      {
        name: "education",
        title: "Education",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
  
              {
                name: "year",
                title: "Year",
                type: "string",
              },

              {
                name: "descriptionEn",
                title: "Description (English)",
                type: "array",
                of: [
                  {
                    type: "block",
                    styles: [],
                    lists: [],
                    marks: {
                      decorators: [
                        { title: "Italic", value: "em" },
                      ],
                      annotations: [],
                    },
                  },
                ],
              },
  
              {
                name: "descriptionKo",
                title: "Description (Korean)",
                type: "text",
              },
  
            ],
          },
        ],
      },
  
  
  
      // EXHIBITIONS
  
      {
        name: "exhibitions",
        title: "Exhibitions",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
  
              {
                name: "year",
                title: "Year",
                type: "string",
              },
  
              {
                name: "descriptionEn",
                title: "Description (English)",
                type: "array",
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
                name: "descriptionKo",
                title: "Description (Korean)",
                type: "text",
              },
  
            ],
          },
        ],
      },
  
  
  
      // WORK EXPERIENCE
  
      {
        name: "workExperience",
        title: "Work Experience",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
  
              {
                name: "year",
                title: "Year",
                type: "string",
              },
  
              {
                name: "descriptionEn",
                title: "Description (English)",
                type: "array",
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
                name: "descriptionKo",
                title: "Description (Korean)",
                type: "text",
              },
  
            ],
          },
        ],
      },
  
  
  
      // TEACHING EXPERIENCE
  
      {
        name: "teachingExperience",
        title: "Teaching Experience",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
  
              {
                name: "year",
                title: "Year",
                type: "string",
              },
  
              {
                name: "descriptionEn",
                title: "Description (English)",
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
                name: "descriptionKo",
                title: "Description (Korean)",
                type: "text",
              },
  
            ],
          },
        ],
      },
  
  
  
      // CONTACT
  
      {
        name: "email",
        title: "Email",
        type: "string",
      },
  
      {
        name: "instagram",
        title: "Instagram",
        type: "string",
      },
  
    ],
  };
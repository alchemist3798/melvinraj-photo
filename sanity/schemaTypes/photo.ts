import { defineField, defineType } from 'sanity'

export const photoType = defineType({
  name: 'photo',
  title: 'Photo',
  type: 'document',

  fields: [

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
  name: 'roll',
  title: 'Film Roll',
  type: 'reference',
  to: [{ type: 'roll' }],
}),

defineField({
  name: 'caption',
  title: 'Caption',
  type: 'text',
}),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'film',
      title: 'Film Stock',
      type: 'string',
    }),

    defineField({
      name: 'camera',
      title: 'Camera',
      type: 'string',
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),

    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),

    defineField({
      name: 'notes',
      title: 'Field Notes',
      type: 'text',
    }),
    defineField({
  name: 'project',
  title: 'Project',
  type: 'string',
}),

  ],
})
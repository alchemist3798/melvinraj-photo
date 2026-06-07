import {
  defineField,
  defineType,
} from 'sanity'

export const rollType = defineType({
  name: 'roll',
  title: 'Film Roll',
  type: 'document',

  fields: [

    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),

    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'filmStock',
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
      name: 'dateRange',
      title: 'Date Range',
      type: 'string',
    }),

    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'fieldNotes',
      title: 'Field Notes',
      type: 'text',
    }),

  ],
})
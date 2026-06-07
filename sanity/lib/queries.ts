export const photosQuery = `
*[_type == "photo"] | order(_createdAt desc){
  title,
  film,
  camera,
  location,
  year,
  notes,
  project,
  "image": image.asset->url
}
`
export const rollsQuery = `
*[_type == "roll"] | order(year desc) {
  _id,
  title,
  slug,
  filmStock,
  camera,
  location,
  dateRange,
  description,
  fieldNotes,
  year,

  "coverImage": coverImage.asset->url,
}
`
export const singleRollQuery = `
*[
  _type == "roll" &&
  slug.current == $slug
][0]{
  _id,
  title,
  filmStock,
  camera,
  location,
  dateRange,
  description,
  fieldNotes,
  caption,

  "coverImage": coverImage.asset->url,

  "photos": *[
    _type == "photo" &&
    references(^._id)
  ]{
    title,
    description,
    film,
    camera,
    location,
    year,
    notes,

    "image": image.asset->url
  }
}
`
export const allRollSlugsQuery = `
*[_type == "roll"] | order(year desc){
  title,
  "slug": slug.current
}
`
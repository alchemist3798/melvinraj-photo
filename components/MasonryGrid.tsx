'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


type Photo = {
  image: string
  title: string
  description: string
  film: string
  camera: string
  location: string
  year: string
  notes: string
  project: string
  caption?: string
}

type Props = {
  photos: Photo[]
}

export default function MasonryGrid({
  photos,
}: Props) {

const [selectedPhotoIndex, setSelectedPhotoIndex] =
  useState<number | null>(null)
  const [activeFilter, setActiveFilter] =
  useState('All')
  const selectedPhoto =
  
  selectedPhotoIndex !== null
    ? photos[selectedPhotoIndex]
    : null
const filteredPhotos =
  activeFilter === 'All'
    ? photos
    : photos.filter(
        (photo) =>
          photo.film === activeFilter ||
          photo.camera === activeFilter ||
          photo.project === activeFilter
      )
const goNext = () => {

  if (selectedPhotoIndex === null) return

  setSelectedPhotoIndex(
    (selectedPhotoIndex + 1) % photos.length
  )
}

const goPrevious = () => {

  if (selectedPhotoIndex === null) return

  setSelectedPhotoIndex(
    (selectedPhotoIndex - 1 + photos.length) % photos.length
  )
}
useEffect(() => {

  const handleKeyDown = (
    event: KeyboardEvent
  ) => {

    if (!selectedPhoto) return

    if (event.key === 'Escape') {
      setSelectedPhotoIndex(null)
    }

    if (event.key === 'ArrowRight') {
      goNext()
    }

    if (event.key === 'ArrowLeft') {
      goPrevious()
    }
  }

  window.addEventListener(
    'keydown',
    handleKeyDown
  )

  return () => {
    window.removeEventListener(
      'keydown',
      handleKeyDown
    )
  }

}, [selectedPhoto, selectedPhotoIndex])
  return (

  <section id="archive" className="py-32 px-6 md:px-20 bg-[#F7F5F2]">

<div
  style={{
    maxWidth: '1180px',
    margin: '0 auto',
  }}
>
<div
  style={{
    display: 'grid',

    gridTemplateColumns:
      'repeat(3, minmax(0, 1fr))',

    gap: '18px',

    alignItems: 'start',
  }}
>

  {filteredPhotos.map((photo, index) => (

    <div
      key={photo.image}

      onClick={() =>
        setSelectedPhotoIndex(index)
      }

      className="
        cursor-pointer
        overflow-hidden
        rounded-[6px]
        group
      "
    >

      <img
        src={photo.image}
        alt={photo.title}

        style={{
          width: '100%',

          aspectRatio: 'auto',

          objectFit: 'cover',
          height: '100%',

          transition:
            'transform 0.7s ease, opacity 0.7s ease',
        }}

        className="
          group-hover:scale-[1.01]
          group-hover:opacity-90
        "
      />

      {photo.caption && (

        <p
          style={{
            marginTop: '14px',

            fontSize: '14px',

            lineHeight: '1.7',

            color: '#4A4A4A',

            fontStyle: 'italic',
          }}
        >
          {photo.caption}
        </p>

      )}

    </div>

  ))}

</div>
 
</div>

     <AnimatePresence>

  {selectedPhoto && (

    <motion.div

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}

      transition={{
        duration: 0.3,
      }}

      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.82)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}

      onClick={() => setSelectedPhotoIndex(null)}
    >

      <motion.div

        initial={{
          opacity: 0,
          y: 40,
          scale: 0.98,
        }}

        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}

        exit={{
          opacity: 0,
          y: 20,
        }}

        transition={{
          duration: 0.4,
          ease: 'easeOut',
        }}

        style={{
          backgroundImage:
  'linear-gradient(to bottom right, rgba(255,255,255,0.95), rgba(240,240,240,0.92))',
          maxWidth: '680px',
          width: '100%',
          display: 'flex',
flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 40px 120px rgba(0,0,0,0.35)',
        }}

        onClick={(e) => e.stopPropagation()}
      >

        {/* IMAGE */}

        <div
  style={{
    backgroundColor: '#111',
    padding: '14px',
  }}
>

  <img
    src={selectedPhoto.image}
    alt={selectedPhoto.title}
    style={{
      width: '100%',
      maxHeight: '480px',
      objectFit: 'cover',
      display: 'block',
    }}
  />

</div>

        {/* POSTCARD */}

        <div
          style={{
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >

          <div>

            <p
              style={{
                letterSpacing: '0.3em',
                fontSize: '12px',
                color: '#4B5B68',
                marginBottom: '64px',
                textTransform: 'uppercase',
              }}
            >
              Archived Frame
            </p>

            <h2
              style={{
                fontSize: '52px',
                color: '#111111',
                marginBottom: '24px',
              }}
            >
              {selectedPhoto.title}
            </h2>

<button
  onClick={(e) => {
    e.stopPropagation()
    goPrevious()
  }}
  style={{
    position: 'absolute',
    left: '40px',
    color: 'white',
    fontSize: '32px',
    opacity: 0.45,
    transition: '0.3s',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  }}
  onMouseEnter={(e) => {
  e.currentTarget.style.opacity = '1'
}}

onMouseLeave={(e) => {
  e.currentTarget.style.opacity = '0.45'
}}
>
  ←
</button>

<button
  onClick={(e) => {
    e.stopPropagation()
    goNext()
  }}
  style={{
    position: 'absolute',
    right: '40px',
    color: 'white',
    fontSize: '32px',
    opacity: 0.45,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  }}
>
  →
</button>
            <div
  style={{
    borderTop: '1px solid #D7D2CB',
    paddingTop: '24px',
    color: '#111111',
    lineHeight: '2',
  }}
  
>

  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '12px',
      marginBottom: '40px',
    }}
  >

    <div>

      <p
        style={{
          color: '#4B5B68',
          fontSize: '12px',
        }}
      >
        FILM
      </p>

      <p>
        {selectedPhoto.film}
      </p>

    </div>

    <div>

      <p
        style={{
          color: '#4B5B68',
          fontSize: '12px',
        }}
      >
        CAMERA
      </p>

      <p>
        {selectedPhoto.camera}
      </p>

    </div>

    <div>

      <p
        style={{
          color: '#4B5B68',
          fontSize: '12px',
        }}
      >
        LOCATION
      </p>

      <p>
        {selectedPhoto.location}
      </p>

    </div>

    <div>

      <p
        style={{
          color: '#4B5B68',
          fontSize: '12px',
        }}
      >
        YEAR
      </p>

      <p>
        {selectedPhoto.year}
      </p>

    </div>

  </div>

  <div>

    <p
      style={{
        color: '#4B5B68',
        fontSize: '12px',
        marginBottom: '12px',
        letterSpacing: '0.15em',
      }}
    >
      FIELD NOTES
    </p>

    <p
      style={{
        color: '#111111',
        lineHeight: '1.9',
        fontStyle: 'italic',
      }}
    >
      {selectedPhoto.notes}
    </p>

  </div>

</div>

          </div>

         <div
  style={{
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '48px',
    fontSize: '12px',
    color: '#4B5B68',
    letterSpacing: '0.15em',
  }}
>

  <p>MELVIN RAJ ARCHIVE</p>

  <p>#0027</p>

</div>

        </div>

      </motion.div>

    </motion.div>

  )}

</AnimatePresence>

    </section>
  )
}
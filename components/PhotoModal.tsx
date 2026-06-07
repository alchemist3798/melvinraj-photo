'use client'

import Image from 'next/image'

type Photo = {
  image: string
  title: string
  description: string
  film: string
  camera: string
  location: string
}

type PhotoModalProps = {
  photo: Photo
  onClose: () => void
}

export default function PhotoModal({
  photo,
  onClose,
}: PhotoModalProps) {

  return (

    <div
      className="
        fixed
        inset-0
        bg-black/70
        z-[9999]
        flex
        items-center
        justify-center
        p-6
      "
      onClick={onClose}
    >

      <div
       className="
  bg-[#F7F5F2]
  max-w-5xl
  w-full
  grid
  md:grid-cols-2
  overflow-hidden
  shadow-2xl

"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >

        {/* IMAGE */}

        <div className="relative bg-black">

          <Image
  src={photo.image}
  alt={photo.title}
  width={1200}
  height={1600}
  className="w-full h-auto object-cover"
/>

        </div>

        {/* INFO */}

        <div className="p-10 md:p-14 flex flex-col justify-between">

          <div>

            <p className="uppercase tracking-[0.3em] text-xs text-[#6E7A86] mb-6">
              Archived Frame
            </p>

            <h2 className="text-4xl md:text-5xl text-[#123448] mb-6">
              {photo.title}
            </h2>

            <p className="text-[#6E7A86] leading-relaxed text-lg mb-10">
              {photo.description}
            </p>

            <div className="space-y-3 text-sm text-[#123448]">

              <p>
                <span className="text-[#6E7A86]">Film:</span>{' '}
                {photo.film}
              </p>

              <p>
                <span className="text-[#6E7A86]">Camera:</span>{' '}
                {photo.camera}
              </p>

              <p>
                <span className="text-[#6E7A86]">Location:</span>{' '}
                {photo.location}
              </p>

            </div>

          </div>

          <button
            onClick={onClose}
            className="
              mt-12
              border
              border-[#D7D2CB]
              px-6
              py-3
              text-sm
              hover:bg-[#EAE7E1]
              transition
            "
          >
            Close
          </button>

        </div>

      </div>

    </div>
  )
}
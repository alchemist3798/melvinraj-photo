import { client } from '@/sanity/lib/client'
import { singleRollQuery } from '@/sanity/lib/queries'
import { allRollSlugsQuery } from '@/sanity/lib/queries'
import MasonryGrid from '@/components/MasonryGrid'
import Footer from '@/components/Footer'
import Breadcrumbs
from '@/components/Breadcrumbs'
export default async function RollPage({
  params,
}: {
  params: { slug: string }
}) {

const { slug } = await params
  const roll = await client.fetch(
    singleRollQuery,
      { slug }
  )
const allRolls = await client.fetch(
  allRollSlugsQuery
)
const currentIndex =
  allRolls.findIndex(
    (item: {
  title: string
  slug: string
}) =>
      item.slug === slug
  )

const previousRoll =
  allRolls[currentIndex + 1]

const nextRoll =
  allRolls[currentIndex - 1]
  if (!roll) {

  return (

    <main
      style={{
        padding: '120px 24px',
      }}
    >
      Roll not found.
    </main>

  )

  
}

  return (

    <main
      style={{
        background: '#F5F4F0',
        minHeight: '100vh',
        // paddingTop: '160px',
      }}
    >

      {/* INTRO */}
<Breadcrumbs />
      <section
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 24px',
          marginBottom: '120px',
        }}
      >

        {/* <p
          style={{
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            fontSize: '12px',
            color: '#8A8A8A',
            marginBottom: '24px',
          }}
        >
          {roll.dateRange}
        </p> */}

        <h1
          style={{
            fontSize:
              'clamp(4rem, 8vw, 8rem)',
            lineHeight: 0.92,
            marginBottom: '40px',
          }}
        >
          {roll.title}
        </h1>

    
        <div
          style={{
            display: 'flex',
            gap: '24px',
            flexWrap: 'wrap',
            fontSize: '12px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#6E7A86',
          }}
        >

          <p>{roll.filmStock}</p>
          <p>{roll.camera}</p>
          <p>{roll.location}</p>
          <p>
  {roll.photos?.length || 0} Frames
</p>

        </div>

      </section>
{roll.fieldNotes && (

  <section
    style={{
      maxWidth: '820px',
      margin: '0 auto',
      padding: '0 24px',
      marginBottom: '120px',
    }}
  >

    <p
      style={{
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        fontSize: '11px',
        color: '#8A8A8A',
        marginBottom: '24px',
      }}
    >
      Field Notes
    </p>

    <p
      style={{
        fontSize: '20px',
        lineHeight: 1.9,
        color: '#2B2B2B',
      }}
    >
      {roll.fieldNotes}
    </p>

  </section>

)}

      {/* MASONRY */}
<section
  style={{
    maxWidth: '1400px',

    margin: '0 auto',

    padding: '120px 32px 180px',
  }}
>

  <MasonryGrid
    photos={roll.photos}
  />

</section>
<section
  style={{
    maxWidth: '1320px',
    margin: '160px auto',
    padding: '0 24px',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '40px',
  }}
>

  {/* PREVIOUS */}

  <div>

    {previousRoll && (

      <a
        href={`/archive/${previousRoll.slug}`}
        style={{
          textDecoration: 'none',
          color: '#111111',
        }}
      >

        <p
          style={{
            fontSize: '11px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#8A8A8A',
            marginBottom: '12px',
          }}
        >
          Previous Roll
        </p>

        <h3
          style={{
            fontSize: '2rem',
          }}
        >
          ← {previousRoll.title}
        </h3>

      </a>

    )}

  </div>

  {/* NEXT */}

  <div
    style={{
      textAlign: 'right',
    }}
  >

    {nextRoll && (

      <a
        href={`/archive/${nextRoll.slug}`}
        style={{
          textDecoration: 'none',
          color: '#111111',
        }}
      >

        <p
          style={{
            fontSize: '11px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#8A8A8A',
            marginBottom: '12px',
          }}
        >
          Next Roll
        </p>

        <h3
          style={{
            fontSize: '2rem',
          }}
        >
          {nextRoll.title} →
        </h3>

      </a>

    )}

  </div>

</section>
      <Footer />

    </main>
  )
}
import Link from 'next/link'

import { client }
from '@/sanity/lib/client'
import Breadcrumbs
from '@/components/Breadcrumbs'

import { rollsQuery }
from '@/sanity/lib/queries'

import Footer from '@/components/Footer'

type Roll = {
  _id: string

  title: string

  dateRange: string

  coverImage: string

  slug: {
    current: string
  }
}

export default async function ArchivePage() {

const rolls: Roll[] =
  await client.fetch(rollsQuery)

  return (

    <main
      style={{
        background: '#F5F4F0',
        minHeight: '100vh',
        // paddingTop: '180px',
      }}
    >
      <Breadcrumbs />

      {/* INTRO */}

      <section
        style={{
          maxWidth: '920px',
          margin: '0 auto',
          padding: '0 24px',
          marginBottom: '160px',
        }}
      >
        <h1
          style={{
            fontSize:
              'clamp(3rem, 6vw, 5.5rem)',

            lineHeight: 0.95,

            letterSpacing: '-0.04em',

            marginBottom: '36px',
          }}
        >
          A growing archive
          of film rolls,
          fragments,
          and passing time.
        </h1>

        <p
          style={{
            maxWidth: '680px',

            fontSize: '16px',

            lineHeight: 1.8,

            color: '#5F6772',
          }}
        >
          The archive is organized
          through film stocks,
          date ranges,
          and photographic sequences.

          Each roll represents
          a period of observation,
          movement,
          waiting,
          and preservation.
        </p>

      </section>

      {/* ROLLS */}

      <section
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 24px 180px',
        }}
      >

        <div
          style={{
            display: 'grid',

           gridTemplateColumns:
  'repeat(3, minmax(0,1fr))',

            columnGap: '32px',
rowGap: '72px',
          }}
        >

          {rolls.map((roll: Roll) => (

            <Link
              key={roll._id}
              href={`/archive/${roll.slug.current}`}

              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >

              <div>

                <div
                  style={{
                    overflow: 'hidden',
                    marginBottom: '24px',
                  }}
                >

                  <img
                    src={roll.coverImage}
                    alt={roll.title}

                    style={{
                      width: '100%',

                      height: '320px',

                      objectFit: 'cover',

                      // transform: 'scale(1.01)',
                    }}
                  />

                </div>

                <h2
                  style={{
                    fontSize: '1.7rem',
                    lineHeight: 1.05,

                    marginBottom: '12px',

                    letterSpacing: '-0.03em',
                  }}
                >
                  {roll.title}
                </h2>

                <p
                  style={{
                    color: '#6B6B6B',
                    fontSize: '15px',
                  }}
                >
                  {roll.dateRange}
                </p>

              </div>

            </Link>

          ))}

        </div>

      </section>

      <Footer />

    </main>
  )
}
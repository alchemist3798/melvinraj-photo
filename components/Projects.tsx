import Link from 'next/link'
import Reveal from './Reveal'

const projects = [
  {
    number: '01',
    title: 'Railway Windows',
    description:
      'Passing landscapes, loneliness, and motion suspended briefly in memory.',
    image: '/2.jpg',
    slug: 'railway-windows',
  },

  {
    number: '02',
    title: 'Hyderabad Silence',
    description:
      'Quiet streets, heat, architecture, and disappearing stillness.',
    image: '/hero.jpg',
    slug: 'hyderabad-silence',
  },
]

export default function Projects() {

  return (

    <section
      id="projects"
      style={{
        padding: '180px 24px 120px',
        background: '#F5F1EB',
      }}
    >

      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >

        <p
          style={{
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            fontSize: '12px',
            color: '#6E7A86',
            marginBottom: '24px',
          }}
        >
          Selected Projects
        </p>

        <h2
          style={{
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            lineHeight: 0.95,
            color: '#123448',
            marginBottom: '120px',
          }}
        >
          Stories told
          <br />
          through film.
        </h2>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '120px',
          }}
        >

  {projects.map((project, index) => (

  <Reveal key={project.slug}>
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              style={{
                textDecoration: 'none',
              }}
            >

              <div
              className="project-card"
                style ={{
                  display: 'grid',
                  direction:
  index % 2 === 0 ? 'ltr' : 'rtl',
                  gridTemplateColumns:
  'minmax(0, 1.2fr) minmax(340px, 0.8fr)',
                  gap: '64px',
                  alignItems: 'center',
                }}
              >

                {/* IMAGE */}

                <div
                className="project-image"
                  style={{
                    overflow: 'hidden',
                  }}
                >

                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
  width: '100%',
  height: '700px',
  objectFit: 'cover',
  transition:
    'transform 1.2s ease, filter 1.2s ease',
}}
                  />

                </div>

                {/* TEXT */}

                <div>

                  <p
                    style={{
                      fontSize: '14px',
                      letterSpacing: '0.3em',
                      color: '#6E7A86',
                      marginBottom: '24px',
                    }}
                  >
                    {project.number}
                  </p>

                  <h3
                    style={{
                      fontSize: 'clamp(3rem, 5vw, 5rem)',
                      lineHeight: 0.95,
                      color: '#123448',
                      marginBottom: '32px',
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      lineHeight: 1.8,
                      color: '#4B5B68',
                      maxWidth: '420px',
                    }}
                  >
                    {project.description}
                  </p>

                </div>

              </div>

            </Link>
</Reveal>
          ))}

        </div>

      </div>

    </section>
  )
}